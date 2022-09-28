import { NavLink } from "react-router-dom";
import logo from '../../img/inventory.png'
import styled from "styled-components";


import { MdOutlineInventory } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { TbLogin } from 'react-icons/tb'
import { TbLogout } from 'react-icons/tb'

const Navbar = ({login}) => {
    
    

    return (
        <Nav>
            <Logo>
                <NavLink to="/">
                    <img src={logo} alt="Logo inventory manager" />
                </NavLink>
            </Logo>
            <List  >
                <Item>
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
                {

                }<Item>
                    <NavLink to="/login">
                        <TbLogin />
                        Login
                    </NavLink>
                </Item>
            </List>
        </Nav>
    )
}

const Nav = styled.nav`
    height: 0px;
    position: relative;
    overflow-y: hidden;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 90px;
    justify-content: space-between;
    background-color: #222;
    transition: 0.3s cubic-bezier(0, 0.72, 0, 1.03);
    box-shadow: 0 10px 0 #e19a5e;
`

const List = styled.ul`
    display: flex;
    padding-right: 30px;
    justify-content: flex-end;
    left: 0;
    width: 100%;
    position: absolute;
    transition: 1s ease-in-out;
    
    
    &:hover {
        transform: translateY(-30px);
    } 
    `

const Item = styled.li`
    list-style: none;
    position: relative;
    padding: 10px 10px 25px 10px;
    margin-left: 1em;
    z-index: -1;
    
    & a {
        position: relative;
        display: flex; 
        width: 100px;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: #fff;
        padding: 15px 5px 5px;
        text-transform: uppercase; 
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        
    }
    
    & a:hover {
        background-color: #e19a5e;
        
    }
    & a.active {
        background-color: #e19a5e;
    }
    
    & a:hover::before,
    & a.active::before {
        content: '';
        position: absolute;
        left: -30px;
        bottom: 0px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #222;
        box-shadow: 15px 15px 0 #e19a5e;
        transition: 1s;
    }
    
    & a:hover::after,
    & a.active::after {
        content: '';
        position: absolute;
        right: -30px;
        bottom: 0px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #222;
        box-shadow: -15px 15px 0 #e19a5e;
        transition: 1s;
    }
    
    
    & a svg { 
        color: #fff;
        position: relative;
        font-size: 1.5em;
        z-index: 1;
    }




`

const Logo = styled.div`
    position: absolute;
    left: 30px;
    bottom: 1px;
    cursor: pointer;



    & img {
        width: 4em;
        }
`



export default Navbar;