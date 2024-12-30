import React from 'react';
import { Laptop, Film, BarChart2, Bot } from 'lucide-react';

const proficiencyCategories = [
  {
    title: "Design & Development",
    icon: Laptop,
    skills: ["Webflow", "Framer", "Canva", "Kittl"]
  },
  {
    title: "Content Creation & Management",
    icon: Film,
    skills: ["CapCut", "Adobe Podcast", "Buffer", "Notion", "Metricool"]
  },
  {
    title: "Marketing & Analytics",
    icon: BarChart2,
    skills: ["Facebook Ads Manager", "TikTok Ads Platform", "Google Workspace", "Google Sheets", "Meltwater"]
  },
  {
    title: "AI Tools",
    icon: Bot,
    skills: ["OpenAI", "Claude Sonnet"]
  }
];

export function TechnicalProficiencies() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Proficiencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proficiencyCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Icon className="h-6 w-6 mr-2 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}