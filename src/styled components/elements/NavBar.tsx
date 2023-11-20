import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {  HOME, UPLOAD, } from '../../router/routes/routePaths';
import { useUsers } from '../../context/UserContex';


const UserIcon = styled.img.attrs({
    src: "https://img.icons8.com/badges/45/000000/user.png"
})``;

const HomeIcon = styled.img.attrs({
    src: "https://img.icons8.com/hatch/45/home.png"
})``;

const UploadIcon = styled.img.attrs({
    src: "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/45/external-upload-interface-kiranshastry-lineal-kiranshastry.png"
})``;

const NavLink = styled(RouterNavLink)`
  display: inline-block;
  text-decoration: none;
  color: color: ${({ theme }) => theme.colors.text.white};
 
  background : ${({ theme }) => theme.colors.primary.soft};
  padding: 10px; 

  // Icon default styles
  & > img {
    filter: grayscale(100%);
    transition: all 0.3s;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary.blueAccent};;
 

    
    & > img {
      filter: none; // restore original icon colors
    }
  }
`;

const Nav = styled.nav`
margin:0;
padding: 0 1rem;
position: sticky;
  bottom: 0;
  left: 0;
  z-index: 22;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  background: ${({ theme }) => theme.colors.primary.soft};
  `

const NavBar = () => {
  
  const  {userLogged} = useUsers(); 

  return (
   
    <Nav>
        <NavLink to={`/user/${userLogged?.username}`}>
                <UserIcon />
            </NavLink>
            <NavLink to={HOME}>
                <HomeIcon />
            </NavLink>
            <NavLink to={UPLOAD}>
                <UploadIcon />
            </NavLink>
        </Nav>
    );
};

export default NavBar;