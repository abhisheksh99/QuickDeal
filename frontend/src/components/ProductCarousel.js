import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { Carousel, Image } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux' // Added this import
import Message from './Message'
import Loader from './Loader'
import { listTopProducts } from '../actions/productAction'

const ProductCarousel = () => {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { loading, error, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
        <Carousel pause="hover" className='bg-dark'>
            {products.map((product) => (
                <Carousel.Item key={product._id}>
                    <Link to={`/product/${product._id}`}>
                        <Image src={product.image} alt={product.name} fluid />
                        <Carousel.Caption className="carousel-caption">
                            <h4>{product.name} (${product.price})</h4>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default ProductCarousel