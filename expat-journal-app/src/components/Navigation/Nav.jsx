import React from "react";
import {NavContainer, NavItem} from '../Styles/Styles'


const Nav = () => {

return(
    <NavContainer>

        {/* <div className="home">
            <NavItem exact to={`/`}>Home</NavItem>
        </div> */}

        <div className="sign-up">
            <NavItem exact to={`/`}>Sign Up</NavItem>
        </div>

        <div className="login">
            <NavItem to='login'>Login</NavItem>
        </div>

        <div className="dashboard">
            <NavItem to='dashboard'>Dashboard</NavItem>
        </div>
        
    </NavContainer>
    )
};

export default Nav