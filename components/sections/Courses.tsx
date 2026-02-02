'use client';

import { Cog, Cpu, Zap, Car, Building, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Courses() {
  const courses = [
    {
      icon: Cog,
      name: 'Mechanical Engineering',
      duration: '3 Years',
      seats: '60',
      description: 'Design, manufacturing, and maintenance of mechanical systems',
      color: 'blue',
    },
    {
      icon: Building,
      name: 'Civil Engineering',
      duration: '3 Years',
      seats: '60',
      description: 'Construction, infrastructure development, and project management',
      color: 'green',
    },
    {
      icon: Zap,
      name: 'Electrical Engineering',
      duration: '3 Years',
      seats: '60',
      description: 'Power systems, electrical machines, and energy management',
      color: 'yellow',
    },
    {
      icon: Cpu,
      name: 'Computer Science',
      duration: '3 Years',
      seats: '60',
      description: 'Programming, software development, and IT solutions',
      color: 'purple',
    },
    {
      icon: Wrench,
      name: 'Electronics Engineering',
      duration: '3 Years',
      seats: '60',
      description: 'Electronic circuits, embedded systems, and communication',
      color: 'red',
    },
    {
      icon: Car,
      name: 'Automobile Engineering',
      duration: '3 Years',
      seats: '60',
      description: 'Vehicle design, maintenance, and automotive technology',
      color: 'orange',
    },
  ];

  const colorClasses: Record<string, { bg: string; icon: string; border: string; hover: string }> = {
    blue: { bg: 'bg-blue-100', icon: 'text-blue-600', border: 'border-blue-200', hover: 'hover:border-blue-600' },
    green: { bg: 'bg-green-100', icon: 'text-green-600', border: 'border-green-200', hover: 'hover:border-green-600' },
    yellow: { bg: 'bg-yellow-100', icon: 'text-yellow-600', border: 'border-yellow-200', hover: 'hover:border-yellow-600' },
    purple: { bg: 'bg-purple-100', icon: 'text-purple-600', border: 'border-purple-200', hover: 'hover:border-purple-600' },
    red: { bg: 'bg-red-100', icon: 'text-red-600', border: 'border-red-200', hover: 'hover:border-red-600' },
    orange: { bg: 'bg-orange-100', icon: 'text-orange-600', border: 'border-orange-200', hover: 'hover:border-orange-600' },
  };

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Courses
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of industry-focused diploma programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const colors = colorClasses[course.color];
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group`}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <course.icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {course.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center justify-between text-sm mb-6">
                  <div>
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold text-gray-900 ml-2">{course.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Seats:</span>
                    <span className="font-semibold text-gray-900 ml-2">{course.seats}</span>
                  </div>
                </div>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  View Details
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Not Sure Which Course to Choose?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our counselors are here to help you find the perfect course that matches your interests and career goals
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Schedule a Counseling Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
