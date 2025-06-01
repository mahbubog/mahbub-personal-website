
import Navigation from "@/components/Navigation";
import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know more about my journey, passion, and what drives me in the world of technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl aspect-square max-w-md mx-auto">
                <div className="w-full h-full rounded-2xl bg-gray-200 flex items-center justify-center">
                  <User size={120} className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Hello! I'm John Doe
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience in creating 
                digital solutions that make a difference. My journey in tech started with curiosity 
                and has evolved into a love for building applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in modern web technologies including React, Node.js, and cloud platforms. 
                When I'm not coding, you can find me exploring new technologies, contributing to open 
                source projects, or sharing knowledge with the developer community.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Full Stack Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Computer Science</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Available for hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
