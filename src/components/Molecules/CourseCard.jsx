import React from 'react';
import '../../styles/styles.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
 
const CourseCard = ({ id, title, image, price, professor })  => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/courses/${id}`}>
              <img src={image} alt={image} />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                {professor}
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny"
                href="https://ed.team">
                {`$ ${price} usd`}
                </a>
            </div>
        </div>
    </article>
  )

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  professor: PropTypes.string
}

CourseCard.defaultProps = {
  title: "Title not found",
  image: "Image not found",
  price: "--",
  professor: ""
}

export default CourseCard;