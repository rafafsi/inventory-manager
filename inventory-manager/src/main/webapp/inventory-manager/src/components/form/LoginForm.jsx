import React, { useState } from "react";
import styled from "styled-components";

import Input from "./Input";

import { BiUser } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'
import { HiOutlineIdentification } from 'react-icons/hi'
import LinkButton from "../layout/LinkButton";


const LoginForm = ({handleSubmit}) => {
    
    const [data, setData] = useState({});


    const submit = (e) => {
        e.preventDefault();
        handleSubmit(data)
    }


    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    return (
        <>
            <FormSty onSubmit={submit}>
                <Input 
                    type="text"
                    text="name"
                    name="name"
                    placeholder="Name"
                    handleOnChange={handleChange}
                    icon={ <BiUser />}
                    autoFocus
                    />
                <Input 
                    type="text"
                    text="email"
                    name="email"
                    placeholder="E-mail"
                    handleOnChange={handleChange}
                    icon={ <MdOutlineEmail />}
                    />
                <Input 
                    type="text"
                    text="cpf"
                    name="cpf"
                    placeholder="CPF"
                    handleOnChange={handleChange}
                    icon={ <HiOutlineIdentification />}
                />

                <LinkButton to="/products" text="create"></LinkButton>
            </FormSty>
        </>
    )
}

const FormSty = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    
    * {
    font-family: 'Cairo', sans-serif;
    }
`


export default LoginForm;