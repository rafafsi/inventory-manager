import { useEffect, useState } from "react";
import styled from "styled-components";

import ProductForm from "../form/ProductForm";

import Button from "../layout/Button";
import Container from "../layout/Container"
import Loading from "../layout/Loading";
import Table from "../layout/Table";
import Title from "../layout/Title";
import Message from "../layout/Message";

import { AiFillCloseCircle } from 'react-icons/ai'


const Products = () => {

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([])

    const [removeLoading, setRemoveLoading] = useState(false)
    const [showForm, setShowForm] = useState(true);
    const [showTable, setShowTable] = useState(false);
    const [showButton, setShowButton] = useState(false)
    const [edit, setEdit] = useState(false)

    const [messageCreate, setMessageCreate] = useState()
    const [messageEdit, setMessageEdit] = useState()
    const [messageDelete, setMessageDelete] = useState()


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
                }).catch((error) => console.log(error))
        }, 3000)
        
    }, [])
    

    const createProduct = (product) => {
        setMessageCreate('')
        fetch('http://localhost:8080/products', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product),
        })
        .then((resp) => {
            resp.json()
        })
        .then((data) => {
            setProducts(data)
            setMessageCreate('Product created successfully!')
        })
        .catch((error) => console.log(error))
    }


    const handleEdit = (id) => {
        setTimeout(() => {
            setShowButton(!showButton)
            setShowForm(showForm)
            setShowTable(!showTable)
            setEdit(!edit)
        }, 300)
        return getProduct(id)
    }


    const editProduct = (product) => {
        setMessageEdit('')
        let id = product.id;
        fetch(`http://localhost:8080/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        }).then((resp) => {
            resp.json()
        }).then((data) => {
            setProducts(data)
            setMessageEdit('Updated product!')
        }).catch((error) => console.log(error))
    }
        
    
    const getProduct = (id) => { 
    fetch(`http://localhost:8080/products/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProduct(data)  
            })
            .catch((error) => console.log(error))
    }

    const deleteProduct = (id) => {
        setMessageDelete('')
        fetch(`http://localhost:8080/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        })
        .then((resp) => {
            resp.json()
        })
        .then(() => {
            setProducts(products.filter((product) => product.id !== id))
            setMessageDelete('Product deleted successfully!')
        })
        .catch((error) => console.log(error))
    }

    const toggleForm = (e) => {
        if(edit) {
            showButton(!showButton)
        }
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
            setRemoveLoading(true)
        } 
        if(!products) {
            setRemoveLoading(false)
        }else {
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
                {!showForm && !showButton ?
                    <Button handleClick={toggleForm} text="click to insert" /> :
                    <Button handleClick={toggleForm} customClass="close" text={< AiFillCloseCircle />} />
                }

                {messageCreate && <Message type="success" msg={messageCreate}/>}
                {messageEdit && <Message type="success" msg={messageEdit}/>}
                {showForm && <ProductForm btnText={"create product"} handleSubmit={createProduct}/>}
                {edit && (
                    <ProductForm btnText={"update product"} productData={product} handleSubmit={editProduct}/>
                )}
            </FormSty>
            <FormSty>
                <Title text="your products" />
                {!showTable ? 
                    <Button handleClick={toggleTable} text="click to see" /> : 
                    <Button handleClick={toggleTable} customClass="close" text={< AiFillCloseCircle />}/>}
                {messageDelete && <Message type="success" msg={messageDelete}/>}
                {!removeLoading && <Loading />}
                {showTable && products && (
                    <Table 
                    handleEdit={handleEdit} 
                    handleDelete={deleteProduct} 
                    data={products} 
                    column={column} />
                )}

                
               
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