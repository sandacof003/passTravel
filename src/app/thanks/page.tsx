import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <Layout
      meta={{
        title: 'Thank You | PassTravel',
        description: 'Thank you for submitting your tour request.',
      }}
    >
      <div className="bg-white min-h-[60vh] flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Thank You for Your Request
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We have received your tour request and will get back to you within 24 hours with a
            customized proposal.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/">
              <Button variant="primary">Return Home</Button>
            </Link>
            <Link href="/tours">
              <Button variant="outline">Explore Tours</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
