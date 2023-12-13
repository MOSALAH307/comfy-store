import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError()

  if (error.status == 404) {
    return (
      <main className="grid place-items-center min-h-[100vh] px-8">
        <div className="text-center">
          <p className="font-semibold text-9xl text-red-800">404</p>
          <h1 className="text-3xl font-bold mt-4 tracking-tight sm:text-5xl">page not found</h1>
          <p className="mt-6 text-lg">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10">
            <Link to='/' className="btn btn-secondary">
              go back home
            </Link>
          </div>
        </div>
      </main>
    ); 
  }

  return (
    <main className="grid min-h-[100vh] px-8 place-items-center">
      <h4 className="text-center font-bold text-4xl">there was an error...</h4>
    </main>
  );
};

export default Error;
