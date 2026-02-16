import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  type: string;
  agent: string;
  description: string;
  features?: string[];
  gallery?: string[];
  nearby?: string[];
}

async function getProperties(): Promise<Property[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/properties`, {
      cache: 'no-store', // Ensures fresh data is fetched on each request
    });

    if (!res.ok) {
      throw new Error('Failed to fetch properties');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching properties:', error);
    // Return fallback data
    return [
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
      }
    ];
  }
}

export default async function Properties() {
  const properties = await getProperties();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="text-2xl font-bold text-gray-800 dark:text-white">Chuulo</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium">Home</Link>
          <Link href="/properties" className="text-blue-600 font-medium underline">Properties</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium hidden md:block">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Sign Up
          </button>
        </div>
      </nav>

      <main className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Find Your Perfect Property</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Browse our curated selection of verified properties across Nigeria
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
              <input 
                type="text" 
                placeholder="Enter location" 
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Property Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option>All Types</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price Range</label>
              <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option>Any Price</option>
                <option>₦50,000 - ₦100,000</option>
                <option>₦100,000 - ₦500,000</option>
                <option>₦500,000 - ₦1,000,000</option>
                <option>₦1,000,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Action</label>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">1</button>
            <button className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">2</button>
            <button className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">3</button>
            <button className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Next →</button>
          </nav>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 mt-24 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-2xl font-bold text-white">Chuulo</span>
              </div>
              <p className="mb-4">
                Making real estate transactions simple, secure, and efficient for everyone.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Partners</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><a href="#" className="hover:text-white">Guidelines</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2026 Chuulo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}