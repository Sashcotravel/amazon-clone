import styled from 'styled-components'

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 300px;
    margin: 10px;
    padding: 20px;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.white};
    
    img {
        width: 100%;
        max-height: 200px;
        object-fit: contain;
        margin-bottom: 10px;
    }
    
    .product_star{
        color: ${({ theme }) => theme.colors.orange}!important;
    }
`

export const Info = styled.div``

export const Prise = styled.p`
    display: flex;
    margin: -10px 0;
    font-size: 20px;
    align-items: flex-start;
    
    span{
        font-weight: 600;
    }
    small{
        font-size: small;
        margin-top: 2px;
    }
`