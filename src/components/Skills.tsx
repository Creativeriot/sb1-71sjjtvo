import React from 'react';
import { Code } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Professional Skills",
      skills: [
        "Community Management & Engagement",
        "Website Design & Development",
        "Digital Strategy Development",
        "Content Creation & Management",
        "Social Media Marketing",
        "Copywriting",
        "Graphic Design",
        "Podcast Production",
        "Early Childhood Education",
        "Lesson Planning",
        "Classroom Management",
        "Advertising Campaign Management"
      ]
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Code className="h-6 w-6 mr-2" />
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
            <ul className="grid grid-cols-2 gap-2">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}