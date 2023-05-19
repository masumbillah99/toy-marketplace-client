import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import img from "./error-404.json";

const ErrorPage = () => {
  const { error } = useRouteError();
  // console.log(error);

  return (
    <>
      <div className="text-center">
        <Lottie className="w-1/2 mx-auto" animationData={img} />
        <p className="text-red-700">{error?.message}</p> <br />
        <Link
          tp="/"
          className="bg-red-500 hover:bg-red-700 text-white py-3 px-4 mx-auto rounded-lg"
        >
          Back to HomePage
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
