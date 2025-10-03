import { useState, useEffect, FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import { LogIn, Plus, CreditCard as Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { Project, BlogPost } from '../types';

type Tab = 'projects' | 'blogs';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);
  const [editingBlog, setEditingBlog] = useState<Partial<BlogPost> | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchProjects();
      fetchBlogs();
    }
  }, [isAuthenticated]);

  const checkAuth = async () => {
    const { data } = await supabase.auth.getSession();
    setIsAuthenticated(!!data.session);
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) {
      setIsAuthenticated(true);
    } else {
      alert('Login failed: ' + error.message);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  const fetchProjects = async () => {
    const { data } = await supabase.from('projects').select('*').order('display_order');
    setProjects(data || []);
  };

  const fetchBlogs = async () => {
    const { data } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
    setBlogs(data || []);
  };

  const saveProject = async (e: FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    if (editingProject.id) {
      await supabase.from('projects').update(editingProject).eq('id', editingProject.id);
    } else {
      await supabase.from('projects').insert([editingProject]);
    }
    setEditingProject(null);
    fetchProjects();
  };

  const saveBlog = async (e: FormEvent) => {
    e.preventDefault();
    if (!editingBlog) return;

    if (editingBlog.id) {
      await supabase.from('blog_posts').update(editingBlog).eq('id', editingBlog.id);
    } else {
      await supabase.from('blog_posts').insert([editingBlog]);
    }
    setEditingBlog(null);
    fetchBlogs();
  };

  const deleteProject = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      await supabase.from('projects').delete().eq('id', id);
      fetchProjects();
    }
  };

  const deleteBlog = async (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      await supabase.from('blog_posts').delete().eq('id', id);
      fetchBlogs();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <LogIn size={20} />
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 rounded-lg font-semibold ${
              activeTab === 'projects' ? 'bg-cyan-500 text-white' : 'bg-white text-gray-700'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('blogs')}
            className={`px-6 py-3 rounded-lg font-semibold ${
              activeTab === 'blogs' ? 'bg-cyan-500 text-white' : 'bg-white text-gray-700'
            }`}
          >
            Blog Posts
          </button>
        </div>

        {activeTab === 'projects' && (
          <div>
            <button
              onClick={() => setEditingProject({ technologies: [], featured: false, display_order: 0 })}
              className="mb-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold flex items-center gap-2"
            >
              <Plus size={20} />
              Add New Project
            </button>

            {editingProject && (
              <form onSubmit={saveProject} className="bg-white rounded-xl p-6 shadow-lg mb-8 space-y-4">
                <h3 className="text-2xl font-bold mb-4">{editingProject.id ? 'Edit' : 'New'} Project</h3>
                <input
                  type="text"
                  placeholder="Title"
                  value={editingProject.title || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Slug (URL-friendly)"
                  value={editingProject.slug || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, slug: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <textarea
                  placeholder="Short Description"
                  value={editingProject.short_description || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, short_description: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows={2}
                  required
                />
                <textarea
                  placeholder="Full Description"
                  value={editingProject.description || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows={4}
                  required
                />
                <input
                  type="text"
                  placeholder="Technologies (comma-separated)"
                  value={editingProject.technologies?.join(', ') || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, technologies: e.target.value.split(',').map(t => t.trim()) })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Impact Metrics"
                  value={editingProject.impact_metrics || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, impact_metrics: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Project URL"
                  value={editingProject.project_url || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, project_url: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="GitHub URL"
                  value={editingProject.github_url || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, github_url: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <div className="flex gap-4">
                  <button type="submit" className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingProject(null)}
                    className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl p-6 shadow-lg flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-600">{project.short_description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setEditingProject(project)} className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                      <Edit size={20} />
                    </button>
                    <button onClick={() => deleteProject(project.id)} className="p-2 text-red-600 hover:bg-red-50 rounded">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'blogs' && (
          <div>
            <button
              onClick={() => setEditingBlog({ tags: [], published: false, view_count: 0 })}
              className="mb-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold flex items-center gap-2"
            >
              <Plus size={20} />
              Add New Blog Post
            </button>

            {editingBlog && (
              <form onSubmit={saveBlog} className="bg-white rounded-xl p-6 shadow-lg mb-8 space-y-4">
                <h3 className="text-2xl font-bold mb-4">{editingBlog.id ? 'Edit' : 'New'} Blog Post</h3>
                <input
                  type="text"
                  placeholder="Title"
                  value={editingBlog.title || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Slug (URL-friendly)"
                  value={editingBlog.slug || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, slug: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <textarea
                  placeholder="Excerpt"
                  value={editingBlog.excerpt || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows={2}
                />
                <textarea
                  placeholder="Content (Markdown supported)"
                  value={editingBlog.content || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows={10}
                  required
                />
                <input
                  type="text"
                  placeholder="Tags (comma-separated)"
                  value={editingBlog.tags?.join(', ') || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, tags: e.target.value.split(',').map(t => t.trim()) })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Featured Image URL"
                  value={editingBlog.featured_image || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, featured_image: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={editingBlog.published || false}
                    onChange={(e) => setEditingBlog({
                      ...editingBlog,
                      published: e.target.checked,
                      published_at: e.target.checked ? new Date().toISOString() : null
                    })}
                    className="w-5 h-5"
                  />
                  <span className="font-semibold">Published</span>
                </label>
                <div className="flex gap-4">
                  <button type="submit" className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingBlog(null)}
                    className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            <div className="space-y-4">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-xl p-6 shadow-lg flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{blog.title}</h3>
                      {blog.published ? (
                        <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                          <Eye size={14} />
                          Published
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          <EyeOff size={14} />
                          Draft
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{blog.excerpt}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setEditingBlog(blog)} className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                      <Edit size={20} />
                    </button>
                    <button onClick={() => deleteBlog(blog.id)} className="p-2 text-red-600 hover:bg-red-50 rounded">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
