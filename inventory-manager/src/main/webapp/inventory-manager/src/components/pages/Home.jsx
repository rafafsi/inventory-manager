import styled from "styled-components";
import inventory from './../../img/inventory-banner.gif'
import LinkButton from "../layout/LinkButton";
import Container from "../layout/Container";
import Brand from "../layout/Brand";

const Home = () => {
    return(
        <Container customClass={'section'}>
            <Img src={inventory}/>
            <Brand place={'home'}/>
            <Txt>Log in now to manage your inventory products!</Txt>
            <LinkButton to="/login" text={"Log in"} />
        </Container>
    )
}

const Txt = styled.h2`
    font-size: 2em;
    color: var(--mainBlack);
    font-weight: 400;
`
const Img = styled.img`
    width: 300px;
`

export default Home;