const features = [
  {
    title: 'Global Network',
    description: 'Access to exclusive destinations and premium accommodations worldwide.',
    icon: '🌎',
  },
  {
    title: 'Dedicated Support',
    description: '24/7 concierge service and personal travel coordinator for each client.',
    icon: '👥',
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored travel packages designed to meet your specific business needs.',
    icon: '⚡',
  },
  {
    title: 'Best Value',
    description: 'Competitive rates and special corporate discounts on premium experiences.',
    icon: '💎',
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Why Choose Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for exceptional business travel
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine industry expertise with personalized service to deliver unparalleled travel experiences for your business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <span className="text-2xl">{feature.icon}</span>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
