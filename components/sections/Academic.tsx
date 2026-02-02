'use client';

import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

export default function Academic() {
  const programs = [
    {
      title: 'Diploma Programs',
      duration: '3 Years',
      description: 'Comprehensive diploma courses in various engineering disciplines',
      highlights: ['Industry-relevant curriculum', 'Practical training', 'Project-based learning'],
    },
    {
      title: 'Advanced Diploma',
      duration: '2 Years',
      description: 'Specialized advanced courses for career advancement',
      highlights: ['Specialization options', 'Research opportunities', 'Industry certifications'],
    },
  ];

  const features = [
    {
      icon: GraduationCap,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced professors dedicated to student success',
    },
    {
      icon: BookOpen,
      title: 'Updated Curriculum',
      description: 'Industry-aligned syllabus updated regularly to meet current demands',
    },
    {
      icon: Users,
      title: 'Small Batch Size',
      description: 'Optimal student-teacher ratio for personalized attention',
    },
    {
      icon: Award,
      title: 'Recognized Degree',
      description: 'AICTE approved programs recognized by industry and universities',
    },
  ];

  return (
    <section id="academic" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic Excellence
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive educational programs designed for your success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                  {program.duration}
                </span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
              <div className="space-y-3">
                {program.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-blue-600"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Start Your Engineering Journey Today</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful alumni who started their career at GPS On Bhadra Polytechnic College
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
            Download Prospectus
          </button>
        </div>
      </div>
    </section>
  );
}
