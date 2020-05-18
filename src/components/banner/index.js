import React from 'react';
import {HashLink as Link}from 'react-router-hash-link';
import './style.css';

function Banner(){
    return(
        <section className="banner-principal">
            <div>
                <h1>WEB DEVTEMPLATES</h1>
                <h2>Criamos sua marca e ampliamos o seu alcance</h2>
                <div className="buttons">
                    <Link smooth to="#info" id="btnActive">Comece Agora</Link>
                    <Link to="">Saiba Mais</Link>
                </div>
            </div>
        </section>
    );
}

export default Banner;