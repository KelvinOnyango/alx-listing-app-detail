import { PropertyProps } from "../interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "1",
    name: "Modern Beachfront Villa",
    description:
      "Beautiful beachfront villa with stunning ocean views and modern amenities. Perfect for family vacations or romantic getaways.",
    price: 250,
    rating: 4.8,
    image: "/images/beach-villa.jpg",
    images: [
      "/images/beach-villa.jpg",
      "/images/living-room.jpg",
      "/images/bedroom.jpg",
      "/images/kitchen.jpg",
      "/images/pool.jpg",
    ],
    address: {
      street: "123 Ocean Drive",
      city: "Malibu",
      country: "USA",
    },
    category: [
      "WiFi",
      "Pool",
      "Kitchen",
      "Parking",
      "Air Conditioning",
      "Beach Access",
    ],
    reviews: [
      {
        id: "1",
        name: "Sarah Johnson",
        avatar: "/avatars/sarah.jpg",
        rating: 5,
        comment:
          "Absolutely stunning location! The villa was even better than the photos.",
        date: "2023-05-15",
      },
      {
        id: "2",
        name: "Michael Chen",
        avatar: "/avatars/michael.jpg",
        rating: 4,
        comment: "Great place, would stay again. The pool was fantastic.",
        date: "2023-04-22",
      },
    ],
  },
];
