import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
function Movie({ year, title, summary, poster, genres }) {
  return (
  
       
    <div className="movie">
      <CardDeck>
          <Card>
            <CardImg top width="100%" src={poster} alt={title} />
            <CardBody>
              <CardTitle>{title}</CardTitle>
              <CardSubtitle>{year}</CardSubtitle>
              <CardText>{summary.slice(0.180)}</CardText>
              <Button>주류 댓글</Button>
              <Button>비주류 댓글</Button>
            </CardBody>
          </Card>
          </CardDeck>
         {/* <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0,180)}</p>
      </div> */}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;