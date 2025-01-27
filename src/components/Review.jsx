import React from "react";

const Review = () => {
  return (
    <div className="py-10 bg-gradient-to-br from-yellow-100 to-orange-100 text-gray-800">
      <div className="">
        <div className="text-center mb-16 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
            What our customers say
          </p>
          <h1 className="text-3xl font-bold text-orange-600">
            Customer Reviews
          </h1>
          <p className="text-sm text-gray-600">
            Discover why our customers love us!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-6 rounded-xl bg-white text-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              className="rounded-full w-24 h-24 object-cover mx-auto"
              src="https://t4.ftcdn.net/jpg/01/51/99/39/360_F_151993994_mmAYzngmSbNRr6Fxma67Od3WHrSkfG5I.jpg"
              alt="Customer"
            />
            {/* <Rating name="read-only" readOnly /> */}
            <p className="text-gray-600 text-sm italic">
              "Amazing quality and service!"
            </p>
            <h1 className="text-xl font-bold text-orange-600">John Doe</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-6 rounded-xl bg-white text-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              className="rounded-full w-24 h-24 object-cover mx-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&s "
              alt="Customer"
            />
            <p className="text-gray-600 text-sm italic">
              "Best parathas in town!"
            </p>
            <h1 className="text-xl font-bold text-orange-600">Jane Smith</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-6 rounded-xl bg-white text-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              className="rounded-full w-24 h-24 object-cover mx-auto"
              src="https://kalsisolar.com/images/543955831.jpg"
              alt="Customer"
            />
            <p className="text-gray-600 text-sm italic">
              "Fast delivery and great taste!"
            </p>
            <h1 className="text-xl font-bold text-orange-600">Alex Brown</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
