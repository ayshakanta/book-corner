import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page">
            <h1>Sorry, page not found!!</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>

           <Link to="/">Go Back To Home</Link>
            
        </div>
    );
};

export default ErrorPage;