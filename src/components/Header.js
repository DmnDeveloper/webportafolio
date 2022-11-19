import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonIcon } from "./Buttons";
import { VscGithub } from "react-icons/vsc";
import { GrLinkedinOption } from "react-icons/gr";
import "../styles/components/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <NavLink className='link center' to="/">
          Sobre Mi
        </NavLink>
        <NavLink className='link' to="/Habilidades"> 
          Habilidades
        </NavLink>
        <NavLink className='link' to="/Portafolio">
          Portafolio
        </NavLink>
        <NavLink className='link' to="/Contact"> 
          Contacto
        </NavLink>
      </nav>
      
      <div className="social-icon">
        <ButtonIcon 
          icon={<GrLinkedinOption size='35px' color="#981f1f"/>} 
          link={'https://www.linkedin.com/in/jesús-damián-martín-dávalos-578b761b9'} 
        />
        <ButtonIcon 
          icon={<VscGithub size='35px' color="#981f1f" />} 
          link={'https://github.com/DmnDeveloper'}
        />
      </div>
    </div>
  );
};

export default Header;
