import React from 'react';
import {Container, Main} from "@/styles/sharedstyles";
import {CheckoutBody, CheckoutContainer, CheckoutTitle} from "@/styles/checkoutstyles";
import {useAppSelector} from "@/lib/store/hooks";
import {CartType, selectCartItems, selectCartItemsCount} from "@/lib/store/reducers/cartReducer";
import CheckoutProduct from "@/components/CheckoutProduct";
import SubTotal from "@/components/SubTotal";

function Checkout() {

    const basket = useAppSelector(selectCartItems)
    const basketCount = useAppSelector(selectCartItemsCount)


    return (
        <Container>
            <Main>
                <CheckoutBody>
                    <CheckoutContainer>

                        {
                            basket.length === 0 ? (<div><h2>Shopping Basket is empty</h2></div>)
                                : (
                                    <div>
                                        <CheckoutTitle>
                                            You shopping basket - {basketCount} {basketCount > 1 ? " items" : " item"}
                                        </CheckoutTitle>
                                        {
                                            basket.map((item: CartType, index) => {
                                                return (
                                                    <CheckoutProduct id={item.id} title={item.title} image={item.image}
                                                             prise={item.price} key={item.id} />
                                                )
                                            })
                                        }
                                    </div>
                                )
                        }

                        {
                            basket.length > 0 && <SubTotal />
                        }

                    </CheckoutContainer>
                </CheckoutBody>
            </Main>
        </Container>
    );
}

export default Checkout;