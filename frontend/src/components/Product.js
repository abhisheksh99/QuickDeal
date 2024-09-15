import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded" style={{ height: '450px', width: '250px' }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img className="img-fluid"
          src={product.image} 
          variant="top" 
          style={{ height: '225px', width: '100%' }}
          transition="transform 0.3s ease"
          cursor="pointer"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
            <Rating 
              value={product.rating} 
              text={`${product.numReviews} reviews`} 
            />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
