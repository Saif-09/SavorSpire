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

export const dummyProducts: Product[] = [
    {
        id: 1,
        discount: "15%",
        productName: "Fresh Cardamom",
        weight: "250gms",
        price: 1200,
        productImage: "/assets/productCardomom.png",
        category: "Spices",
        inStock: true
    },
    {
        id: 2,
        discount: "20%",
        productName: "Organic Turmeric",
        weight: "500gms",
        price: 1500,
        productImage: "/assets/productCardomom.png",
        category: "Spices",
        inStock: true
    },
    {
        id: 3,
        discount: "10%",
        productName: "Premium Saffron",
        weight: "50gms",
        price: 5000,
        productImage: "/assets/productCardomom.png",
        category: "Luxury Spices",
        inStock: false
    },
    {
        id: 4,
        discount: "5%",
        productName: "Pure Honey",
        weight: "1kg",
        price: 1000,
        productImage: "/assets/productCardomom.png",
        category: "Natural Sweeteners",
        inStock: true
    },
    {
        id: 5,
        discount: "25%",
        productName: "Ceylon Cinnamon",
        weight: "100gms",
        price: 800,
        productImage: "/assets/productCardomom.png",
        category: "Spices",
        inStock: true
    },
    {
        id: 6,
        discount: "30%",
        productName: "Black Pepper",
        weight: "200gms",
        price: 900,
        productImage: "/assets/productCardomom.png",
        category: "Spices",
        inStock: false
    }
];