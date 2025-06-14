import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { useState } from "react";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-500">★ {property.rating}</span>
          <span>·</span>
          <span>
            {property.address.city}, {property.address.country}
          </span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="md:col-span-2 row-span-2">
          <img
            src={property.images[0]}
            alt={property.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {property.images.slice(1, 5).map((img, index) => (
          <div key={index} className="h-48">
            <img
              src={img}
              alt={`Property image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="lg:w-2/3">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {["description", "amenities", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 font-medium text-sm border-b-2 ${
                    activeTab === tab
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="py-6">
            {activeTab === "description" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  About this place
                </h2>
                <p className="text-gray-700">{property.description}</p>
              </div>
            )}

            {activeTab === "amenities" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  What this place offers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.category.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="bg-gray-200 p-2 rounded-md">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <ReviewSection reviews={property.reviews} />
            )}
          </div>
        </div>

        {/* Right Column - Booking Section */}
        <div className="lg:w-1/3">
          <div className="sticky top-6">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
