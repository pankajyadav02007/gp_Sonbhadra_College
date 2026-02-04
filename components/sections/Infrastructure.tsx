'use client';

import { Building2, Microscope, Laptop, Library, Wifi, Droplets } from 'lucide-react';
import { Playfair_Display, Poppins } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export default function Infrastructure() {
  const facilities = [
    {
      icon: Building2,
      title: 'Modern Classrooms',
      description:
        'Spacious and well-ventilated classrooms equipped with modern teaching aids and comfortable seating',
      color: 'blue',
    },
    {
      icon: Microscope,
      title: 'Advanced Laboratories',
      description:
        'State-of-the-art labs with latest equipment for practical training in all engineering disciplines',
      color: 'green',
    },
    {
      icon: Laptop,
      title: 'Computer Centers',
      description:
        'High-performance computers with latest software and high-speed internet connectivity',
      color: 'purple',
    },
    {
      icon: Library,
      title: 'Digital Library',
      description:
        'Extensive collection of books, journals, and e-resources with comfortable reading spaces',
      color: 'orange',
    },
    {
      icon: Wifi,
      title: 'Wi-Fi Campus',
      description:
        'Complete campus-wide Wi-Fi coverage for seamless internet access',
      color: 'red',
    },
    {
      icon: Droplets,
      title: 'Sports Facilities',
      description:
        'Well-maintained sports grounds and indoor facilities for physical fitness and recreation',
      color: 'teal',
    },
  ];

  const colorClasses: Record<
    string,
    { bg: string; icon: string; hover: string }
  > = {
    blue: { bg: 'bg-blue-100', icon: 'text-blue-600', hover: 'hover:border-blue-600' },
    green: { bg: 'bg-green-100', icon: 'text-green-600', hover: 'hover:border-green-600' },
    purple: { bg: 'bg-purple-100', icon: 'text-purple-600', hover: 'hover:border-purple-600' },
    orange: { bg: 'bg-orange-100', icon: 'text-orange-600', hover: 'hover:border-orange-600' },
    red: { bg: 'bg-red-100', icon: 'text-red-600', hover: 'hover:border-red-600' },
    teal: { bg: 'bg-teal-100', icon: 'text-teal-600', hover: 'hover:border-teal-600' },
  };

  return (
    <section
      id="infrastructure"
      className={`py-20 bg-white ${poppins.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${playfair.className}`}
          >
            World-Class Infrastructure
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our campus is equipped with modern facilities to provide the best learning environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const colors = colorClasses[facility.color];
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 ${colors.hover} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group`}
              >
                <div
                  className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <facility.icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3
                  className={`text-xl font-bold text-gray-900 mb-3 ${playfair.className}`}
                >
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${playfair.className}`}>
                50+
              </div>
              <div className="text-blue-100">Modern Classrooms</div>
            </div>
            <div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${playfair.className}`}>
                25+
              </div>
              <div className="text-blue-100">Advanced Laboratories</div>
            </div>
            <div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${playfair.className}`}>
                10,000+
              </div>
              <div className="text-blue-100">Books in Library</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
