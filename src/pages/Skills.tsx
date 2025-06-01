
import Navigation from "@/components/Navigation";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML5/CSS3"],
      color: "blue"
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "Python", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"],
      color: "green"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "Mobile UI/UX"],
      color: "purple"
    },
    {
      title: "Tools & Technologies",
      icon: Code,
      skills: ["Git", "Docker", "AWS", "Firebase", "Figma", "VS Code"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 bg-blue-50 text-blue-700",
      green: "border-green-200 bg-green-50 text-green-700",
      purple: "border-purple-200 bg-purple-50 text-purple-700",
      orange: "border-orange-200 bg-orange-50 text-orange-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Skills
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${getColorClasses(category.color)}`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-50 rounded-lg px-4 py-2 text-center">
                      <span className="text-sm font-medium text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Levels */}
          <div className="mt-16 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Proficiency Levels
            </h3>
            
            <div className="space-y-6">
              {[
                { skill: "React/TypeScript", level: 90 },
                { skill: "Node.js/Express", level: 85 },
                { skill: "Database Design", level: 80 },
                { skill: "UI/UX Design", level: 75 },
                { skill: "Mobile Development", level: 70 },
                { skill: "DevOps/Cloud", level: 65 }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{item.skill}</span>
                    <span className="text-sm text-gray-500">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
