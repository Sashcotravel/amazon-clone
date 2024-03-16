import styled from 'styled-components'

export const HomeContainer = styled.div`
    margin: 0 auto;
`

export const ProductRows = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    z-index: 1;
    margin: 0 auto;
`

export const BackgroundImg = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: -1;
    margin-bottom: -20px;
`