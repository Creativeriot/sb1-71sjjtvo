import React from 'react';
import { GraduationCap } from 'lucide-react';

export function TeachingExperience() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <GraduationCap className="h-6 w-6 mr-2" />
        Teaching Experience
      </h2>
      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-xl font-semibold text-gray-900">Teaching Intern - Blue Class (3-4 years)</h3>
        <p className="text-gray-600 mb-4">St. Christopher's School, Kenya</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Developed and implemented daily lesson plans for toddler age group</li>
          <li>Conducted engaging circle time activities</li>
          <li>Created age-appropriate study materials</li>
          <li>Managed classroom transitions and student movement</li>
          <li>Assisted lead teacher with daily classroom activities</li>
          <li>Contributed to maintaining a safe and nurturing learning environment</li>
        </ul>
      </div>
    </section>
  );
}