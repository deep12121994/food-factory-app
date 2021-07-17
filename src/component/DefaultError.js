import React from 'react';

const ErrorPage = ({alert}) => {
    return(
        <div className="error-msg">
            <h3>{alert}</h3>
        </div>
    )
}

export default ErrorPage;