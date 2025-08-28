import { TourCardProps } from '@/types';
import Card from '../ui/Card';
import Link from 'next/link';
import Image from 'next/image';

export default function TourCard({ tour }: TourCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{tour.title}</h3>
        <p className="mt-1 text-sm text-gray-500">
          {tour.duration} days
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {tour.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            ${tour.price.toLocaleString()}
          </span>
          <Link
            href={`/tours/${tour.slug}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View Details →
          </Link>
        </div>
      </div>
    </Card>
  );
}
