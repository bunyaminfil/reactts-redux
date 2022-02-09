import React from 'react';
import { ProductCard } from '../../components/ProductCard';
import './style.css';

const BestSeller = () => {
    return (
        <div className="best-seller-container">
            <h2>Best Seller</h2>
            <div className="best-seller-products">
                <ProductCard
                    url="http://localhost:3000/images/black-shirt.png"
                    name="Formal Dress Shirts Casual Long Sleeve Slim Fit"
                />
                <ProductCard
                    url="http://localhost:3000/images/blue-short-shirt.png"
                    name="Formal Dress Shirts Casual Short Sleeve Slim Fit"
                />
                <ProductCard 
                    url="http://localhost:3000/images/blue-dress.png"
                    name="Tiered Wave Shirt Dress"
                />
            </div>
        </div>
    )
}

export default BestSeller;