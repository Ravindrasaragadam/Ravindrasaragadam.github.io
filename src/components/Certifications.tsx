import { Award, GraduationCap } from 'lucide-react';
import { certifications, education } from '../data/profile';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Certifications & Education
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-cyan-500" size={32} />
                <h3 className="text-2xl font-bold text-slate-900">Professional Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-slate-50 to-white rounded-lg border border-gray-100 hover:border-cyan-200 hover:shadow-md transition-all"
                  >
                    <h4 className="font-semibold text-slate-900 mb-1">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-cyan-500" size={32} />
                <h3 className="text-2xl font-bold text-slate-900">Education</h3>
              </div>
              <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-100 shadow-lg">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{education.degree}</h4>
                <p className="text-lg text-cyan-700 font-semibold mb-3">{education.field}</p>
                <p className="text-gray-700 font-medium mb-1">{education.institution}</p>
                <p className="text-gray-600 text-sm">{education.location}</p>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3">Key Focus Areas</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
                    <span>Data Structures & Algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
                    <span>Database Management Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
                    <span>Distributed Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
                    <span>Software Engineering</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
