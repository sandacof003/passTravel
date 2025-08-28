import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function About() {
  return (
    <Layout
      meta={{
        title: 'About Us | PassTravel',
        description: 'Learn about PassTravel and our mission to transform business travel experiences.',
        keywords: 'about passtravel, business travel company, corporate travel solutions',
      }}
    >
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base font-semibold leading-7 text-blue-600">About PassTravel</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transforming Business Travel
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              PassTravel is a leading B2B travel solutions provider, dedicated to creating exceptional
              travel experiences for businesses worldwide. We combine industry expertise with
              personalized service to deliver unparalleled travel solutions.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Card className="p-8">
              <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-gray-600">
                To revolutionize business travel by providing innovative, efficient, and tailored
                solutions that exceed our clients expectations.
              </p>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
              <p className="mt-4 text-gray-600">
                To be the worlds most trusted partner in business travel, known for excellence,
                innovation, and exceptional service.
              </p>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-lg font-semibold text-gray-900">Our Values</h3>
              <p className="mt-4 text-gray-600">
                Excellence, Innovation, Integrity, and Customer-First approach guide everything we do.
              </p>
            </Card>
          </div>
          
          <div className="mt-16 flex justify-center">
            <Button variant="primary" size="lg">
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
