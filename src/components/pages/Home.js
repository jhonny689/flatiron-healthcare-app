import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
        return(
            <div>
                <h1>Home</h1>
                <Link to={'/landing/profile'}><img alt='Profile'></img></Link>
                <Link to={'/landing/physicians'}><img alt='Physicians'></img></Link>
                <Link to={'/landing/treatments'}><img alt='Treatments'></img></Link>
            </div>
        )
}

export default Home;