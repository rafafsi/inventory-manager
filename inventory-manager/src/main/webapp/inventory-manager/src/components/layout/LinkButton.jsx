import { Link } from "react-router-dom";

import styled from "styled-components";

const LinkButton = ({to, text, handleClick}) => {
    return(
        <Button to={to} onClick={handleClick}> {text} </Button>
    )
}

const Button = styled(Link)`
    padding: 0.5em;
    box-shadow: 0px 32x var(--mainBlack);
    background-color: var(--mainOrange);
    font-size: 1em;
    font-weight: 400;
    width: auto;
    text-align: center;
    border-radius: 10px;
    color: var(--mainBlack);
    text-decoration: none;
    transition: 0.5s;
    margin-top: 0.5em;
    text-transform: uppercase;

    &:hover {
        color: var(--mainBlack);
        transform: scale(1.05);
        font-weight: 600;

    }
`

export default LinkButton;