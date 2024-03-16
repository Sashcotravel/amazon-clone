import React from 'react';
import {Container, Main} from "@/styles/sharedstyles";
import { LoginContainer } from '@/styles/loginstyles';
import LoginForm from '@/components/LoginForm/index';


export default function Login() {
    return (
        <Container>
            <Main>
                <LoginContainer>
                    <LoginForm />
                </LoginContainer>
            </Main>
        </Container>
    );
}