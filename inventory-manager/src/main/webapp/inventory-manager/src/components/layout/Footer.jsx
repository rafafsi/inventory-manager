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
    background-color: var(--mainBlack);
    color: var(--mainOrange);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`

const SocialList = styled.ul`
    display: flex;
    list-style: none;
    padding-top: 2em;
`

const Items = styled.li`
    padding: 5px;

    & svg {
        font-size: 2em;
        cursor: pointer;
        transition: 0.5s;
    }

    & svg:hover {
        color: var(--mainOrange);
    }
`

const CopyRight = styled.p`
    font-size: 1.5em;

    & span { 
        font-weight: bold;
        color: var(--mainOrange);
    }
`

export default Footer;