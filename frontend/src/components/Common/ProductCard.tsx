'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import heartIconDT from '../../app/assets/heart-icon-dt.svg';
import heartIconMob from '../../app/assets/heart-icon-mob.svg';
import prodImage from '@/../public/assets/productCardomom.png';

interface Product {
    id: number;
    discount: string;
    productName: string;
    weight: string;
    price: number;
    productImage: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
        // Here you might want to trigger a backend call to update the wishlist status
    };

    return (
        <div className="relative w-[41.02vw] h-48 md:w-[17.5rem] md:h-[23.75rem] bg-linen shadow-sm border border-silver-low-opacity px-2 md:px-3">
            {/* Discount Badge */}
            <div className="absolute left-1 top-1 md:left-3 md:top-3 flex flex-col justify-center bg-green-500 p-1 md:px-2 md:py-2">
                <p className="text-xs md:text-sm text-isabelline">{product.discount}</p>
                <p className="text-xs md:text-sm text-isabelline">Off</p>
            </div>

            {/* Heart Icon */}
            <div className="absolute top-1 right-1 md:top-3 md:right-3 cursor-pointer" onClick={toggleWishlist}>
                <Image
                    src={isWishlisted ? heartIconDT : heartIconMob}
                    alt="heartIcon"
                    className="md:hidden"
                />
                <Image
                    src={isWishlisted ? heartIconDT : heartIconMob}
                    alt="heartIcon"
                    className="hidden md:block"
                />
            </div>

            {/* Product Image */}
            <div className="flex items-center justify-center mt-5 h-24 md:h-56 md:mt-8">
                <Image
                    src={product.productImage}
                    alt="prod-image"
                    width={208}
                    height={208}
                    className="w-24 h-24 md:w-52 md:h-52"
                />
            </div>

            {/* Product Info */}
            <p className="mt-1 text-sm md:mt-3 md:text-xl font-medium text-eerie-black">{product.productName}</p>
            <p className="mt-1 text-xs md:text-sm text-silver">{product.weight}</p>
            <p className="mt-1 text-sm md:mt-3 md:text-xl font-semibold md:font-extrabold text-eerie-black">₹{product.price}</p>

            {/* Add Button */}
            <div className="absolute right-2 bottom-2 md:right-4 md:bottom-4 bg-fawn rounded-sm md:rounded-md px-2 py-1 md:px-5 md:py-1 flex items-center justify-center">
                <p className="text-xs md:text-base font-semibold text-isabelline">Add</p>
            </div>
        </div>
    );
};

export default ProductCard;