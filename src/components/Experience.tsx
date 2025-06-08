
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      description: 'Lead frontend development for enterprise web applications using React.js and TypeScript. Mentor junior developers and collaborate with cross-functional teams to deliver high-quality products.',
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Led the migration from legacy jQuery to React.js',
        'Mentored 5 junior developers'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      duration: '2020 - 2022',
      description: 'Developed responsive web applications and collaborated with design team to implement pixel-perfect UIs. Worked in an agile environment with rapid iteration cycles.',
      achievements: [
        'Built 3 major product features from concept to deployment',
        'Reduced bundle size by 30% through webpack optimization',
        'Implemented automated testing with 90% code coverage'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Agency Pro',
      location: 'Remote',
      duration: '2019 - 2020',
      description: 'Created custom WordPress websites and landing pages for clients. Gained experience in client communication and project management.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Increased client satisfaction rating to 98%',
        'Learned modern JavaScript frameworks and best practices'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Work Experience</h2>
          <p className="text-xl text-muted-foreground">My professional journey</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-foreground mb-3">{exp.company}</h4>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium text-foreground">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
