import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Events | All On Board Project',
  description: 'Join us for fundraising events and community gatherings supporting All On Board Project. Help us empower underprivileged youth through skiing and snowboarding.',
};

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: 'Annual Ski Trip - Winter 2026',
      date: 'January 15, 2026',
      time: '6:00 AM - 6:00 PM',
      location: 'Arizona Snowbowl, Flagstaff, AZ',
      description: 'Our flagship event taking 50+ students from Phoenix-area schools to experience skiing and snowboarding for the first time.',
      type: 'Trip',
      spotsAvailable: true,
    },
    {
      title: 'Spring Fundraising Gala',
      date: 'March 20, 2026',
      time: '6:00 PM - 10:00 PM',
      location: 'Phoenix Convention Center',
      description: 'Join us for an elegant evening of dinner, entertainment, and silent auction. All proceeds support our youth programs.',
      type: 'Fundraiser',
      spotsAvailable: true,
    },
    {
      title: 'Community Volunteer Day',
      date: 'April 10, 2026',
      time: '9:00 AM - 3:00 PM',
      location: 'All On Board HQ, Phoenix, AZ',
      description: 'Help us prepare equipment, organize gear, and plan for the next season. All volunteers welcome!',
      type: 'Volunteer',
      spotsAvailable: true,
    },
  ];

  const pastEvents = [
    {
      title: 'Winter Mountain Experience 2025',
      date: 'January 2025',
      participants: '45 students',
      description: 'Successfully brought 45 students from inner-city Phoenix schools to experience snowboarding for the first time.',
    },
    {
      title: 'Fall Fundraising Dinner 2024',
      date: 'October 2024',
      raised: '$15,000',
      description: 'Community came together to raise funds for winter trips, exceeding our goal by 25%.',
    },
    {
      title: 'Summer Gear Drive 2024',
      date: 'July 2024',
      donated: '200+ items',
      description: 'Collected gently used winter clothing and equipment for program participants.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Events & Programs
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Join us for mountain trips, fundraising events, and volunteer opportunities that make a lasting impact on young lives.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Upcoming Events
          </h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          event.type === 'Trip'
                            ? 'bg-blue-100 text-blue-700'
                            : event.type === 'Fundraiser'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {event.type}
                      </span>
                      {event.spotsAvailable && (
                        <span className="text-green-600 font-semibold text-sm">
                          Spots Available
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:gap-6 text-gray-600 mb-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href="/contact"
                      className="block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors text-center whitespace-nowrap"
                    >
                      Register Interest
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Past Events & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">{event.date}</p>
                {event.participants && (
                  <div className="bg-blue-50 rounded-lg p-3 mb-3">
                    <p className="text-2xl font-bold text-blue-600">
                      {event.participants}
                    </p>
                  </div>
                )}
                {event.raised && (
                  <div className="bg-green-50 rounded-lg p-3 mb-3">
                    <p className="text-2xl font-bold text-green-600">
                      {event.raised} raised
                    </p>
                  </div>
                )}
                {event.donated && (
                  <div className="bg-purple-50 rounded-lg p-3 mb-3">
                    <p className="text-2xl font-bold text-purple-600">
                      {event.donated}
                    </p>
                  </div>
                )}
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Get Involved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Join us on trips as a chaperone or help with event organization
              </p>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Sign Up →
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Sponsor an Event</h3>
              <p className="text-gray-600 mb-6">
                Corporate sponsorships help us reach more students every year
              </p>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More →
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Make a Donation</h3>
              <p className="text-gray-600 mb-6">
                Every contribution helps us provide transformative experiences
              </p>
              <Link
                href="/donate"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Donate Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated on Events
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't miss our upcoming events and opportunities to make a difference
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
