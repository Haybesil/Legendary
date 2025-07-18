import homepageImg from '/images/homepage.png';
import Navbar from '../components/common/Navbar';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      {/* Centered Content */}
      <div className="flex flex-col flex-1 justify-center items-center px-2 sm:px-0">
        <img
          src={homepageImg}
          alt="Homepage Visual"
          className="object-contain mb-8 w-40 h-40 sm:w-64 sm:h-64 animate-tilt-3d"
        />
        {/* <span className="mb-2 text-6xl font-bold text-gray-900">τ0.00</span>
        <div className="mt-2 w-32 h-1 bg-gray-200 rounded-full" /> */}
      </div>
    </div>
  );
}
