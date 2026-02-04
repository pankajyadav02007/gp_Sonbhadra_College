'use client';

import { CheckCircle, Target, Eye, Award } from 'lucide-react';
import { Poppins, Playfair_Display } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function About() {
  const features = [
    'AICTE Approved Institution',
    'Experienced Faculty Members',
    'Industry-Oriented Curriculum',
    'Modern Infrastructure',
    'Active Placement Cell',
    'Student Development Programs',
  ];

  return (
    <section
      id="about"
      className={`py-20 bg-gradient-to-br from-gray-50 to-white ${poppins.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${playfair.className}`}
          >
            About Our College
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in technical education with a commitment to excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                <h3
                  className={`text-3xl font-bold mb-6 ${playfair.className}`}
                >
                  Empowering Future Engineers Since Establishment
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  GPS On Bhadra Polytechnic College is committed to providing quality technical education that prepares students for successful careers in engineering and technology. Our institution combines academic excellence with practical training to create industry-ready professionals.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  With state-of-the-art facilities, experienced faculty, and strong industry connections, we ensure our students receive the best education and opportunities for growth.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <CheckCircle className="w-8 h-8 text-blue-600 mb-3" />
                  <p className="font-semibold text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-600">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3
              className={`text-2xl font-bold text-gray-900 mb-4 ${playfair.className}`}
            >
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide quality technical education and create skilled professionals who can contribute to industrial and economic development of the nation.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-green-600">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-green-600" />
            </div>
            <h3
              className={`text-2xl font-bold text-gray-900 mb-4 ${playfair.className}`}
            >
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be a center of excellence in technical education, fostering innovation, research, and entrepreneurship among students.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-orange-600">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <h3
              className={`text-2xl font-bold text-gray-900 mb-4 ${playfair.className}`}
            >
              Our Values
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Excellence, Integrity, Innovation, and Student-Centric approach form the core values that guide our institution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
