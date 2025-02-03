import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/Cart/CartSlice";
import { toast } from "react-toastify";
import cartImage from "../assets/cartImage.png"
const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Calculate total items and price
  // const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const handleCheckOut = () => {
    toast.info("order is in progress", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="py-10 px-4 sm:px-6 bg-gradient-to-br from-yellow-100 to-orange-100 min-h-screen">
  <span className="flex flex-col sm:flex-row justify-between items-center mb-6">
    <h1 className="font-black text-3xl sm:text-4xl text-gray-800">
      YOUR CART
    </h1>
    <h1 className="font-black text-3xl sm:text-4xl text-gray-800">
      {cart.length} Item{cart.length !== 1 && "s"}
    </h1>
  </span>

  {cart.length === 0 ? (
    <div className="text-center mt-20 flex items-center flex-col">
      <img src={cartImage} alt=""  className="w-72"/>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-700">
        Your cart is empty!
      </h2>
      <p className="text-gray-500 mt-4">
        Add items to your cart to see them here.
      </p>
    </div>
  ) : (
    <>
      <div className="flex flex-col gap-6 mt-6 w-full">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md transition-colors duration-200 hover:bg-orange-100 w-full"
          >
            <div className="flex items-center flex-shrink-0 mb-4 sm:mb-0 w-full">
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-20 rounded-sm object-cover"
              />
              <h1 className="font-bold text-lg sm:text-xl mx-4 w-full">{item.name}</h1>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
              <h1 className="font-semibold text-base sm:text-lg text-gray-800 mb-2 sm:mb-0 w-full">
                Price: {item.price}₹
              </h1>

              <div className="flex items-center sm:ml-4 mt-2 sm:mt-0 w-full">
                <button
                  onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                  className="py-2 px-3 bg-gray-200 hover:bg-gray-300 rounded-l transition-colors duration-200"
                >
                  -
                </button>
                <span className="py-2 px-3 border">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                  className="py-2 px-3 bg-gray-200 hover:bg-gray-300 rounded-r transition-colors duration-200"
                >
                  +
                </button>
              </div>
            </div>

            <h1 className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-0 w-full">
              {item?.description}
            </h1>
            <button
              className="text-red-500 font-semibold hover:text-red-700 transition-colors duration-200 mt-2 sm:mt-0"
              onClick={() => dispatch(removeItemFromCart(item))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="flex justify-center sm:justify-end mt-10 w-full">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-2/3 lg:w-1/3">
          <h1 className="text-xl sm:text-2xl font-bold text-red-500 mb-6">
            Order Summary
          </h1>
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-gray-800">Total Items:</span>
            <span className="font-medium text-gray-600">{cart.length}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-gray-800">Total Price:</span>
            <span className="font-medium text-gray-600">{totalPrice}₹</span>
          </div>
          <button
            onClick={() => handleCheckOut()}
            className="w-full bg-blue-600 text-white uppercase font-semibold py-3 rounded-lg hover:bg-blue-500 transition duration-200"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  )}
</div>

  );
};

export default Cart;
