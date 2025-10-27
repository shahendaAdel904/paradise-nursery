import React from "react";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{   backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.79)),
            url('https://images.jdmagicbox.com/v2/comp/delhi/v3/011pxx11.xx11.180928142710.j7v3/catalogue/priya-nursery-india-gate-delhi-plant-nurseries-0e10jwzx8v.jpg')
          `, }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm "></div>

      <div className="relative z-10 max-w-4xl mx-auto p-8 rounded-2xl bg-black/40 text-white">
        <h1
        className="text-5xl font-extrabold mb-10 py-6 px-8 ml-20"
        style={{ color: "white",
          textShadow: "0 0 10px rgba(255,255,255,0.6)",
          marginLeft: "20px",
          marginTop: "50px" 
        }}
        >
          WELCOME TO PARADISE VALLEY !
        </h1>
        <div 
        className="w-16 h-[1.5px] mx-auto mb-6 rounded-full"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 0 8px rgba(255, 255, 255, 0.7)",
          }}
        >
        </div>

        <p 
        className="text-lg text-gray-200 mb-8"
        style={{
          color: "#64a316ff",
          marginLeft: "40px",
          maxWidth: "600px",
        }}
        >
          ✨ Where Green Meets Serenity ✨
        </p>
        <p 
        className="mb-6 text-lg leading-relaxed"
        style={{
          color: "white",
          marginLeft: "555px",
          maxWidth: "800px",
        }}
        >
          At Paradise Nursery, we’re passionate about bringing nature closer
          to you. Our mission is to offer high-quality plants that enhance
          your surroundings while promoting a sustainable lifestyle.
        </p> 
        <p 
        className="mb-6 text-lg leading-relaxed"
        style={{
          color: "white",
          marginLeft: "555px",
          maxWidth: "800px",
        }}
        >
          From air-purifying greenery to aromatic favorites, our diverse
          collection caters to every plant enthusiast. Whether you're a
          seasoned gardener or a curious beginner, we’re here to guide you.
        </p>
        <p
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center text-gray-200 text-lg tracking-wide"
        style={{
          textShadow: "0 0 8px rgba(255, 255, 255, 0.41)",
          color: "white",
        }}
        >
          🌍🤝 Join us in making the world a greener, healthier place — one plant
          at a time. 🌱
        </p>
        <Link to="/products" 
         className="inline-flex items-center gap-3 
                   text-white text-lg font-semibold tracking-wide no-underline
                   bg-[#16a34a] hover:bg-[#16a34a] border-5 border-[#16a34a]
                   px-16 py-5 rounded-xl shadow-[0_0_25px_rgba(22,163,74,0.6)]
                   transition duration-300 ease-in-out hover:scale-105 visited:text-white"
         style={{ textDecoration: "none", color: "white" }}
        >
           🌿 Get Started
        </Link>
      </div>
    </div>
  );
}
