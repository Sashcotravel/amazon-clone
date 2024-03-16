import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import Image from "next/image";
import Link from "next/link";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    position: static;
    top: 0;
    margin: 0;
    padding: 10px 15px;
    background-color: ${({ theme }) => theme.colors.navBg };
`

export const Logo = styled(Image)`
    margin: 0 20px;
    height: 50px;
    cursor: pointer;
    object-fit: contain;
`

export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`

export const SearchInput = styled.input`
    display: flex;
    height: 22px;
    padding: 10px;
    border: none;
    width: 100%;
`

export const SearchIconButton = styled(SearchIcon)`
    background-color: #febd68;
    height: 0.9em!important;
    padding: 2px;
`

export const OptionBottomLine = styled.span`
    font-size: 13px;
    font-weight: 800;
`

export const Option = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    color: ${({theme}) => theme.colors.white};
`

export const OptionTopLine = styled.span`
    font-size: 10px;
`

export const Basket = styled.div`
    display: flex;
    align-items: center;
`

export const BasketCounter = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    color: ${({theme}) => theme.colors.orange};
`

export const SingInLink = styled.div`
    text-decoration: none;
    cursor: pointer;
    color: ${({theme}) => theme.colors.white};
`

export const CheckoutLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: ${({theme}) => theme.colors.white};
`
