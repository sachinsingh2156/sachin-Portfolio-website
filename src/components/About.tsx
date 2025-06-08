
import React from 'react';
import { User, GraduationCap, Briefcase } from 'lucide-react';
import pic1 from '../assets/pic1.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-xl text-muted-foreground">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <User className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personal Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate software developer with over 5 years of experience creating 
                  innovative web applications. My journey began with curiosity about how websites work, 
                  and has evolved into a career focused on building scalable, user-centric solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bachelor's degree in Computer Science from Tech University (2018-2022). 
                  Specialized in software engineering with focus on web technologies and 
                  modern development practices.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Briefcase className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Currently working as a Senior Frontend Developer, specializing in React.js 
                  and modern JavaScript frameworks. I love turning complex problems into 
                  simple, beautiful designs.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={pic1}
              alt="Working"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
