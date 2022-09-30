import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductForm from "../form/ProductForm";
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton";
import Loading from "../layout/Loading";
import Table from "../layout/Table";
import Title from "../layout/Title";


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

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const toggleTable = () => {
        setShowTable(!showTable)

    }

    const column = [
        { heading: "Description", value: "description" },
        { heading: "Type", value: "type" },
        { heading: "Price", value: "price" },
        { heading: "Expiration date", value: "expirationDate" }
    ]


    return (
        <Container customClass="section column">
            <FormSty>
                <Title text="new products" />
                {!showForm ? 
                    <LinkButton handleClick={toggleForm} text="click to insert" /> : 
                    <LinkButton handleClick={toggleForm} text="x" />}
                {showForm && <ProductForm handleSubmit={createProduct} />}
            </FormSty>


            <FormSty>
                <Title text="your products" />
                {!showTable ? 
                    <LinkButton handleClick={toggleTable} text="click to see" /> : 
                    <LinkButton handleClick={toggleTable} text="x" />}
                {showTable && <Table data={products} column={column} /> }
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