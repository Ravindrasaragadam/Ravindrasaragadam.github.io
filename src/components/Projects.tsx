import { useState, useEffect } from 'react';
import { ExternalLink, Github, TrendingUp, Plus } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Project } from '../types';

const featuredProjects = [
  {
    title: 'Fortune-500 Data Flow Automation',
    short_description: 'Architected and implemented automated data ingestion processing ~5TB/day on Azure, powering 50+ internal projects',
    technologies: ['PySpark', 'Azure', 'Data Pipelines', 'ETL'],
    impact_metrics: '5TB/day processed, 50+ projects supported',
    featured_image: null
  },
  {
    title: 'Flipkart Financial Reporting System',
    short_description: 'Designed and maintained Accounting and Financial Reporting system for month-end closures and audits',
    technologies: ['Apache Spark', 'Elasticsearch', 'SQL', 'AWS'],
    impact_metrics: '$6-10B revenue impact, IPO-critical infrastructure',
    featured_image: null
  },
  {
    title: 'Automated Data Transformation Platform',
    short_description: 'Built data transforming and warehousing application reducing processing time by 90%',
    technologies: ['PySpark', 'Pandas', 'Azure', 'SQL'],
    impact_metrics: '90% time reduction, multiple use cases optimized',
    featured_image: null
  },
  {
    title: 'Data Consolidation Tool',
    short_description: 'Designed consolidation tool for UK and Russia Markets reducing analysis time significantly',
    technologies: ['Python', 'Cloud Platforms', 'SQL'],
    impact_metrics: '500 human hours saved annually',
    featured_image: null
  }
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const allProjects = [...projects, ...featuredProjects.slice(projects.length)];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Impact Showcase
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Key projects and achievements that delivered measurable business impact
          </p>

          {loading ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {allProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {project.short_description}
                    </p>

                    {project.impact_metrics && (
                      <div className="flex items-start gap-2 mb-4 p-3 bg-cyan-50 rounded-lg">
                        <TrendingUp className="text-cyan-600 mt-0.5 flex-shrink-0" size={18} />
                        <p className="text-sm text-cyan-900 font-medium">{project.impact_metrics}</p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.technologies || []).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {(project.project_url || project.github_url) && (
                      <div className="flex gap-3 pt-4 border-t border-gray-100">
                        {project.project_url && (
                          <a
                            href={project.project_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium text-sm transition-colors"
                          >
                            <ExternalLink size={16} />
                            View Project
                          </a>
                        )}
                        {project.github_url && (
                          <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium text-sm transition-colors"
                          >
                            <Github size={16} />
                            Source Code
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl shadow-lg border-2 border-dashed border-slate-300 flex items-center justify-center p-8 min-h-[300px]">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-200 text-slate-400 rounded-full mb-4">
                    <Plus size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">More Projects Coming Soon</h3>
                  <p className="text-gray-600">
                    GitHub projects and additional work will be featured here
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
