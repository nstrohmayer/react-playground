import React from 'react';
import {useRouteError} from 'react-router-dom';

type RoutingError = {
    statusText: string
    message: string
}

function canHandleError(object: unknown): object is RoutingError {
    return object !== null && typeof object === "object"
        && ("statusText" in object || "message" in object);
}

const ErrorPage: React.FC = () => {
    const error: unknown = useRouteError();
    console.error(error);

    if (!canHandleError(error)) {
        return (
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
        );
    }

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;
