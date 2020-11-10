import React from 'react';
import { Link } from 'react-router-dom';
import profile_img from '../../assets/profile.png';
import physicians_img from '../../assets/physicians.png';
import treatments_img from '../../assets/treatments.png';

import './Home.css';

const Home = () => {
        return(
            <div>
                <div className='btn_container'>
                    <Link to={'/landing/profile'}><img src={ profile_img } alt='Profile' className='img_btn' ></img></Link>
                    <Link to={'/landing/physicians'}><img src= { physicians_img } alt='Physicians' className='img_btn'></img></Link>
                    <Link to={'/landing/treatments'}><img src={ treatments_img } alt='Treatments' className='img_btn'></img></Link>
                </div>
            </div>
        )
}

export default Home;