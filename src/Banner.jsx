import React from 'react';

const Banner = () => (
    <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" alt="banner" src="https://wallpapercave.com/wp/wp3350863.jpg" />
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">Cursos de EDteam</p>
                    <p> Tu futuro te está esperando</p>
                    <a href="https://ed.team" target="_blank" rel="noopener noreferrer" className="button">Suscribirse</a>
                </div>
            </div>
        </div>
    </div>
)

export default Banner;