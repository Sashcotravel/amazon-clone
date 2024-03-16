import React from 'react';
import {ProductProps} from "@/components/Product";
import {AmazonButton} from "@/styles/sharedstyles";
import {useAppDispatch} from "@/lib/store/hooks";
import {addToCart} from "@/lib/store/reducers/cartReducer";


const AddToBasketButton = ({id, title, image, prise, rating}:ProductProps) => {

    const dispatch = useAppDispatch()

    const addToBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        dispatch(addToCart({id, title, image, price: prise, rating}))
    }


    return (
        <AmazonButton onClick={(e) => addToBasket(e)}>
            Add To Basket
        </AmazonButton>
    );
};

export default AddToBasketButton;