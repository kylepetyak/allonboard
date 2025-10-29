import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | All On Board Project',
  description: 'Frequently asked questions about All On Board Project, our programs, donations, volunteering, and how we empower youth through skiing and snowboarding.',
};

export default function FAQPage() {
  const faqs = [
    {
      category: 'About Our Programs',
      questions: [
        {
          q: 'Who is eligible to participate in your programs?',
          a: 'Our programs are designed for underprivileged youth from inner-city schools in the Phoenix metropolitan area. We work directly with schools to identify students who would benefit from our programs. Students typically range from ages 8-18 and have limited or no prior exposure to winter sports.',
        },
        {
          q: 'What does a typical trip include?',
          a: 'A complete All On Board trip includes round-trip transportation from the school to the mountain resort, all necessary equipment (skis/snowboard, boots, helmet, appropriate clothing), lift tickets, professional instruction from certified instructors, meals throughout the day, and trained chaperones to ensure safety and support.',
        },
        {
          q: 'How many students do you serve each year?',
          a: 'We currently serve 40-50 students per year, with the goal of expanding our reach as our funding and volunteer base grows. Each trip typically accommodates 15-20 students to ensure proper supervision and individualized attention.',
        },
        {
          q: 'Is there any cost to participating families?',
          a: 'No, absolutely not. All On Board Project covers 100% of the costs for participating students. This includes everything from transportation and equipment to meals and instruction. Our goal is to eliminate all barriers to participation.',
        },
      ],
    },
    {
      category: 'Donations & Funding',
      questions: [
        {
          q: 'Are donations tax-deductible?',
          a: 'Yes! All On Board Project is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law. You will receive a receipt for tax purposes after making a donation.',
        },
        {
          q: 'How much does it cost to sponsor one child?',
          a: 'It costs approximately $500 to provide one complete mountain experience for one child. This covers transportation, equipment rental, lift tickets, instruction, meals, and all other expenses. However, donations of any amount are greatly appreciated and make a difference.',
        },
        {
          q: 'Where do my donations go?',
          a: '100% of donations go directly to program expenses. This includes transportation, equipment rental, lift tickets, professional instruction, meals, insurance, and safety equipment. We are committed to transparency and maximizing the impact of every dollar donated.',
        },
        {
          q: 'Can I make a monthly recurring donation?',
          a: 'Yes! Recurring donations help us plan ahead and provide consistent support for our programs. Please contact us at christian@allonboardproject.com to set up a recurring donation.',
        },
        {
          q: 'Does my employer offer matching donations?',
          a: 'Many employers offer matching gift programs that can double or even triple your donation impact. Check with your HR department to see if your employer participates in a matching gift program.',
        },
      ],
    },
    {
      category: 'Volunteering',
      questions: [
        {
          q: 'How can I volunteer?',
          a: 'We welcome volunteers in various capacities! Opportunities include trip chaperones, equipment organizers, event helpers, and administrative support. Contact us at christian@allonboardproject.com to learn more about current volunteer opportunities.',
        },
        {
          q: 'Do I need skiing/snowboarding experience to volunteer?',
          a: 'For trip chaperone positions, prior skiing or snowboarding experience is helpful but not always required. We have various roles available on trips, including supervising at base lodges, helping with meals, and providing general support. We also have many non-trip volunteer opportunities.',
        },
        {
          q: 'What is the time commitment for volunteers?',
          a: 'Time commitments vary by role. Trip volunteers typically commit to a full day (6am-6pm). Event volunteers might commit to a few hours. We appreciate any time you can offer and will work with your schedule.',
        },
        {
          q: 'Is there a background check required?',
          a: 'Yes, all volunteers who work directly with youth must complete a background check to ensure the safety of our participants. This is standard practice for youth-serving organizations.',
        },
      ],
    },
    {
      category: 'Partnerships & Sponsorships',
      questions: [
        {
          q: 'How can my company partner with All On Board Project?',
          a: 'We offer various partnership opportunities including event sponsorships, equipment donations, in-kind services, and employee engagement programs. Corporate partnerships help us expand our reach and serve more students. Contact us to discuss customized partnership opportunities.',
        },
        {
          q: 'Can my ski club or organization get involved?',
          a: 'Absolutely! We love partnering with ski clubs, outdoor recreation groups, and community organizations. Whether through volunteer support, equipment donations, or fundraising events, there are many ways to get involved.',
        },
        {
          q: 'Do you accept equipment donations?',
          a: 'Yes! We accept gently used winter sports equipment, winter clothing, and related gear. Please contact us to arrange equipment donations and ensure they meet our safety standards.',
        },
      ],
    },
    {
      category: 'General Questions',
      questions: [
        {
          q: 'Which mountain resorts do you use?',
          a: 'We primarily operate at Arizona Snowbowl in Flagstaff, Arizona, which is approximately 2.5 hours from Phoenix. We choose locations that provide excellent beginner terrain, quality instruction, and a safe environment for first-time winter sports participants.',
        },
        {
          q: 'How do you ensure student safety?',
          a: 'Safety is our top priority. All participants wear helmets, receive instruction from certified professionals, are supervised by trained chaperones, and we maintain low student-to-chaperone ratios. We also have comprehensive insurance and emergency protocols in place.',
        },
        {
          q: 'How can schools get involved?',
          a: 'Schools interested in partnering with us can contact christian@allonboardproject.com. We work with school administrators to identify eligible students and coordinate all logistics for trips.',
        },
        {
          q: 'Do you have year-round programs?',
          a: 'Our primary programs run during the winter ski season (typically December through March). However, we host fundraising events, volunteer activities, and community engagement opportunities throughout the year.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Find answers to common questions about All On Board Project
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <div
                    key={faqIndex}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help! Don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Contact Us
            </Link>
            <a
              href="mailto:christian@allonboardproject.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
