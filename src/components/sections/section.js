import React from 'react';
import './section.css';
import Brainstorm from '../../assets/brainstorm.png';
import Templates from '../../assets/template.png';
import Blog from '../../assets/blog.png';



function Section(){
    return(
        <section className="info" id="info">
            <article>
                <img src={Brainstorm} alt=""/>
                <h1>Brainstorm</h1>
                <h2>Tempestade de ideias</h2>
                <button type="button">Saiba Mais</button>
            </article>
            <article>
                <img src={Templates} alt=""/>
                <h1>TEMPLATES</h1>
                <h2>Desenvolvemos o rosto do seu site</h2>
                <button type="button">Saiba Mais</button>
            </article>
            <article>
                <img src={Blog} alt=""/>
                <h1>BLOG</h1>
                <h2>Nosso Blog</h2>
                <button type="button">Saiba Mais</button>
            </article>
        </section>
    );
}

export default Section;