'use client';

import { Home, UtensilsCrossed, Stethoscope, Bus, Trophy, Music } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      icon: Home,
      title: 'Hostel Accommodation',
      description: 'Separate hostels for boys and girls with modern amenities, 24/7 security, and comfortable living spaces',
      features: ['24/7 Security', 'Wi-Fi Enabled', 'Recreation Rooms', 'Study Halls'],
      color: 'blue',
    },
    {
      icon: UtensilsCrossed,
      title: 'Cafeteria & Mess',
      description: 'Hygienic and nutritious food service with varied menu options for students and staff',
      features: ['Hygienic Kitchen', 'Varied Menu', 'Affordable Prices', 'Quality Food'],
      color: 'green',
    },
    {
      icon: Stethoscope,
      title: 'Medical Facilities',
      description: 'On-campus medical center with qualified staff for emergency care and regular health checkups',
      features: ['First Aid', 'Regular Checkups', 'Medicine Store', 'Emergency Care'],
      color: 'red',
    },
    {
      icon: Bus,
      title: 'Transport Services',
      description: 'Well-maintained buses covering major routes for safe and comfortable commute',
      features: ['Multiple Routes', 'GPS Tracked', 'Comfortable Seats', 'Safe Journey'],
      color: 'yellow',
    },
    {
      icon: Trophy,
      title: 'Sports Complex',
      description: 'Indoor and outdoor sports facilities including cricket, football, basketball, and more',
      features: ['Indoor Games', 'Outdoor Grounds', 'Fitness Center', 'Sports Equipment'],
      color: 'orange',
    },
    {
      icon: Music,
      title: 'Cultural Activities',
      description: 'Auditorium and spaces for cultural events, technical fests, and student activities',
      features: ['Modern Auditorium', 'Event Spaces', 'Music Room', 'Technical Fest'],
      color: 'purple',
    },
  ];

  const colorClasses: Record<string, { bg: string; icon: string; badge: string }> = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', badge: 'bg-blue-100' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', badge: 'bg-green-100' },
    red: { bg: 'bg-red-50', icon: 'text-red-600', badge: 'bg-red-100' },
    yellow: { bg: 'bg-yellow-50', icon: 'text-yellow-600', badge: 'bg-yellow-100' },
    orange: { bg: 'bg-orange-50', icon: 'text-orange-600', badge: 'bg-orange-100' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', badge: 'bg-purple-100' },
  };

  return (
    <section id="facility" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Campus Facilities
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive facilities for holistic development and comfortable campus life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const colors = colorClasses[facility.color];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <facility.icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {facility.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {facility.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`${colors.badge} ${colors.icon} text-xs font-semibold px-3 py-1 rounded-full`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Experience Campus Life</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our campus provides a perfect blend of academic excellence and extracurricular activities, ensuring overall development of every student.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                Schedule a Campus Tour
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-blue-100 text-sm">Campus Acres</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-blue-100 text-sm">Security</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-blue-100 text-sm">Hostel Rooms</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-blue-100 text-sm">Bus Routes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
