import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Donate | All On Board Project',
  description: 'Support underprivileged youth by donating to All On Board Project. Every $500 sponsors one child for a complete skiing or snowboarding experience. 100% tax-deductible.',
  openGraph: {
    title: 'Donate to All On Board Project',
    description: 'Help us empower youth through skiing and snowboarding. Your donation makes a lasting impact.',
  },
};

export default function DonatePage() {
  const donationLevels = [
    {
      amount: '$100',
      title: 'Supporter',
      description: 'Helps cover equipment rental for one child',
      impact: 'Provides gear for a young person to experience winter sports',
    },
    {
      amount: '$250',
      title: 'Advocate',
      description: 'Covers lift tickets and lunch for one child',
      impact: 'Ensures a full day on the mountain with nourishment',
    },
    {
      amount: '$500',
      title: 'Champion',
      description: 'Sponsors one complete trip for one child',
      impact: 'Covers transportation, equipment, instruction, and meals',
      featured: true,
    },
    {
      amount: '$1,000',
      title: 'Leader',
      description: 'Sponsors two children for complete trips',
      impact: 'Double the impact - change two lives forever',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Make a Lasting Impact
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Your donation directly supports underprivileged youth, providing life-changing mountain experiences that build confidence, leadership, and courage.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-2xl font-semibold mb-2">100% Tax-Deductible</p>
            <p className="text-blue-100">All On Board Project is a registered 501(c)(3) nonprofit organization</p>
          </div>
        </div>
      </section>

      {/* Donation Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Choose Your Impact Level
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationLevels.map((level, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-6 flex flex-col ${
                  level.featured ? 'ring-4 ring-blue-600 transform scale-105' : ''
                }`}
              >
                {level.featured && (
                  <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full -mt-10 mb-4 text-center self-center">
                    Most Popular
                  </div>
                )}
                <div className="text-4xl font-bold text-blue-600 mb-2">{level.amount}</div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{level.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{level.description}</p>
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <p className="text-sm text-gray-600">
                    <strong>Impact:</strong> {level.impact}
                  </p>
                </div>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-colors ${
                    level.featured
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                  }`}
                >
                  Donate {level.amount}
                </button>
              </div>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Custom Amount</h3>
              <p className="text-gray-600 mb-6">
                Every dollar makes a difference. Choose your own donation amount.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                  min="1"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-6xl">🏔️</div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Where Your Donation Goes
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Transportation</h3>
                    <p className="text-gray-600">Safe, reliable transportation from schools to mountain resorts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Equipment & Lift Tickets</h3>
                    <p className="text-gray-600">Quality ski/snowboard gear and full-day mountain access</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Professional Instruction</h3>
                    <p className="text-gray-600">Certified instructors to ensure safety and skill development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Meals & Supervision</h3>
                    <p className="text-gray-600">Nutritious meals and trained staff for a complete experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Other Ways to Give
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Sponsor an Event</h3>
              <p className="text-gray-600 mb-6">
                Become a corporate sponsor and support our fundraising events
              </p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Corporate Matching</h3>
              <p className="text-gray-600 mb-6">
                Many employers match charitable donations - double your impact
              </p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Legacy Giving</h3>
              <p className="text-gray-600 mb-6">
                Include All On Board Project in your estate planning
              </p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Your Trust Matters
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We are committed to transparency and accountability in all our operations. 100% of donations go directly to program expenses.
          </p>
          <div className="bg-blue-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Tax Information:</strong> All On Board Project is a 501(c)(3) nonprofit organization.
              Your donation is tax-deductible to the extent allowed by law.
            </p>
            <p className="text-gray-600">
              Upon donation, you will receive a receipt for your tax records.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8">
            Join us in empowering the next generation of leaders through transformative mountain experiences.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors">
            Donate Now
          </button>
          <p className="mt-6 text-blue-100">
            Questions? <Link href="/contact" className="underline hover:text-white">Contact us</Link> or call <a href="tel:+14807480644" className="underline hover:text-white">(480) 748-0644</a>
          </p>
        </div>
      </section>
    </div>
  );
}
