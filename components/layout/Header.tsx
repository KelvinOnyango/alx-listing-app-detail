const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">StayFinder</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Sign In
            </a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Sign Up
            </a>
          </div>
        </div>

        <div className="mt-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search destinations, properties..."
              className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-lg">
              Search
            </button>
          </div>
        </div>

        <div className="mt-4 flex overflow-x-auto space-x-4 pb-2">
          {[
            "Rooms",
            "Mansions",
            "Countryside",
            "Beachfront",
            "Cabins",
            "Luxury",
            "Amazing Views",
          ].map((item) => (
            <button
              key={item}
              className="whitespace-nowrap px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
