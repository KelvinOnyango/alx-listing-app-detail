export interface PropertyProps {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  category: string[];
  reviews: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}
