
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Software Developer', 'Full Stack Engineer', 'React Specialist', 'Problem Solver'];
  
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setDisplayText(currentTitle.slice(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(deleteInterval);
              setCurrentIndex((prev) => (prev + 1) % titles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-8 shadow-2xl border-4 border-primary/20 hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary">John Doe</span>
          </h1>
          
          <div className="text-2xl md:text-3xl mb-6 h-12">
            <span className="text-muted-foreground">I'm a </span>
            <span className="text-primary font-semibold">{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and building amazing user experiences 
            with modern technologies. Let's build something incredible together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
