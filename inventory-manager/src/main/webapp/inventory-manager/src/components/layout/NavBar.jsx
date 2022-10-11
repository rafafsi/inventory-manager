import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { MdOutlineInventory } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { TbLogin } from 'react-icons/tb'
import { CgMenuRound } from 'react-icons/cg'
import Brand from "./Brand";


const Navbar = () => {

    return (
        <Nav >
            <Brand place={'nav'} />
            <List>
                <Item >
                    <NavLink to="/" end>
                        <AiOutlineHome />
                        Home
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to="/products">
                        <MdOutlineInventory />
                        Products
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to="/login">
                        <TbLogin />
                        Login
                    </NavLink>
                </Item>

                <button className="nav-burguer">
                    <CgMenuRound />
                </button>
            </List>
        </Nav>
    )
}

const Nav = styled.nav`
    height: 100px;
    position: relative;
    overflow-y: hidden;
    width: 100vw;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 90px;
    justify-content: space-between;
    background-color: var(--mainBlack);
    transition: 0.3s cubic-bezier(0, 0.72, 0, 1.03);
    box-shadow: 0 10px 0 var(--mainOrange);   
`

const List = styled.ul`
    display: flex;
    justify-content: center;
    padding-right: 30px;
    left: 0;
    z-index: -1;
    width: 100vw;
    position: relative;
    transition: 1s ease-in-out;
    justify-content: flex-end;
    
    
    & .nav-burguer {
        opacity: 0;
        visibility: hidden;
        background: transparent;
        border: none;
        cursor: pointer;
        transition: 1s ease-in-out;
        top: 40px;
        
        & svg {
            color: var(--mainOrange);
            position: relative;
            font-size: 2.5em;
            z-index: 1;
        }
    }

    @media screen and (max-width: 1024px) {  
        .nav-burguer {
            visibility: visible;
            opacity: 1;
            position: fixed;
        } 
    }
    `

const Item = styled.li`
    list-style: none;  
    margin-left: 2em;
    z-index: 1;
    opacity: 1;
    visibility: visible;
    
    * {
        position: absolute;
        transition: 1s ease-in-out;
    }

    @media screen and (max-width: 1024px) {
        & {
            visibility: hidden;
            opacity: 0;
            transition: 1s ease-in-out;
        }
    }

    &:hover {
       transform: translateY(-30px);
       transition: 1s cubic-bezier(0, 0.77, 1, 1);
    } 

    & a {
        position: relative;
        display: flex; 
        width: 100px;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: var(--white);
        padding: 15px 5px 5px;
        text-transform: uppercase; 
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        font-size: 1em;
        transition: 0.2s ease-in-out;
        
    }
    
    & a:hover {
        background-color: var(--mainOrange);
        transition: 0.2s ease-in-out;
        
    }
    & a.active {
        background-color: var(--mainOrange);
        transition: 0.2s ease-in-out;
    }
    
    & a:hover::before,
    & a.active::before {
        transition: 0.2s ease-in-out;
        content: '';
        position: absolute;
        left: -30px;
        bottom: 0px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: var(--mainBlack);
        box-shadow: 15px 15px 0 var(--mainOrange);
        transition: 1s;
    }
    
    & a:hover::after,
    & a.active::after {
        transition: 0.2s ease-in-out;
        content: '';
        position: absolute;
        right: -30px;
        bottom: 0px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: var(--mainBlack);
        box-shadow: -15px 15px 0 var(--mainOrange);
        transition: 1s;
    }
   
    & a svg { 
        color: var(--white);
        position: relative;
        font-size: 1.5em;
        z-index: 1;
    }
`

export default Navbar;