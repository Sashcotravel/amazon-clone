import Image from "next/image";
import React from "react";
import { Container, LeftColumn, RightColumn } from "./styled";
import { Title } from "@/styles/sharedstyles";
import AddToBasketButton from "../AddToBasketButton";
import Price from "../Prise";
import Review from "../Review";

interface ProductDetailsProps {
    product: ProductType;
}

export interface ReviewType {
    id: string;
    rating: string;
    email: string;
    name: string;
    headline: string;
    content: string;
}

export interface ImageType {
    width: number;
    height: number;
    fileName: string;
    url: string;
}

export interface ProductType {
    id: string;
    name: string;
    description: string;
    price: number;
    categories: CategoriesType[];
    images: ImageType[];
    reviews: ReviewType[];
}

export interface CategoriesType {
    id: string;
    name: string;
}


const ProductDetails = ({ product }: ProductDetailsProps) => {
    return (
        <Container>
            <LeftColumn>
                <Image
                    src={product.images[0].url}
                    alt={product.name}
                    width={300}
                    height={300}
                    priority
                />
            </LeftColumn>
            <RightColumn>
                <Title>{product.name}</Title>
                <Price itemPrise={product.price} />
                {product.categories.map((category: CategoriesType) => (
                    <p key={category.id}>{category.name}</p>
                ))}
                <p>{product.description}</p>

                <AddToBasketButton
                    id={product.id}
                    title={product.name}
                    prise={product.price}
                    rating={5}
                    image={product.images[0].url}
                />

                {/* Reviews */}
                {product.reviews.length > 0 && (
                    <>
                        <Title>Top reviews from United Kingdom</Title>
                        {product.reviews.map((productReview: ReviewType) => (
                            <Review productReview={productReview} rating={4} />
                        ))}
                    </>
                )}
            </RightColumn>
        </Container>
    );
};

export default ProductDetails;