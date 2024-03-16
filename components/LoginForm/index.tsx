import React, {FormEvent, useState} from 'react';
import {Container, RegisterButton, SingInButton} from "./styled";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@firebase/auth";
import {auth} from "@/lib/firebase";
import {useRouter} from "next/router";
import {useAppDispatch} from "@/lib/store/hooks";
import {signInToAccount, signOutFromAccount} from "@/lib/store/reducers/userReduser";

function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()
    const dispatch = useAppDispatch()

    const loginUser = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential.user);
                dispatch(signInToAccount(userCredential.user))
                router.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const registerUser = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential.user);
                dispatch(signInToAccount(userCredential.user))
                router.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <Container>
            <h1>Sign in</h1>
            <form>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' value={email} placeholder='Enter email'
                       onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' value={password} placeholder='Enter password'
                       onChange={(e) => setPassword(e.target.value)} />
                <SingInButton type='submit'
                              onClick={(e) => loginUser(e)}>Sing In</SingInButton>
                <p>OR</p>
                <RegisterButton type='button'
                                onClick={(e) => registerUser(e)}>
                    Create your Account
                </RegisterButton>
            </form>
        </Container>
    );
}

export default LoginForm;