import { useState } from "react";
import InputMask from 'react-input-mask'

import { TbFileDescription } from 'react-icons/tb'
import { BiCategoryAlt } from 'react-icons/bi'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { MdDateRange } from 'react-icons/md'

import Input from "./Input";
import styled from "styled-components";

import Button from "../layout/Button";

const ProductForm = ({ btnText, handleSubmit, productData }) => {

    const [product, setProduct] = useState(productData ? productData : []);


    const submit = () => {
        handleSubmit(product)
    }

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <FormSty onSubmit={submit}>
                <Input
                    type="text"
                    text="description"
                    name="description"
                    placeholder="Description"
                    handleOnChange={handleChange}
                    icon={<TbFileDescription />}
                    value={product.description ? product.description : ''}
                />
                <Input
                    type="text"
                    text="type"
                    name="type"
                    placeholder="Type"
                    handleOnChange={handleChange}
                    icon={<BiCategoryAlt />}
                    value={product.type ? product.type : ''}
                />
                <Input
                    type="text"
                    text="price"
                    name="price"
                    placeholder="Price"
                    handleOnChange={handleChange}
                    icon={<HiOutlineCurrencyDollar />}
                    value={product.price ? product.price : ''} 
                />

                <Wrapper>
                    <Icon>{<MdDateRange />}</Icon>
                    <InputSty
                        type="text"
                        text="expiration"
                        name="expirationDate"
                        placeholder="Expiration Date (YYYY-MM-DD)"
                        mask="9999-99-99"
                        onChange={handleChange}
                        value={product.expirationDate ? product.expirationDate : '' }

                    />
                </Wrapper>
                <Button type="submit" text={btnText} />
            </FormSty>
        </div>

    )
}

const FormSty = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

export default ProductForm;