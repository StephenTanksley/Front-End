import React from "react";
import { NavContainer, NavItem , BrandTitle} from "../Styles/Styles";

const Nav = () => {
  return (
    <NavContainer>
      {/* <div className="home">
            <NavItem exact to={`/`}>Home</NavItem>
        </div> */}

      {/* <div className="sign-up"> */}

        <BrandTitle>Expat Journal</BrandTitle>
        <NavItem to={`/sign-up`}>SignUp</NavItem>
     

      {/* <div className="login"> */}
        <NavItem to="login">Login</NavItem>
      {/* </div> */}

      {/* <div className="home"> */}
        <NavItem exact to="/">
          Dashboard
        </NavItem>
      {/* </div> */}
    </NavContainer>
  );
};

export default Nav;
