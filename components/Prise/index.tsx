import React from 'react';
import {PriseContainer} from "@/components/Prise/styled";

interface PriseProp {
    itemPrise: number
}

const Prise = ({itemPrise}: PriseProp) => {

    const handlePrise = () => {

        if(itemPrise !== undefined){
            const convertToString = itemPrise?.toString()
            const convertToArray = convertToString.split("")

            const getPoundsAmount = convertToArray.slice(0, -2).join("")

            const getPenceAmount = convertToArray.splice(convertToArray.length -2).join("")

            return (
                <>
                    <span>$</span>
                    <span>
                    {getPoundsAmount}
                        <small>{getPenceAmount}</small>
                </span>
                </>
            )
        }
    }

    return (
        <PriseContainer>{handlePrise()}</PriseContainer>
    );
};

export default Prise;