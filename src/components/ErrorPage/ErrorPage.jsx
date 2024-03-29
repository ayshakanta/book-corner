import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className="flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl font-semibold mb-4">Sorry, page not found!!</h1>
            <p className="mb-4">
                <i>{error.statusText || error.message}</i>
            </p>

           <Link className="bg-[#23BE0A] text-white font-medium px-3 py-2 rounded-lg " to="/">Go Back To Home</Link>
            
        </div>
    );
};

export default ErrorPage;