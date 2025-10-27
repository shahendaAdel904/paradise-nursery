import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Leaf } from "lucide-react";

export default function Header() {
  const items = useSelector((state) => state.cart.items);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-[#16a34a] text-white w-full shadow h-28">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3">
          {/* Logo Circle */}
          <img
           src="https://cdn.dribbble.com/userupload/7308964/file/original-9b304cb5e216ca2c6e88172b97570f63.png?crop=0x326-1000x1076&format=webp&resize=400x300&vertical=center"
           alt="Logo"
           className="rounded-full object-cover"
           style={{ width: "70px", height: "70px" }}
          />
          <div>
          <div 
          className="font-semibold text-lg leading-tight"
          style={{
            color: "white",
            marginLeft: "20px",
            fontSize: "1.5rem",
            fontFamily:"'Dancing Script', cursive", fontWeight: 700, letterSpacing: "1px",
            }}
          >
            <Link to="/"
            style={{ textDecoration: "none", color: "white"  }}
            >
              Paradise Nursery
            </Link>
            </div>
            <div 
            className="text-xs text-green-100 italic -mt-1"
             style={{
              color: "white",
              marginLeft: "10px",
              fontFamily:"'Poppins', sans-serif",
            letterSpacing: "0.5px"
            }}
            >
              Where Green Meets Serenity
            </div>
          </div>
        </div>

        {/* Center: Page Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/products"
            className="font-serif text-white tracking-wide hover:text-[#b7e4c7] transition-colors"
            style={{ textDecoration: "none", color: "white", fontSize: "2rem", fontFamily:"'Dancing Script', cursive", fontWeight: 700, letterSpacing: "1px", }}
          >
            Plants
          </Link>
        </div>

        {/* Right: Cart */}
        <Link to="/cart" className="relative inline-flex items-center"
        style={{ textDecoration: "none", color: "white" }}
        >
          Cart 🛒
          <span 
          className="absolute bg-white text-green-700 font-bold rounded-full px-2 text-xs"
          style={{ top: "-2px", left: "-12px" }}
          >
            {totalCount}
          </span>
        </Link>
      </div>
    </header>
  );
}
