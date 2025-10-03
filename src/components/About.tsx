import { TrendingUp, Users, DollarSign, Database } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  const iconMap = {
    'Years Experience': TrendingUp,
    'Major Companies': Users,
    'Revenue Impact': DollarSign,
    'Data Processed': Database,
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            About Me
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {profileData.highlights.map((highlight, index) => {
              const Icon = iconMap[highlight.label as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full mb-4">
                    <Icon size={32} />
                  </div>
                  <p className="text-4xl font-bold text-slate-900 mb-2">{highlight.value}</p>
                  <p className="text-gray-600 font-medium">{highlight.label}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">My Story</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {profileData.summary.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What I Do Best</h3>
              <div className="space-y-4">
                {profileData.specialties.map((specialty, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-800 font-medium">{specialty}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-100">
                <p className="text-gray-700 italic">
                  "Outside of work, you'll find me traveling, exploring photography, and always looking for ways to make everyday stuff easier."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
