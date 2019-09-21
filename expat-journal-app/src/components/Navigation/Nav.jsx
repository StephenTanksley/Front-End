import React from "react";
import {NavContainer, NavItem} from './Styles/Styles'


const Nav = () => {

return(
    <NavContainer>
        <div className="home">
            <NavItem exact to={`/`}>Home</NavItem>
        </div>
        <div className="sign-up">
            <NavItem to='episode-list'>Episodes</NavItem>
        </div>
        <div className="login">
            <NavItem to='character-list'>Characters</NavItem>
        </div>
        <div className="portal right">
            <NavItem to='locations-list'>Locations</NavItem>
        </div>

    </NavContainer>

    )
};

export default Nav