import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import {
    StyledAppHeader,
    StyledNavigation,
    StyledSearch,
    StyledNavBar,
    StyledSignInBtn
} from '../Style/HeaderStyle'

const Header = props =>{
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <StyledAppHeader>
            <Link to="/" className="logo"><img src={logo} alt="" /></Link>
            <StyledNavigation>
                <StyledSearch className="search">
                    <i className="fas fa-search" onClick={()=>setIsOpen(!isOpen)}></i>
                    <input type="text" className={isOpen? 'open': ''}/>
                </StyledSearch>
                <StyledNavBar>
                    <li><Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/tv">Dinner TV</Link></li>
                    <li><Link to="/school">Cooking School</Link></li>
                    <li><Link to="/about">About</Link></li>
                </StyledNavBar>
                <StyledSignInBtn children={'Sign In'}/>
            </StyledNavigation>
        </StyledAppHeader>
    )
}

export default Header