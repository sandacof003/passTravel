export interface Tour {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: number;
  price: number;
  image: string;
  highlights: string[];
  included: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface MetaProps {
  title: string;
  description: string;
  keywords?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
  meta?: MetaProps;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export interface TourCardProps {
  tour: Tour;
}
