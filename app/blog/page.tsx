import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | All On Board Project',
  description: 'Read stories, updates, and insights from All On Board Project. Follow our journey empowering youth through skiing and snowboarding experiences.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Welcome to All On Board Project',
      date: 'October 29, 2025',
      excerpt: 'We\'re excited to launch our new website and share our mission with the world. Learn about our journey and vision for empowering youth through winter sports.',
      slug: 'welcome-to-all-on-board-project',
      category: 'Announcements',
    },
    {
      title: 'The Impact of First-Time Mountain Experiences',
      date: 'October 15, 2025',
      excerpt: 'Discover how experiencing skiing and snowboarding for the first time can transform a young person\'s confidence, leadership skills, and outlook on life.',
      slug: 'impact-of-first-time-mountain-experiences',
      category: 'Impact Stories',
    },
    {
      title: 'How to Get Involved: Volunteering Opportunities',
      date: 'October 1, 2025',
      excerpt: 'Learn about the many ways you can volunteer with All On Board Project, from trip chaperones to event organizers and administrative support.',
      slug: 'how-to-get-involved-volunteering',
      category: 'Get Involved',
    },
  ];

  const categories = ['All', 'Announcements', 'Impact Stories', 'Get Involved', 'Events', 'Behind the Scenes'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Stories, updates, and insights from All On Board Project
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-48 flex items-center justify-center">
                  <div className="text-6xl text-white">📝</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-blue-600">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-16 text-center">
            <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                More Stories Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                We're working on bringing you more inspiring stories, updates, and insights from our programs. Check back soon for new content!
              </p>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Subscribe to Updates →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest stories, event announcements, and impact updates delivered to your inbox
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Your support helps us create more stories of transformation and empowerment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
            >
              Donate Now
            </Link>
            <Link
              href="/events"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
