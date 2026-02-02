'use client';

import { Briefcase, TrendingUp, Users, Award, Building2, Target } from 'lucide-react';

export default function Placement() {
  const stats = [
    { icon: Briefcase, value: '95%', label: 'Placement Rate' },
    { icon: Building2, value: '150+', label: 'Partner Companies' },
    { icon: Users, value: '1000+', label: 'Students Placed' },
    { icon: TrendingUp, value: '₹4.5 LPA', label: 'Average Package' },
  ];

  const topRecruiters = [
    'Tata Motors', 'Larsen & Toubro', 'Mahindra & Mahindra', 'Infosys',
    'TCS', 'Wipro', 'Tech Mahindra', 'HCL Technologies',
    'Siemens', 'ABB', 'Bosch', 'Reliance Industries',
  ];

  const services = [
    {
      icon: Target,
      title: 'Career Counseling',
      description: 'One-on-one guidance to help students identify their career goals and paths',
    },
    {
      icon: Users,
      title: 'Interview Preparation',
      description: 'Mock interviews and personality development sessions for confidence building',
    },
    {
      icon: Award,
      title: 'Skill Development',
      description: 'Technical and soft skills training to make students industry-ready',
    },
    {
      icon: Briefcase,
      title: 'Campus Placements',
      description: 'Regular campus drives by top companies for placement opportunities',
    },
  ];

  return (
    <section id="placement" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Training & Placement
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building successful careers through dedicated placement support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-blue-600"
            >
              <service.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Top Recruiters
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {topRecruiters.map((company, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 flex items-center justify-center border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors text-center">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Launch Your Career with Us</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Our dedicated placement cell ensures every student gets the best opportunities to start their professional journey
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Register for Placement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
