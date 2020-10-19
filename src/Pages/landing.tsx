import React from 'react';

import '../styles/global.css';
import '../styles/pages/landing.css';

import Logo from '../images/Logo.svg';

import {FiArrowRight} from 'react-icons/fi';

import {Link} from 'react-router-dom'

function landing () {
 return (
    <div id="page-landing">
    <div className="context-wrapper">
      <img src={Logo} alt="Happy" />

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

    <div className="location>"> </div>
      <strong>Fortaleza</strong>
      <span>Ceara</span>
    </div>
  
  <Link to="/app" className="enter">
    <FiArrowRight size={30} color="rgba(0,0,0.6)"/>
  </Link>
  
  
  </div>

 );
}

export default landing;