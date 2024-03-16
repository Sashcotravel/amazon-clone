import {Info, ProductContainer} from './styled';
import {Title} from "@/styles/sharedstyles";
import Prise from "@/components/Prise";
import Rating from "@/components/Rating";
import AddToBasketButton from "@/components/AddToBasketButton";

export interface ProductProps {
    id: string,
    title: string,
    image: string,
    prise: number,
    rating: number
}

function Product({id, title, image, prise, rating}:ProductProps) {
    return (
        <ProductContainer key={id}>
            <img src={image} alt={title} />
            <Info>
                <Title>{title}</Title>
                <Prise itemPrise={prise} />
                <Rating rating={rating} />
            </Info>
            <AddToBasketButton id={id} title={title} image={image} prise={prise} rating={rating} />
        </ProductContainer>
    );
}

export default Product;