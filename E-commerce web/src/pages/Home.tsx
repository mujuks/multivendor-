import React, { useState } from "react";
import { Search, MapPin, DollarSign, ChevronRight, Bike, ShieldCheck, Zap } from "lucide-react";

// --- Mock Data for Featured Bikes ---
const featuredBikes = [
  {
    id: 1,
    title: "Yamaha MT-07 (2021)",
    price: "KSh 850,000",
    location: "Nairobi, Westlands",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
    condition: "Used",
  },
  {
    id: 2,
    title: "Honda CB500F",
    price: "KSh 720,000",
    location: "Mombasa",
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=800",
    condition: "Used",
  },
  {
    id: 3,
    title: "Bajaj Boxer BM 150",
    price: "KSh 180,000",
    location: "Kisumu",
    image: "https://images.unsplash.com/photo-1622185135505-2d795043906a?auto=format&fit=crop&q=80&w=800",
    condition: "New",
  },
  {
    id: 4,
    title: "Kawasaki Ninja 400",
    price: "KSh 950,000",
    location: "Nairobi, Kilimani",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
    condition: "Used",
  },
];

function Home() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      
      {/* --- Navigation Bar --- */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Bike className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">MotoSwap<span className="text-orange-600">KE</span></span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-orange-600 font-medium">Buy</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 font-medium">Sell</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 font-medium">Reviews</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Log in</a>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium transition">
                Sell Your Bike
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative bg-gray-900 text-white py-24">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1558980664-2506fca6bfc2?auto=format&fit=crop&q=80&w=1600" 
            alt="Motorcycle Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Find Your Perfect Ride in <span className="text-orange-500">Kenya</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The safest marketplace to buy and sell motorbikes. From delivery bikes to superbikes, MotoSwap KE has it all.
          </p>

          {/* Search Bar */}
          <div className="bg-white p-2 rounded-lg shadow-lg max-w-3xl mx-auto flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-200 py-2">
              <Search className="text-gray-400 w-5 h-5 mr-2" />
              <input 
                type="text" 
                placeholder="Search (e.g., Yamaha, Honda, Boxer)" 
                className="w-full outline-none text-gray-700"
              />
            </div>
            <div className="flex-1 flex items-center px-4 py-2">
              <MapPin className="text-gray-400 w-5 h-5 mr-2" />
              <select className="w-full outline-none text-gray-700 bg-transparent">
                <option>All Locations</option>
                <option>Nairobi</option>
                <option>Mombasa</option>
                <option>Kisumu</option>
                <option>Nakuru</option>
              </select>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-bold transition">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* --- Features / Trust Section --- */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Verified Sellers</h3>
            <p className="text-gray-600">We verify every seller to ensure you don't get scammed.</p>
          </div>
          <div className="p-4">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Transactions</h3>
            <p className="text-gray-600">Connect directly with buyers and sellers instantly.</p>
          </div>
          <div className="p-4">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Best Prices</h3>
            <p className="text-gray-600">Compare prices across Kenya to get the best deal.</p>
          </div>
        </div>
      </section>

      {/* --- Featured Listings --- */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Motorbikes</h2>
            <p className="text-gray-500 mt-2">Fresh deals added this week</p>
          </div>
          <a href="#" className="text-orange-600 font-semibold hover:underline flex items-center">
            View all <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBikes.map((bike) => (
            <div key={bike.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={bike.image} 
                  alt={bike.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-2 right-2 bg-white/90 text-xs font-bold px-2 py-1 rounded text-gray-800">
                  {bike.condition}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{bike.title}</h3>
                <div className="text-orange-600 font-bold text-xl mb-3">{bike.price}</div>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {bike.location}
                </div>
                <button className="w-full mt-4 border border-gray-200 text-gray-700 py-2 rounded hover:bg-gray-50 font-medium transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Call to Action (Sell) --- */}
      <section className="bg-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a bike to sell?</h2>
          <p className="text-orange-100 text-lg mb-8">
            Join thousands of Kenyans selling their bikes on MotoSwap KE. It's free to list and easy to manage.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
            Start Selling Now
          </button>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <Bike className="h-6 w-6 text-orange-600" />
              <span className="text-xl font-bold">MotoSwap<span className="text-orange-600">KE</span></span>
            </div>
            <p className="text-sm">The #1 Marketplace for motorbikes in East Africa.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Safety Tips</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          &copy; {new Date().getFullYear()} MotoSwap KE. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;