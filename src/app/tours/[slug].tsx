import { GetServerSideProps } from 'next';
import Layout from '@/components/layout/Layout';
import { Tour } from '@/types';
import { getTourBySlug } from '@/utils/api';
import Button from '@/components/ui/Button';

interface TourDetailPageProps {
  tour: Tour;
}

export default function TourDetail({ tour }: TourDetailPageProps) {
  if (!tour) {
    return (
      <Layout
        meta={{
          title: 'Tour Not Found | PassTravel',
          description: 'The requested tour could not be found.',
        }}
      >
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Tour Not Found</h1>
            <p className="mt-2 text-gray-600">The requested tour could not be found.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      meta={{
        title: `${tour.title} | PassTravel`,
        description: tour.description,
      }}
    >
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-10 lg:mt-0">
              <h1 className="text-3xl font-bold text-gray-900">{tour.title}</h1>
              <div className="mt-4 space-y-6">
                <p className="text-lg text-gray-600">{tour.description}</p>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Duration</h2>
                  <p className="mt-2 text-gray-600">{tour.duration} days</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Price</h2>
                  <p className="mt-2 text-2xl font-bold text-blue-600">
                    ${tour.price.toLocaleString()}
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Highlights</h2>
                  <ul className="mt-4 space-y-2">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button variant="primary" size="lg">
                    Book Now
                  </Button>
                  <Button variant="outline" size="lg">
                    Request Information
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900">Itinerary</h2>
            <div className="mt-8 border-t border-gray-200">
              {tour.itinerary.map((day) => (
                <div
                  key={day.day}
                  className="border-b border-gray-200 py-8"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    Day {day.day}: {day.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{day.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const slug = params?.slug as string;
    const tour = await getTourBySlug(slug);
    
    if (!tour) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        tour,
      },
    };
  } catch (error) {
    console.error('Error fetching tour:', error);
    return {
      notFound: true,
    };
  }
};
