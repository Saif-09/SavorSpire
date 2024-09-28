'use client'
import React, { useEffect, useState } from 'react';
import { Heart, ArrowUpDown, SlidersHorizontal, Grid, X } from 'lucide-react';
import { dummyProducts } from '@/lib/dummyData';
import ProductCard from '@/components/Common/ProductCard';
// import dummyProducts from '@/lib/dummyData.ts'

interface Product {
    id: number;
    discount: string;
    productName: string;
    weight: string;
    price: number;
    productImage: string;
    category: string;
    inStock: boolean;
}

type SortOption = 'featured' | 'priceLowToHigh' | 'priceHighToLow' | 'nameAToZ' | 'nameZToA';

const formatCategoryName = (category: string | string[]): string => {
    if (Array.isArray(category)) {
        category = category.join('-');
    }
    return category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};


const ProductCategoryPage: React.FC<{params: {filter: string}}> = ({params}) => {
    const [showFilters, setShowFilters] = useState(false);
    const [inStockOnly, setInStockOnly] = useState(false);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(dummyProducts);
    const [sortOption, setSortOption] = useState<SortOption>('featured');
    const categories = Array.from(new Set(dummyProducts.map(product => product.category)));

    useEffect(() => {
        let filtered = dummyProducts.filter(product =>
            (inStockOnly ? product.inStock : true) &&
            (product.price >= priceRange[0] && product.price <= priceRange[1]) &&
            (selectedCategories.length === 0 || selectedCategories.includes(product.category))
        );

        // Apply sorting
        switch (sortOption) {
            case 'priceLowToHigh':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'priceHighToLow':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'nameAToZ':
                filtered.sort((a, b) => a.productName.localeCompare(b.productName));
                break;
            case 'nameZToA':
                filtered.sort((a, b) => b.productName.localeCompare(a.productName));
                break;
            // 'featured' is the default order, so we don't need to sort
        }

        setFilteredProducts(filtered);
    }, [inStockOnly, priceRange, selectedCategories, sortOption]);


    const FilterComponent = () => (
        <div className="bg-isabelline p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="mb-4">
                <h3 className="font-medium mb-2">Availability in stock</h3>
                <label className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={() => setInStockOnly(!inStockOnly)}
                        className="mr-2"
                    />
                    In Stock Only
                </label>
            </div>
            <div className="mb-4">
                <h3 className="font-medium mb-2">Price Range</h3>
                <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full mb-2"
                />
                <div className="flex justify-between">
                    <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-20 p-1 border rounded"
                    />
                    <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-20 p-1 border rounded"
                    />
                </div>
            </div>
            <div>
                <h3 className="font-medium mb-2">Categories</h3>
                {categories.map(category => (
                    <label key={category} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => {
                                if (selectedCategories.includes(category)) {
                                    setSelectedCategories(selectedCategories.filter(c => c !== category));
                                } else {
                                    setSelectedCategories([...selectedCategories, category]);
                                }
                            }}
                            className="mr-2"
                        />
                        {category}
                    </label>
                ))}
            </div>
        </div>
    );

    const SortComponent = () => (
        <div className="relative">
            <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue"
            >
                <option value="featured">Featured</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="nameAToZ">Name: A to Z</option>
                <option value="nameZToA">Name: Z to A</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ArrowUpDown size={16} />
            </div>
        </div>
    );

    return (
        <div className="bg-isabelline min-h-screen">
            {/* Desktop view */}
            <div className="hidden md:block container mx-auto px-4 py-8">
                

                <div className="flex">
                    <div className="w-1/4 pr-8">
                        <FilterComponent />
                    </div>
                    <div className="w-3/4">
                        <h1 className="text-2xl font-bold mb-4">{formatCategoryName(params.filter)}</h1>
                        <div className="flex justify-between items-center mb-4">
                            <SortComponent />
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="bg-white rounded-lg shadow p-4">
                                    <div className="relative mb-2">
                                        <img src={product.productImage} alt={product.productName} className="w-full h-48 object-cover rounded" />
                                        <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                                            {product.discount} Off
                                        </span>
                                        <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
                                            <Heart size={24} />
                                        </button>
                                    </div>
                                    <h3 className="font-semibold">{product.productName}</h3>
                                    <p className="text-sm text-gray-600">{product.weight}</p>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="font-bold">₹{product.price}</span>
                                        <button className="bg-orange-200 text-orange-800 px-4 py-1 rounded">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile view */}
            <div className="md:hidden">
                {showFilters ? (
                    <div className="fixed inset-0 bg-white z-50 p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Filter's</h2>
                            <button onClick={() => setShowFilters(false)}>
                                <X size={24} />
                            </button>
                        </div>
                        <FilterComponent />
                        <button
                            onClick={() => setShowFilters(false)}
                            className="w-full bg-orange-400 text-white py-3 rounded-lg mt-8"
                        >
                            View results
                        </button>
                    </div>
                ) : (
                    <div className="p-4">
                        <h1 className="text-xl font-bold mb-4">{formatCategoryName(params.filter)}</h1>
                        <div className="flex justify-between mb-4">
                            <button onClick={() => setShowFilters(true)} className="flex items-center">
                                <SlidersHorizontal size={20} className="mr-1" /> Filter
                            </button>
                            <SortComponent />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {filteredProducts.map((product) => (
                                <ProductCard product={product}/>
                            ))}
                        </div>
                    </div>
                )}
                <footer className="bg-gray-200 p-4 mt-8">
                    <h3 className="font-semibold mb-2">Our Story And Policies</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms Of Service</li>
                        <li>Refund Policy</li>
                    </ul>
                    <h3 className="font-semibold mt-4 mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <img src="/api/placeholder/24/24" alt="Facebook" />
                        <img src="/api/placeholder/24/24" alt="Twitter" />
                        <img src="/api/placeholder/24/24" alt="Instagram" />
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ProductCategoryPage;