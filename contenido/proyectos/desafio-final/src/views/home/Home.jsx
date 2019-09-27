import React from 'react';
import { Link } from 'react-router-dom';
const Home = (props) => {

    return (
        <div className="home">
            <Link to="login">a</Link>
            <button>Click</button>
       </div>
    );
};

export default Home;
