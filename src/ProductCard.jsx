import React from 'react';
import './ProductCard.css';

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-price">${props.price}</p>
        {/* <a href="#" className="btn btn-primary">Comprar</a> */}
      </div>
    </div>
  );
}

export default Card;
