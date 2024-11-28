import React from 'react';
import './404.css'; // Import the CSS file

const NotFound = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                <a href="/register">Homepage</a>
            </div>
        </div>
    );
};

export default NotFound;
