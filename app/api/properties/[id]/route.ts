import { NextResponse } from 'next/server';

// Simulated property data
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
    description: "Beautiful luxury villa with swimming pool, gym, and garden. Located in prestigious Ikoyi area with 24/7 security.",
    features: ["Swimming Pool", "Gym", "Garden", "24/7 Security", "Parking Space", "Smart Home Features"],
    gallery: ["/property1.jpg", "/property2.jpg", "/property3.jpg", "/property4.jpg"],
    nearby: ["Schools", "Shopping Centers", "Hospitals", "Restaurants"]
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
    description: "Well-furnished apartment close to schools and shopping centers. Includes parking space.",
    features: ["Furnished", "Parking Space", "Security", "Balcony", "Modern Kitchen", "Air Conditioning"],
    gallery: ["/property2.jpg", "/property1.jpg", "/property3.jpg", "/property5.jpg"],
    nearby: ["Schools", "Shopping Centers", "Public Transport", "Restaurants"]
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
    description: "Contemporary townhouse with modern amenities and smart home features.",
    features: ["Smart Home", "Balcony", "Garden", "Parking Space", "Modern Kitchen", "Security"],
    gallery: ["/property3.jpg", "/property1.jpg", "/property4.jpg", "/property6.jpg"],
    nearby: ["Beach", "Shopping Centers", "Restaurants", "Entertainment"]
  }
];

export async function GET(request: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = parseInt(params.id);
  const property = properties.find(p => p.id === id);
  
  if (!property) {
    return NextResponse.json({ error: 'Property not found' }, { status: 404 });
  }
  
  return NextResponse.json(property);
}