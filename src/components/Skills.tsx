
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Vue.js']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express.js', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Webpack', 'Jest', 'Cypress', 'Figma']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-6 text-primary text-center">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-secondary/20 px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-primary/10 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Proficiency Level</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: 'React.js', level: 95 },
              { skill: 'JavaScript/TypeScript', level: 90 },
              { skill: 'Node.js', level: 85 },
              { skill: 'Python', level: 80 },
              { skill: 'AWS', level: 75 },
              { skill: 'Docker', level: 70 }
            ].map((item, index) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary/20 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
