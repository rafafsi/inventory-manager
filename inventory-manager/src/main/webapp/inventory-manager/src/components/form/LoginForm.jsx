import React, { useState } from "react";
import InputMask from 'react-input-mask'
import styled from "styled-components";

import Input from "./Input";
import Button from "../layout/Button";

import { BiUser } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'
import { HiOutlineIdentification } from 'react-icons/hi'



const LoginForm = ({ handleSubmit }) => {

    const [data, setData] = useState({});

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(data)
    }


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
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
                    icon={<BiUser />}
                />
                <Input
                    type="text"
                    text="email"
                    name="email"
                    placeholder="E-mail"
                    handleOnChange={handleChange}
                    icon={<MdOutlineEmail />}

                />
                <Wrapper>
                    <Icon>{<HiOutlineIdentification />}</Icon>
                    <InputSty
                        type="text"
                        text="cpf"
                        name="cpf"
                        placeholder="CPF"
                        mask="999.999.999-99"
                        onChange={handleChange} 
                    />
                </Wrapper>
                <Button type="submit" text="create" />
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

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`

const InputSty = styled(InputMask)`
    padding: 5px 5px 5px 40px;
    border: solid 2px var(--mainBlack);
    border-radius: 10px;
    margin: 0.5em;
    width: 500px;
    font-size: 1em;
`

const Icon = styled.div`
    font-size: 20px;
    position: absolute;
    left: 20px;
    height: 34px;
`


export default LoginForm;