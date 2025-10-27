import React from "react";
import Header from "../components/Header";
import products from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((s) => s.cart.items);
  const inCartIds = new Set(cartItems.map((i) => i.id));

  // Group by category
  const byCategory = products.reduce((acc, p) => {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Header />
      <main className="max-w-7xl mx-auto py-10 px-6">
        {/* Page Title */}
        <h2
          className="text-3xl font-bold mb-10 text-green-800 text-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Our Plants
        </h2>

        {/* Categories */}
        {Object.keys(byCategory).map((cat) => (
          <section key={cat} className="mb-16">
            {/* Category Header */}
            <div className="flex items-center justify-center mb-10">
              <div className="flex-grow border-t border-gray-300 max-w-[120px]" />
              <h3
                className="mx-4 text-xl font-semibold text-gray-800 text-center"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  textTransform: "capitalize",
                  letterSpacing: "0.5px",
                }}
              >
                {cat}
              </h3>
              <div className="flex-grow border-t border-gray-300 max-w-[120px]" />
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex overflow-x-auto px-6 pb-4 scrollbar-hide">
              {byCategory[cat].map((p, index) => (
                <article
                  key={p.id}
                  className="relative bg-[#FFFFFF] rounded-xl shadow-md border border-gray-200 p-5 flex-shrink-0 hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300"
                  style={{
                    width: "220px",
                    textAlign: "center",
                    flex: "0 0 auto",
                    marginRight: index === byCategory[cat].length - 1 ? "0" : "80px", // space between boxes
                  }}
                >
                  {/* SALE Tag */}
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                    SALE
                  </span>

                  {/* Product Image */}
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      marginBottom: "12px",
                    }}
                    className="border border-gray-200 shadow-sm"
                  />

                  {/* Name */}
                  <h4
                    className="font-semibold text-base text-gray-900 mb-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {p.name}
                  </h4>

                  {/* Price */}
                  <p className="text-green-700 text-sm font-semibold mb-3">
                    ${p.price.toFixed(2)}
                  </p>

                  {/* Add Button */}
                  <button
                    onClick={() => dispatch(addToCart(p))}
                    disabled={inCartIds.has(p.id)}
                    className={`w-full py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      inCartIds.has(p.id)
                        ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                        : "bg-[#16a34a] text-white hover:bg-[#64a316ff]"
                    }`}
                  >
                    {inCartIds.has(p.id) ? "Added" : "Add to Cart"}
                  </button>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
