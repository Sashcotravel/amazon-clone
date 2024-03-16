import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
    BottomRow,
    Container,
    HelpfulBtn,
    MiddleRow,
    TopRow,
    VerifiedText,
} from "./styled";
import Rating from "../Rating";

interface IProps {
    productReview: ReviewType;
    rating: number;
}

export interface ReviewType {
    id: string;
    rating: string;
    email: string;
    name: string;
    headline: string;
    content: string;
}


const Review = ({ productReview, rating }: IProps) => {
    return (
        <Container key={productReview.id}>
            <TopRow>
                <AccountCircleIcon />
                <p>{productReview.name}</p>
            </TopRow>
            <MiddleRow>
                <Rating rating={rating}/>
                <p>{productReview.headline}</p>
            </MiddleRow>
            <VerifiedText>Verified Purchase</VerifiedText>
            <p>{productReview.content}</p>
            <p style={{ color: "#565959" }}>3 people found this helpful</p>
            <BottomRow>
                <HelpfulBtn>Helpful</HelpfulBtn>
                <p style={{ color: "#565959", fontSize: "14px" }}>Report abuse</p>
            </BottomRow>
        </Container>
    );
};

export default Review;