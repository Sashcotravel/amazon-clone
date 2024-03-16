import React from 'react';
import {Container} from "@/components/Rating/styled";
import StarIcon from "@mui/icons-material/Star";

interface RatingProps {
    rating: number
}

const Rating = ({rating}: RatingProps) => {

    return (
        <Container>
            {
                Array(rating).fill(<StarIcon key={rating} className='product_star' />)
            }
        </Container>
    );
};

export default Rating;