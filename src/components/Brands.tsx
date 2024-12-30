import React from 'react';
import { Briefcase } from 'lucide-react';

const brands = [
  "Treatos",
  "CIL",
  "Pearl",
  "Ranee",
  "Rabukoke",
  "The Chester Suites",
  "Art Carte",
  "Plant Studio",
  "Kipusa Umbrella"
];

export function Brands() {
  return (
    <section className="mb-16 bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Briefcase className="h-6 w-6 mr-2" />
        Brands I've Worked With
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {brands.map((brand, index) => (
          <div 
            key={index}
            className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors"
          >
            <p className="font-medium text-gray-800">{brand}</p>
          </div>
        ))}
      </div>
    </section>
  );
}