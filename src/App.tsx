import React from 'react';
import { Header } from './components/Header';
import { Experience } from './components/Experience';
import { TeachingExperience } from './components/TeachingExperience';
import { Skills } from './components/Skills';
import { TechnicalProficiencies } from './components/TechnicalProficiencies';
import { Brands } from './components/Brands';
import { MessageSquare, Mail, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Professional Summary */}
        <section className="mb-16 bg-white rounded-lg shadow-md p-8 border-l-4 border-primary-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
          <p className="text-gray-600 leading-relaxed">
            Dynamic professional combining expertise in digital business management with emerging skills in Early Childhood Development Education. 
            Offers 3 years of proven experience in digital strategy while pursuing academic qualifications in ECDE, demonstrating strong capabilities 
            in both educational and digital environments.
          </p>
        </section>

        <Experience />
        <Brands />
        <TeachingExperience />
        <Skills />
        <TechnicalProficiencies />

        {/* Contact */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <MessageSquare className="h-6 w-6 mr-2 text-primary-500" />
            Get in Touch
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a href="mailto:njericynthia01@gmail.com" 
               className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              <Mail className="h-5 w-5 mr-2" />
              Email Me
            </a>
            <a href="tel:0724557685" 
               className="flex items-center px-6 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors">
              <Phone className="h-5 w-5 mr-2" />
              Call Me
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-primary-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Cynthia Njer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}