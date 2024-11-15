import { connect } from "react-redux";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-400 via-yellow-400 to-orange-500 flex justify-center items-center p-4">
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4 animate__animated animate__fadeIn">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Oops! Page not found.
        </h2>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Please check the URL or go back to the homepage.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(PageNotFound);
