import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | All On Board Project',
  description: 'Learn about All On Board Project\'s mission to empower underprivileged youth through skiing and snowboarding experiences in Arizona. Founded by Christian Burns.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About All On Board Project
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Empowering underprivileged youth through transformative mountain experiences since our founding
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4 text-lg leading-relaxed">
                All On Board Project was founded on a simple yet powerful belief: every child deserves the opportunity to experience the joy and growth that comes from outdoor adventure, regardless of their economic circumstances.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                Founded by Christian Burns in Arizona, our organization emerged from the recognition that many inner-city youth have never experienced the mountains, let alone winter sports like skiing and snowboarding. For many of the students we serve, the mountain resorts are only a few hours away, yet they might as well be on another planet.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                We partner with schools throughout the Phoenix metropolitan area to identify students who would benefit from our programs. Through careful planning, fundraising, and community support, we're able to provide complete mountain experiences—including transportation, equipment, instruction, and meals—at no cost to participating families.
              </p>
              <p className="text-lg leading-relaxed">
                What started as a small initiative has grown into a movement, touching the lives of dozens of young people each year and showing them that with courage, support, and determination, they can achieve things they never thought possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-4xl mb-4 text-center">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center">Mission</h3>
              <p className="text-gray-600 text-center">
                To empower underprivileged youth by providing access to skiing and snowboarding experiences that foster personal growth, confidence, and leadership skills.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-4xl mb-4 text-center">💪</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center">Empowerment</h3>
              <p className="text-gray-600 text-center">
                We believe in breaking down barriers and creating opportunities that inspire young people to discover their potential and pursue their dreams.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-4xl mb-4 text-center">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center">Community</h3>
              <p className="text-gray-600 text-center">
                Through teamwork and shared experiences, we build lasting connections and teach the importance of supporting one another.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-6xl">🏔️</div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">What We Provide</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Complete Equipment:</strong>
                    <p className="text-gray-600">Skis/snowboards, boots, helmets, and appropriate clothing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Professional Instruction:</strong>
                    <p className="text-gray-600">Certified instructors who ensure safety and skill development</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Safe Transportation:</strong>
                    <p className="text-gray-600">Round-trip transportation from schools to mountain resorts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Meals & Supervision:</strong>
                    <p className="text-gray-600">Nutritious meals and trained chaperones throughout the day</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Mentorship:</strong>
                    <p className="text-gray-600">Positive role models who inspire and encourage participants</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 501(c)(3) Info */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Registered 501(c)(3) Nonprofit
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            All On Board Project is a registered 501(c)(3) nonprofit organization in Arizona. All donations are tax-deductible to the extent allowed by law.
          </p>
          <p className="text-lg text-blue-100">
            We are committed to transparency and accountability. 100% of donations go directly to supporting our programs and providing transformative experiences for youth.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether through donations, volunteering, or spreading the word, you can help us empower the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Make a Donation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
