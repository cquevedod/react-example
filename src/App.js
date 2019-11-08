import React from 'react';
import './styles/styles.scss';
import Curso from './Curso';

const cursos = [
  {
    "title": "React desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    "price": 30,
    "profesor": "Carlos Q"
  },
  {
    "title": "Drupal desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
    "price": 40,
    "profesor": "Carlos Q"    
  }, 
  {
    "title": "Go desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
    "price": 50,
    "profesor": "Carlos Q"    
  }, 
  {
    "title": "HTML desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
    "price": 10,
    "profesor": "Carlos Q"    
  }
]

function App() {
  return (
  <>
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

      <div className="ed-grid m-grid-3">
        {
            cursos.map( curso =>
                <Curso title = {curso.title}
                       image = {curso.image}
                       price = {curso.price}
                       profesor = {curso.profesor}  /> )
        }
      </div> 
  </>
      );
    }
    
    export default App;
