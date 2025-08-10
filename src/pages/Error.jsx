import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="max-w-max mx-auto">
          <div className="sm:flex">
            <p className="text-8xl md:text-9xl font-extrabold text-gray-900  tracking-tight">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-4 text-base text-gray-500">
                  Sorry, we couldn't find the page you're looking for.
                </p>
              </div>
              <div className="mt-8 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  to="/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-zinc-900  hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 transition-all duration-200"
                >
                  Go back home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="text-center">
        <h4 className="text-4xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </h4>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again later.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900  hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900  transition-all duration-200"
        >
          Return to homepage
        </Link>
      </div>
    </main>
  );
};

export default Error;
