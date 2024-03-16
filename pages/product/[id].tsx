import React from 'react';
import {useRouter} from "next/router";
import ProductDetails from "../../components/ProductDetails";
import { Container, Main } from "@/styles/sharedstyles";
import useProduct from "@/components/hooks/useProduct";

const ProductInfo = () => {

    const router = useRouter()

    const {id} = router.query

    const { loading, error, data } = useProduct(id as string);

    if (loading) return <p>Loading</p>;
    if (error) return <p>error</p>;

    const { product } = data;

    return (
        <Container>
            <Main>
                <ProductDetails product={product} />
            </Main>
        </Container>
    );
};

export default ProductInfo;