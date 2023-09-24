import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-center">
                <h1 className="text-3xl font-medium">Oops!</h1>
                <p className="text-lg">Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <button className="btn-success p-2 rounded-lg my-5"><Link to="/">Go Back</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;