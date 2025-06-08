
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © 2025 Sachin Singh. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} fill="currentColor" />
            <span>using React & TypeScript</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Designed and developed by Sachin Singh. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
