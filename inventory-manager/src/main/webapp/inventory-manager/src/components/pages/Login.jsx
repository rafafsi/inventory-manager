import { useState } from "react";

import LoginForm from "../form/LoginForm";

import img from '../../img/inventory-login.png'
import LinkButton from '../layout/LinkButton'
import Container from "../layout/Container";
import Message from "../layout/Message";
import Title from "../layout/Title";
import styled from "styled-components";

const Login = () => {

    const [message, setMessage] = useState()
    const [isLogin, setIsLogin] = useState(false)

    const createPerson = (data) => {
        setMessage('')
        fetch('http://localhost:8080/people', {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((resp) => resp ? resp.json() : console.log('we got an error'))
            .then(() => {
                setMessage("Welcome to our service!")
                setTimeout(() => {
                    setIsLogin(true)
                }, 1000)
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    return (
        <>
            {!isLogin ? (
                <Container customClass="section">
                    <Title text={"create account"} />
                    {message && <Message type="success login" msg={message} />}
                    <LoginForm handleSubmit={createPerson} />
                </Container>
            ) : (
                <Container customClass="section">
                    <Img src={img} alt="Inventory"/>
                    <LinkButton to="/products" text="insert your products!" />
                </Container>
            )}
        </>
    )
}

const Img = styled.img`
    width: 400px;
`


export default Login;