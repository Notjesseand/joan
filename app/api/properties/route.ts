import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Sample property data
  const properties = [
    {
      id: 1,
      title: "Luxury Villa in Ikoyi",
      location: "Ikoyi, Lagos",
      price: "₦450,000,000",
      beds: 4,
      baths: 5,
      sqft: "5,000",
      image: "/property1.jpg",
      type: "Sale",
      agent: "John Doe",
      description: "Beautiful luxury villa with swimming pool, gym, and garden. Located in prestigious Ikoyi area with 24/7 security."
    },
    {
      id: 2,
      title: "Cozy Apartment in Maitama",
      location: "Maitama, Abuja",
      price: "₦150,000/month",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      image: "/property2.jpg",
      type: "Rent",
      agent: "Jane Smith",
      description: "Well-furnished apartment close to schools and shopping centers. Includes parking space."
    },
    {
      id: 3,
      title: "Modern Townhouse in Lekki",
      location: "Lekki, Lagos",
      price: "₦250,000,000",
      beds: 3,
      baths: 3,
      sqft: "2,800",
      image: "/property3.jpg",
      type: "Sale",
      agent: "Michael Chen",
      description: "Contemporary townhouse with modern amenities and smart home features."
    },
    {
      id: 4,
      title: "Penthouse in Victoria Island",
      location: "VI, Lagos",
      price: "₦800,000,000",
      beds: 5,
      baths: 6,
      sqft: "7,500",
      image: "/property4.jpg",
      type: "Sale",
      agent: "Sarah Johnson",
      description: "Exclusive penthouse with panoramic views of the Lagos coastline."
    },
    {
      id: 5,
      title: "Studio Apartment in Garki",
      location: "Garki, Abuja",
      price: "₦80,000/month",
      beds: 1,
      baths: 1,
      sqft: "600",
      image: "/property5.jpg",
      type: "Rent",
      agent: "David Okafor",
      description: "Affordable studio apartment in a secure and serene environment."
    },
    {
      id: 6,
      title: "Duplex in GRA Phase 2",
      location: "GRA Phase 2, Port Harcourt",
      price: "₦180,000,000",
      beds: 4,
      baths: 4,
      sqft: "3,200",
      image: "/property6.jpg",
      type: "Sale",
      agent: "Grace Williams",
      description: "Well-constructed duplex in a prime location with excellent road networks."
    }
  ];

  return NextResponse.json(properties);
}