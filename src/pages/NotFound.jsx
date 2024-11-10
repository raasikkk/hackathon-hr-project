import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-6xl font-bold text-[#FF8C42] mb-4">404</h1>
        <h2 className="text-2xl text-corange font-semibold mb-2">
          Page Not Found
        </h2>
        <p className="text-lg mb-6 text-corange">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="px-4 py-2 bg-[#FF8C42] text-white rounded hover:bg-[#ff7c2e] transition"
        >
          Go Home
        </a>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
