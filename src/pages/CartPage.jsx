import React from "react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
  setQuantity,
} from "../store/slices/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart.items || []);

  const totalCount = items.reduce((s, it) => s + it.quantity, 0);
  const totalCost = items.reduce((s, it) => s + it.quantity * it.price, 0);

  return (
    <div className="min-h-screen bg-green-100">
      <Header />
      <div className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-3 text-green-800">
          Shopping Cart
        </h2>
        <p className="text-gray-700 mb-8">
          Total plants: <strong>{totalCount}</strong> — Total cost:{" "}
          <strong>${totalCost.toFixed(2)}</strong>
        </p>

        {items.length === 0 ? (
          <div className="bg-white rounded p-6 text-center shadow">
            <p className="mb-4">Your cart is empty.</p>
            <Link
              to="/products"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* 🪴 Cart items list */}
            <div className="space-y-20">
              {items.map((it) => (
                <div
                  key={it.id}
                  className="flex items-center gap-10 bg-white rounded-xl p-5 shadow-md"
                >
                  {/* Product Image */}
                  <img
                    src={it.image}
                    alt={it.name}
                    className="object-cover rounded-lg border border-gray-200"
                    style={{ width: "100px", height: "100px", flexShrink: 0 }}
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{it.name}</h3>
                    <div className="text-sm text-gray-600">
                      Unit: ${it.price.toFixed(2)}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => dispatch(decreaseQuantity(it.id))}
                      className="px-3 py-1 border rounded bg-gray-50"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="0"
                      value={it.quantity}
                      onChange={(e) =>
                        dispatch(
                          setQuantity({
                            id: it.id,
                            quantity: Number(e.target.value || 0),
                          })
                        )
                      }
                      className="w-16 text-center border rounded px-1 py-1"
                    />
                    <button
                      onClick={() => dispatch(increaseQuantity(it.id))}
                      className="px-3 py-1 border rounded bg-gray-50"
                    >
                      +
                    </button>
                  </div>

                  {/* Total + Delete */}
                  <div className="text-right">
                    <div className="font-bold">
                      ${(it.price * it.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => dispatch(removeItem(it.id))}
                      className="mt-2 text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Actions */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link
                  to="/products"
                  className="bg-white border px-4 py-2 rounded shadow-sm"
                >
                  Continue Shopping
                </Link>
                <button
                  onClick={() => dispatch(clearCart())}
                  className="bg-red-500 text-white px-4 py-2 rounded shadow"
                >
                  Clear Cart
                </button>
              </div>

              <div className="text-right">
                <div className="text-xl font-semibold mb-3">
                  Total: ${totalCost.toFixed(2)}
                </div>
                <button
                  onClick={() => alert("Checkout Coming Soon")}
                  className="bg-green-600 text-white px-5 py-2 rounded shadow"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
