"use server";
import { GET_ALL_PRODUCTS, GET_PRODUCT_ID } from "@/lib/apiLinks";

export type Image = {
    public_id: string;
    imageUrl: string;
    _id: string;
};

export type Product = {
    _id: string;
    title: string;
    description: string;
    price: number;
    discount: number;
    images: Image[];
    category: string;
    subcategory: string;
    productCreator: string;
    deleted: boolean;
    gst: number;
    cutPrice: number;
};

export interface Products {
    products: Product[];
    total: number;
    page: number;
    limit: number;
    pages: number;
}
export async function GetProductByID(pid: string) {
    try {
        const res = await fetch(GET_PRODUCT_ID(pid));
        if (res.status == 200) {
            const data = await res.json();
            return data.data.product;
        }
    } catch (error) { }
}

export async function GetAllProducts(
    category?: string,
    min_price?: number,
    max_price?: number,
    sortby?: string,
    search?: string,
    page?: number,
    perPage?: number,
    subCategory?: string
): Promise<Products[] | undefined> {
    console.log("category", category);
    console.log("min_value", min_price);
    try {
        const response = await fetch(
            GET_ALL_PRODUCTS({
                category,
                page,
                perPage,
                subCategory,
                min_price,
                max_price,
                sortby,
                search,
            }),
            {
                next: { revalidate: 3600 * 24 },
            }
        );

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data.data.products as Products[];
        } else {
            console.error(
                "Error fetching data:",
                response.status,
                response.statusText
            );
            return undefined;
        }
    } catch (error) {
        throw new Error("Failed to fetch Main blog data.");
    }
}
