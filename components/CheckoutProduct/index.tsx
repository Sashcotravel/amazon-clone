import Image from "next/image";
import React from "react";
import { AmazonButton, Title } from "@/styles/sharedstyles";
import { Container, Info, TitleContainer } from "./styled";
import { removeFromCart } from "@/lib/store/reducers/cartReducer";
import { useAppDispatch } from "@/lib/store/hooks";
import Price from "../Prise";

interface IProps {
    id: string;
    title: string;
    image: string;
    prise: number;
}

const CheckoutProduct = ({ id, title, image, prise }: IProps) => {

    const dispatch = useAppDispatch();

    const removeFromBasket = () => {
        dispatch(removeFromCart({ id }));
    };

    return (
        <Container>
            <Image src={image} alt={title} width={180} height={180} />

            <Info>
                <TitleContainer>
                    <Title>{title}</Title>
                    <Price itemPrise={prise} />
                </TitleContainer>

                <AmazonButton onClick={() => removeFromBasket()}>
                    Remove from basket
                </AmazonButton>
            </Info>
        </Container>
    );
};

export default CheckoutProduct;