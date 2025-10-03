import { useState, useEffect } from 'react';
import { BookOpen, Calendar, Tag, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { BlogPost } from '../types';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(6);

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
              Insights & Articles
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mb-16"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
              Insights & Articles
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mb-16"></div>

            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-cyan-100 text-cyan-600 rounded-full mb-6">
                <BookOpen size={48} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Content Coming Soon
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm currently working on sharing insights about data engineering, big data technologies,
                and best practices I've learned throughout my career. Check back soon for articles on:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">Building Scalable Data Pipelines</p>
                  <p className="text-sm text-gray-600">Architecture patterns and optimization techniques</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">Cloud Data Engineering</p>
                  <p className="text-sm text-gray-600">AWS and Azure best practices</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">Real-time Data Processing</p>
                  <p className="text-sm text-gray-600">Spark and Flink use cases</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">Data Quality & Governance</p>
                  <p className="text-sm text-gray-600">Ensuring data reliability at scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Insights & Articles
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {post.featured_image && (
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.published_at || '').toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      5 min read
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-cyan-600 transition-colors">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                  )}

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1 px-2 py-1 bg-cyan-50 text-cyan-700 rounded text-xs"
                        >
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={`#blog/${post.slug}`}
                    className="inline-block text-cyan-600 hover:text-cyan-700 font-semibold text-sm"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
