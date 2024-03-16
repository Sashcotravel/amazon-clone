import styled from "styled-components";


const Container = styled.div`
    margin-top: 10px;
    border: 1px solid lightgray;
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    
    h1{
        font-weight: 400;
        font-size: 28px;
        line-height: 1.2;
    }
    
    h5{
        margin-bottom: 5px;
    }
    
    p{
        text-align: center;
        margin-top: 15px;
        font-size: 12px;
    }
    
    input{
        margin-top: 5px;
        height: 30px;
        margin-bottom: 10px;
        width: 98%;
        background-color: ${({theme}) => theme.colors.white};
    }
`;

const SingInButton = styled.button`
    background: #f0c14b;
    border: 1px solid #a88734 #9c7e31 #846a29;
    margin-top: 10px;
    color: ${({theme}) => theme.colors.black};
    border-radius: 2px;
    width: 100%;
    height: 30px;
    cursor: pointer;
`;

const RegisterButton = styled.button`
    border: 1px solid #a88734 #9c7e31 #846a29;
    margin-top: 10px;
    color: ${({theme}) => theme.colors.black};
    border-radius: 2px;
    width: 100%;
    height: 30px;
    cursor: pointer;
`;


export { RegisterButton, SingInButton, Container }