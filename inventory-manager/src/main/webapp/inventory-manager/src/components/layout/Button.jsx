import styled from "styled-components";

const Button = ({customClass, type, text, handleClick}) => {
    return(
        <ButtonSty 
            type={type} 
            onClick={handleClick}
            className={customClass}> 

            {text} 
        </ButtonSty>
    )
}

const ButtonSty = styled.button`
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
    cursor: pointer;

    &:hover {
        color: var(--mainBlack);
        transform: scale(1.05);

    }

    &.action {
        background: none;
        border: none;
        margin: 3px;
        width: fit-content;
        height: auto;
        padding: 0.2em;

        & svg {
            font-size: 1.3em;
            color: var(--mainOrange)
        }

        &:hover {
            transform: none;
        }
    }

    &.close {
        background: none;
        border: none;
        margin-top: 10px;
        padding: 0.4em;
        
        & svg {
            font-size: 1.6em;
            color: var(--mainOrange);
        }

        &:hover {
            transform: none;
        }
    }
    
`

export default Button;