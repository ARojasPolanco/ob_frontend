import { Link } from "react-router-dom";
import imageError from "../assets/images/error404.png";

const ErrorPage = () => {
  return (
    <>
      <section className="bg-quaternary/80 dark:bg-gray-900 h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <img
              src={imageError}
              alt="image error"
              className="rounded-xl opacity-70 my-10 md:my-20"
              width={800}
            />
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              ¡UPS! Houston tenemos un problema.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Lo sentimos, no pudimos encontrar la página que estás buscando.
              Encontrarás mucho más en la página principal.
            </p>
            <Link
              to="/"
              className="inline-flex text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Volver a la página principal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
