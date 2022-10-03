import Input from "./Input";

import { TbFileDescription } from 'react-icons/tb'
import { BiCategoryAlt } from 'react-icons/bi'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { MdDateRange } from 'react-icons/md'
import { useState } from "react";
import styled from "styled-components";
import Button from "../layout/Button";

const ProductForm = ({btnText, handleSubmit, productData}) => {

    const [product, setProduct] = useState(productData ? productData : []);
    
    
    const submit = () => {
        handleSubmit(product)
    }
    
    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    return(
        <div>
            <FormSty onSubmit={submit}>
                <Input 
                    type="text"
                    text="description"
                    name="description"
                    placeholder="Description"
                    handleOnChange={handleChange}
                    icon={ <TbFileDescription />}
                    value={product.description ? product.description : ''}
                    />
                <Input 
                    type="text"
                    text="type"
                    name="type"
                    placeholder="Type"
                    handleOnChange={handleChange}
                    icon={ <BiCategoryAlt />}
                    value={product.type ? product.type : ''}
                    />
                <Input 
                    type="text"
                    text="price"
                    name="price"
                    placeholder="Price"
                    handleOnChange={handleChange}
                    icon={ <HiOutlineCurrencyDollar />}
                    value={product.price ? product.price : ''}
                    />
                <Input 
                    type="text"
                    text="expiration"
                    name="expiration"
                    placeholder="YYYY-MM-DD"
                    handleOnChange={handleChange}
                    icon={ <MdDateRange />}
                    value={product.expirationDate ? product.expirationDate : ''}
                />
                
                <Button type="submit" text={btnText}/>
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

export default ProductForm;