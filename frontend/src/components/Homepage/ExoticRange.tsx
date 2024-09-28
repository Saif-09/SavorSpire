import React from 'react';
import ProductCard from '../Common/ProductCard';
import prodImage from '@/../public/assets/productCardomom.png'
import Link from 'next/link';

const dummyProducts = [
    {
        id: 1,
        discount: "15%",
        productName: "Fresh Cardamom",
        weight: "250gms",
        price: 1200,
        productImage: "/assets/productCardomom.png"
    },
    {
        id: 2,
        discount: "20%",
        productName: "Organic Turmeric",
        weight: "500gms",
        price: 1500,
        productImage: "/assets/productCardomom.png"
    },
    {
        id: 3,
        discount: "10%",
        productName: "Premium Saffron",
        weight: "50gms",
        price: 5000,
        productImage: "/assets/productCardomom.png"
    },
    {
        id: 4,
        discount: "5%",
        productName: "Pure Honey",
        weight: "1kg",
        price: 1000,
        productImage: "/assets/productCardomom.png"
    },
    {
        id: 5,
        discount: "25%",
        productName: "Ceylon Cinnamon",
        weight: "100gms",
        price: 800,
        productImage: "/assets/productCardomom.png"
    },
    {
        id: 6,
        discount: "30%",
        productName: "Black Pepper",
        weight: "200gms",
        price: 900,
        productImage: "/assets/productCardomom.png"
    }
];

const ExoticRange: React.FC = () => {
    return (
        <div className='w-screen bg-isabelline  md:px-[17.2rem] px-5 md:mt-[4.625rem] md:py-8 mt-6'>
            <div className='w-[100%] flex flex-row justify-between'>
                <h2 className='md:text-xl text-base font-medium md:font-semibold text-eerie-black'>Exotic Range</h2>
                <Link href="/product-category/exotic-range"> <h4 className='text-fawn text-base md:text-lg'>See all</h4></Link>

                
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-8 pl-[1.051vw]'>
                {dummyProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ExoticRange;