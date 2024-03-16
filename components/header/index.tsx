import React from 'react';
import {
    Basket, BasketCounter, CheckoutLink,
    Logo,
    Nav,
    Option,
    OptionBottomLine,
    OptionTopLine,
    SearchBox,
    SearchIconButton,
    SearchInput, SingInLink
} from "@/components/header/styled";
import Link from "next/link";
import './styled'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {useAppDispatch, useAppSelector} from "@/lib/store/hooks";
import {auth} from "@/lib/firebase";
import {signOutFromAccount} from "@/lib/store/reducers/userReduser";
import {useRouter} from "next/router";
import {selectCartItemsCount} from "@/lib/store/reducers/cartReducer";


function Header() {

    const dispatch = useAppDispatch()
    const router = useRouter()
    const user = useAppSelector(state => state.user.user)
    const quantity = useAppSelector(selectCartItemsCount)

    const handleSingIn = () => {
        if(user !== null){
            auth.signOut()
            dispatch(signOutFromAccount(null))
        } else {
            router.push('/login')
        }
    }


    return (
        <Nav>
            <Link href='/'>
                <Logo src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg' alt='logo'
                      width={100} height={100}/>
            </Link>

            <SearchBox>
                <SearchInput type='text'/>
                <SearchIconButton />
            </SearchBox>

            <SingInLink>
                <Option>
                    <OptionTopLine>Hello <br/> {user?.email}</OptionTopLine>
                    <OptionBottomLine onClick={handleSingIn}>
                        { user !== null ? 'Sing Out' : 'Sing in' }
                    </OptionBottomLine>
                </Option>
            </SingInLink>

            <SingInLink>
                <Option>
                    <OptionTopLine>Returns</OptionTopLine>
                    <OptionBottomLine> & Orders</OptionBottomLine>
                </Option>
            </SingInLink>

            <CheckoutLink href='/checkout'>
                <Basket>
                    <ShoppingCartOutlinedIcon />
                    <BasketCounter>{quantity}</BasketCounter>
                </Basket>
            </CheckoutLink>
        </Nav>
    );
}

export default Header;