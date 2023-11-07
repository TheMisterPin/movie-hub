import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { USER, HOME, UPLOAD, } from '../../router/routes/routePaths';

const UserIcon = styled.img.attrs({
    src: "https://img.icons8.com/badges/96/000000/user.png"
})``;

const HomeIcon = styled.img.attrs({
    src: "https://img.icons8.com/hatch/64/home.png"
})``;

const UploadIcon = styled.img.attrs({
    src: "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-upload-interface-kiranshastry-lineal-kiranshastry.png"
})``;

// Styled NavLink using styled-components
const NavLink = styled(RouterNavLink)`
  display: inline-block;
  text-decoration: none;
  color: color: ${({ theme }) => theme.colors.text.white};
 
  background : ${({ theme }) => theme.colors.primary.dark};
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

const NavBar = () => {
    return (
        <nav>
            <NavLink to={USER}>
                <UserIcon />
            </NavLink>
            <NavLink to={HOME}>
                <HomeIcon />
            </NavLink>
            <NavLink to={UPLOAD}>
                <UploadIcon />
            </NavLink>
        </nav>
    );
};

export default NavBar;