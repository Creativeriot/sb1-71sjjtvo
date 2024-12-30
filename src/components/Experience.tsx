import React from 'react';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Digital Business Manager & Community Manager",
      company: "Akauard Solutions",
      period: "July 2024 - October 2024",
      responsibilities: [
        "Lead digital strategy development and implementation for diverse clients",
        "Build and manage online communities across various platforms",
        "Create and execute comprehensive content calendars",
        "Design and develop custom websites using Webflow and Framer",
        "Manage social media marketing campaigns and community engagement",
        "Optimize advertising campaigns across Facebook and TikTok platforms"
      ]
    },
    {
      title: "Digital Strategist",
      company: "Boom Africa",
      period: "September 2023 - June 2024",
      responsibilities: [
        "Spearheaded digital marketing initiatives and campaign management",
        "Developed and maintained client websites",
        "Created engaging content across multiple platforms",
        "Managed community engagement and social media presence",
        "Facilitated podcast production and content strategy",
        "Designed graphics and marketing materials for digital campaigns",
        "Coordinated with clients to align digital initiatives with business objectives"
      ]
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Briefcase className="h-6 w-6 mr-2" />
        Professional Experience
      </h2>
      
      {experiences.map((exp, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
          <p className="text-gray-600 mb-4">{exp.company} | {exp.period}</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}