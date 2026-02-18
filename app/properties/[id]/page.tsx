import Link from "next/link";
import { notFound } from "next/navigation";

// Simulated property data - in a real app, this would come from a database or API
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
    nearby: ["Schools", "Shopping Centres", "Hospitals", "Restaurants"]
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
    description: "Well-furnished apartment close to schools and shopping centres. Includes parking space.",
    features: ["Furnished", "Parking Space", "Security", "Balcony", "Modern Kitchen", "Air Conditioning"],
    gallery: ["/property2.jpg", "/property1.jpg", "/property3.jpg", "/property5.jpg"],
    nearby: ["Schools", "Shopping Centres", "Public Transport", "Restaurants"]
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
    nearby: ["Beach", "Shopping Centres", "Restaurants", "Entertainment"]
  }
];

async function getProperty(id: string) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const property = properties.find(p => p.id === parseInt(id));
  return property;
}

export default async function PropertyDetail({ params }: { params: { id: string } }) {
  const property = await getProperty(params.id);
  
  if (!property) {
    notFound();
  }

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

      <main className="py-8 px-4 max-w-7xl mx-auto">
        <Link href="/properties" className="flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Properties
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          {/* Property Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{property.title}</h1>
                <p className="text-gray-600 dark:text-gray-400 flex items-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {property.location}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-3xl font-bold text-blue-600">{property.price}</span>
                <div className="mt-2 inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  {property.type}
                </div>
              </div>
            </div>
          </div>

          {/* Property Images */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 mb-4"></div>
                <div className="grid grid-cols-4 gap-4">
                  {property.gallery.slice(0, 4).map((img, idx) => (
                    <div key={idx} className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-24"></div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Property Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Bedrooms</span>
                      <span className="font-medium text-gray-900 dark:text-white">{property.beds}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Bathrooms</span>
                      <span className="font-medium text-gray-900 dark:text-white">{property.baths}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Square Feet</span>
                      <span className="font-medium text-gray-900 dark:text-white">{property.sqft}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Agent</span>
                      <span className="font-medium text-gray-900 dark:text-white">{property.agent}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Contact Agent
                  </button>
                  
                  <button className="w-full mt-3 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors font-medium">
                    Schedule Tour
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Description</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {property.description}
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Nearby Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {property.nearby.map((amenity, idx) => (
                    <div key={idx} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 h-fit">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Agent</h3>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{property.agent}</h4>
                      <p className="text-gray-600 dark:text-gray-400">Licensed Real Estate Agent</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Call Agent
                    </button>
                    
                    <button className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors font-medium flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                      </svg>
                      Send Message
                    </button>
                    
                    <button className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors font-medium flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                      Email Agent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 mt-16 bg-gray-900 text-gray-400">
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
                <li><a href="#" className="hover:text-white">Help Centre</a></li>
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