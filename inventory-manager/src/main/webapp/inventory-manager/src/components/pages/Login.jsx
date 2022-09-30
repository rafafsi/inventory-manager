import { useState } from "react";

import LoginForm from "../form/LoginForm";
import Container from "../layout/Container";
import Message from "../layout/Message";
import Title from "../layout/Title";

const Login = () => {
    
    const [message, setMessage] = useState('')
    const [type, setType] = useState('success')

    const createPerson = (data) => {

    
        fetch('http://localhost:8080/people', {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if(response.ok) {
                    response.json()
                } else {
                    throw new Error("Something went wrong.")
                }
            })
            .then(() => {
                setMessage("New account added successfully!")
                setType('success')
            })
            .catch((err) => {
                alert(`Something went wrong: ${err}`)
            })
    }

    return(
        <Container customClass={'section'}>
            <Title text={"create account"}/>
            {message && <Message type={type} msg={message} />}
            <LoginForm handleSubmit={createPerson}/>
        </Container>
    )
}


export default Login;