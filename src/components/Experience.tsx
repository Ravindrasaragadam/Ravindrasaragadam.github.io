import { useState } from 'react';
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { experiences } from '../data/profile';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Career Journey
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-16"></div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cyan-200 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-cyan-500 rounded-full border-4 border-white hidden md:block"></div>

                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className="text-cyan-500" size={24} />
                          <h3 className="text-2xl font-bold text-slate-900">{exp.company}</h3>
                        </div>
                        <p className="text-xl text-cyan-600 font-semibold mb-2">{exp.role}</p>
                        <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar size={16} />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <button
                        className="text-cyan-500 hover:text-cyan-600 transition-colors"
                        aria-label={expandedIndex === index ? 'Collapse' : 'Expand'}
                      >
                        {expandedIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                      </button>
                    </div>

                    {expandedIndex === index && (
                      <div className="mt-6 space-y-4 animate-fade-in">
                        <ul className="space-y-3">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                              <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
