import React from 'react';
import Hand from '../../assets/hand';
import Send from '../../assets/send'

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">Harsh Singh <Hand /></h1>
        <h3 className="home__subtitle">Software Developer</h3>
        <p className="home__description">I'm a creative software developer based in Mumbai, India, and I'm very passionate and dedicated to my work.</p>

        <a href="#contact" className="button button--flex">
            Say Hello <Send />
        </a>
    </div>
  )
}

export default Data