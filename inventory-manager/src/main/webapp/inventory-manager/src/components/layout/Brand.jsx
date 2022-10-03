import styled from "styled-components"

const Brand = ({place}) => {
    return(
        <Title className={place}> Inventory<span>Manager </span></Title>
    )
}

const Title = styled.h1`
    color: var(--mainBlack);
    font-weight: bold;
    margin: 16px;
    padding: 10px;
    border-radius: 30px;
    padding-left: 30px;
    padding-right: 30px;


    &.home {
        font-size: 4.5em;
        box-shadow: 0px 6px var(--mainOrange);
    }
    
    &.nav {
        font-size: 2em;
        position: absolute;
        top: 5px;
        margin-left: 10px;
        color: var(--mainOrange);
        
        span {
            color: var(--white)
        }
    }

    & span {
        font-weight: 100;
        color: var(--mainBlack);
        
    }
`

export default Brand;