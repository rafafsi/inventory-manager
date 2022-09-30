import styled from "styled-components";

const Title = ({text}) => {
    return(
            <TitleSty> { text }</TitleSty>
    )
}

const TitleSty = styled.h2`
    font-size: 3em;
    color: var(--mainBlack);
    font-weight: 400;
    text-transform: uppercase;
    border-bottom: 3px solid var(--mainOrange);
`

export default Title;