
import Navigation from "@/components/Navigation";
import { Calendar, MapPin, Building, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React and Node.js. Mentored junior developers and implemented best practices for code quality and performance.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      period: "2021 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and product managers to deliver high-quality solutions.",
      achievements: [
        "Built 10+ responsive web applications",
        "Reduced bug reports by 35% through comprehensive testing",
        "Improved user engagement by 50% with better UX"
      ]
    },
    {
      title: "Frontend Developer",
      company: "WebStudio Inc",
      location: "Remote",
      period: "2020 - 2021",
      description: "Specialized in creating responsive and interactive user interfaces using React and modern CSS frameworks. Worked closely with UX/UI designers.",
      achievements: [
        "Converted 20+ designs to pixel-perfect implementations",
        "Optimized website loading speed by 45%",
        "Collaborated with cross-functional teams of 10+ members"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      period: "2016 - 2020",
      description: "Graduated Magna Cum Laude with focus on Software Engineering and Web Technologies."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey and the experiences that have shaped my expertise in web development.
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Work Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 mb-2">
                        <Building size={16} className="mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-500">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                      <div className="flex items-center text-blue-600 mb-2">
                        <GraduationCap size={16} className="mr-2" />
                        <span className="font-medium">{edu.school}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;
