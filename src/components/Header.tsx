import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Cynthia Njer</h1>
          <p className="mt-3 text-xl text-gray-600">
            Digital Strategy Professional & Early Childhood Education Specialist-in-Training
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Naivasha, Kenya</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:njericynthia01@gmail.com" className="hover:text-blue-600">njericynthia01@gmail.com</a>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>0724557685</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}