import { useEffect, useState } from "react";
import styled from "styled-components";

import ProductForm from "../form/ProductForm";

import Button from "../layout/Button";
import Container from "../layout/Container"
import Loading from "../layout/Loading";
import Table from "../layout/Table";
import Title from "../layout/Title";

import { AiFillCloseCircle } from 'react-icons/ai'


const Products = () => {

    const [products, setProducts] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showTable, setShowTable] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8080/products', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((resp) => resp.json())
            .then((data) => {
                setProducts(data)
                setRemoveLoading(true)
            }).catch((error) => console.log(error))
        }, 3000)
    }, [])

    const createProduct = (product) => {
        fetch('http://localhost:8080/products', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product),
        })
        
        .then((resp) => {
            if(resp) {
                resp.json()
            }
        })
        .then((data) => {
            console.log(`${data} creatted successfully`)
        }).catch((error) => console.log(error))
    }

    const editProduct = () => {
        console.log('edit')
    }
    
    const deleteProduct = () => {
        console.log('delete')

    }

    const toggleForm = () => {
        if(showTable) {
            setShowTable(!showTable)
            setShowForm(!showForm)
        } else {
            setShowForm(!showForm)
        }
    }
    
    const toggleTable = () => {
        if(showForm) {
            setShowTable(!showTable)
            setShowForm(!showForm)
        } else {
            setShowTable(!showTable)
        }
    }

    const column = [
        { heading: "Description", value: "description" },
        { heading: "Type", value: "type" },
        { heading: "Price", value: "price" },
        { heading: "Expiration date", value: "expirationDate" },
        { heading: "Actions", value: "actions"}
    ]


    return (
        <Container customClass="section column">
            <FormSty>
                <Title text="new products" />
                {!showForm ? 
                    <Button handleClick={toggleForm} text="click to insert" /> : 
                    <Button handleClick={toggleForm} customClass="close" text={< AiFillCloseCircle />} />}
                {showForm && <ProductForm handleSubmit={createProduct} />}
            </FormSty>


            <FormSty>
                <Title text="your products" />
                {!showTable ? 
                    <Button handleClick={toggleTable} text="click to see" /> : 
                    <Button handleClick={toggleTable} customClass="close" text={< AiFillCloseCircle />}/>}
                {showTable && 
                    <Table 
                        handleEdit={editProduct} 
                        handleDelete={deleteProduct} 
                        data={products} 
                        column={column} 
                    /> }
                {showTable && !removeLoading && <Loading />}
            </FormSty>
        </Container>
    )
}

const FormSty = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: 0.5em;
`

export default Products;