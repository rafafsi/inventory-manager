import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const Footer = () => {
    return(
        <Foot>
            <SocialList>
                <Items><FaGithub /></Items>
                <Items><FaInstagram /></Items>
                <Items><FaLinkedin /></Items>
            </SocialList>
            <CopyRight><span>Inventory</span> &copy; 2022</CopyRight>
        </Foot>
    )
}

const Foot = styled.footer`
    height: 100px;
    width: 100%;
    background-color: #222;
    color: #e19a5e;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`

const SocialList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
`

const Items = styled.li`
    padding: 0.2em;

    & svg {
        font-size: 1em;
        cursor: pointer;
        transition: 0.5s;
    }

    & svg:hover {
        color: #e19a5e;
    }
`

const CopyRight = styled.p`
    font-size: 1em;

    & span { 
        font-weight: bold;
        color: #e19a5e;
    }
`

export default Footer;