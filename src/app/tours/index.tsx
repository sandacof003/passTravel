import { GetServerSideProps } from 'next';
import Layout from '@/components/layout/Layout';
import TourCard from '@/components/sections/TourCard';
import { Tour } from '@/types';
import { getTours } from '@/utils/api';

interface ToursPageProps {
  tours: Tour[];
}

export default function Tours({ tours }: ToursPageProps) {
  return (
    <Layout
      meta={{
        title: 'Available Tours | PassTravel',
        description: 'Explore our selection of premium business travel packages and corporate tour solutions.',
        keywords: 'business tours, corporate travel packages, luxury business travel',
      }}
    >
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Available Tours</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Explore our curated selection of premium business travel experiences.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const tours = await getTours();
    
    return {
      props: {
        tours,
      },
    };
  } catch (error) {
    console.error('Error fetching tours:', error);
    return {
      props: {
        tours: [],
      },
    };
  }
};
