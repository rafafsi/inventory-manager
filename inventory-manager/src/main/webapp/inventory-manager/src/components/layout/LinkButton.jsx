import { Link } from "react-router-dom";

import styled from "styled-components";

const LinkButton = ({to, text}) => {
    return(
        <Button to={to}> {text} </Button>
    )
}

const Button = styled(Link)`
    padding: 1em;
    border: 1px solid #222;
    background-color: #e19a5e;
    font-size: 1em;
    width: 100px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    text-decoration: none;
    transition: 0.5s;
    margin-top: 1em;
    text-transform: uppercase;

    &:hover {
        color: #222;
    }
`

export default LinkButton;