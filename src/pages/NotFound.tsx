
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bikerDark py-32">
      <div className="text-center px-4">
        <h1 className="text-8xl font-display text-bikerRed mb-4">404</h1>
        <p className="text-2xl text-bikerCream mb-6">Oops! We can't find that page</p>
        <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for has gone off the grid, much like Biker Jim before he found his calling in hot dogs.
        </p>
        <Link to="/" className="button-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
