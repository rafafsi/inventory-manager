import { useState } from "react";

import LoginForm from "../form/LoginForm";
import Container from "../layout/Container";
import Message from "../layout/Message";
import Title from "../layout/Title";

const Login = () => {
    
    const [message, setMessage] = useState()

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
        })
        .catch((error) => {
            alert(`Something went wrong: ${error}`)
        })
    }

    return(
        <Container customClass="section">
            <Title text={"create account"}/>
            {message && <Message type="success login" msg={message} />}
            <LoginForm handleSubmit={createPerson}/>
        </Container>
    )
}


export default Login;