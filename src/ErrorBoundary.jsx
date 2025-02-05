import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


function ErrorBoundary() {

  return (
    <div>
            <Helmet>
                <title>Error</title>
            </Helmet>

<div className="text-center m-auto p-5">
      <h1 className="text-4xl mb-5">404 Not Found</h1>
      <p className="mb-3 text-xl">The page you are looking for does not exist.</p>
      <Link className="p-4 text-red-600 rounded-xl underline" to="/">Go back to Home</Link>
    </div>

    </div>
  );
}

export default ErrorBoundary;