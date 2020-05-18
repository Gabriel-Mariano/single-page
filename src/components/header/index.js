import React, { useState } from 'react';
import {HashLink as Link}from 'react-router-hash-link';
import {FaBars} from 'react-icons/fa';
import identidadeVisual  from '../../assets/identidadeVisual.png';
import {MdClose} from 'react-icons/md';
import './style.css';


function Header(){

  const [bars,setBars] = useState(true);
    
  function Show() {
    setBars(false);
  }

  function Hide(){
      setBars(true);
  }

    return(
        <header>
            <figure className="symbol"><img src={identidadeVisual} alt="Logo"/></figure>    
            <button id="btn-open" className="btnActions" 
                onClick={Show}
                style={ {display: bars?'block':'none'} }>
                <FaBars style={{ color: 'white' }} size="1.5em"></FaBars>
            </button>
            <nav id="menu-bars"
                 style={ {display: bars?'none':'block'} }
                >
                <button id="btn-close" className="btnActions"
                    onClick={Hide} >
                    <MdClose style={{ color: 'white' }} size="1.8em"></MdClose>
                </button>
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>Sobre</Link></li>
                    <li><Link>Projetos</Link></li>
                    <li><Link>Budget</Link></li>
                    <li><Link>Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;