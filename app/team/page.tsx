import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Team | All On Board Project',
  description: 'Meet the dedicated team behind All On Board Project, led by founder Christian Burns. Together, we\'re empowering youth through winter sports.',
};

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Christian Burns',
      role: 'Founder & Executive Director',
      bio: 'Christian founded All On Board Project with a vision to break down barriers and provide transformative mountain experiences for underprivileged youth. His passion for skiing and community service drives the organization\'s mission.',
      email: 'christian@allonboardproject.com',
    },
    // Add more team members as needed
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Dedicated individuals committed to empowering youth through transformative mountain experiences
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-48 flex items-center justify-center">
                  <div className="text-6xl text-white">👤</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board & Advisors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Board & Advisors
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              Our board of directors and advisors bring diverse expertise in nonprofit management, youth development, winter sports, and community engagement.
            </p>
            <p className="text-gray-600">
              Information about our board members and advisors will be updated here as our organization grows.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Our Amazing Volunteers
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              None of our work would be possible without the dedication of our incredible volunteers. From trip chaperones to event organizers, our volunteers are the heart of All On Board Project.
            </p>
            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Join Our Team?</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for passionate individuals who want to make a difference in young people's lives.
              </p>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Work With Us
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you're interested in volunteering, joining our board, or partnering with us, we'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
