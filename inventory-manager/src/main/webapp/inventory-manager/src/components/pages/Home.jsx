import styled from "styled-components";
import LinkButton from "../layout/LinkButton";
import Container from "../layout/Container";

const Home = () => {
    return(
        <Container customClass={'section'}>
            <Title>Inventory<span>Manager</span></Title>
            <Txt>Log in now to manage your inventory products!</Txt>
            <LinkButton to="/login" text={"Log in"} />
        </Container>
    )
}

const Title = styled.h1`
    font-size: 5em;
    color: #e19a5e;
    font-weight: bold;
    
    & span {
        font-weight: 100;
        color: #000;
        text-shadow: 2px 2px #000;
    }
`

const Txt = styled.h2`
    font-size: 2em;
`


export default Home;