import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function DetailNavbar() {
  return (
    <StyledAppBar position="static" style={{ background: 'white' }}>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIconContainer>
            <StyledLink to={"/"}>
              <ArrowBackIcon style={{ color: 'black' }} />
            </StyledLink>
          </MenuIconContainer>
        </IconButton>
        <TypographyStyled variant="h6" style={{ color: 'black', flex: 1, textAlign: 'center' }}>
          Detail
        </TypographyStyled>
        <MenuIconContainer>
          <IconButton color="inherit">
            <MoreHorizIcon style={{ color: 'black' }} />
          </IconButton>
        </MenuIconContainer>
      </Toolbar>
    </StyledAppBar>
  );
}

export default DetailNavbar;

const StyledAppBar = styled(AppBar)`
    background: #FFF !important;
    border:none  !important;
    box-shadow:none  !important;
    height: fit-content !important;
    @media (max-width: 768px) {
        background: #FAFAFA !important;
        width: 23.4375rem;
        height: 50.75rem;
        margin-top: 1rem;
     
      }
`;
const TypographyStyled = styled.h3`
    color: #323232;
    font-family: DM Sans;
    font-size: 1.2rem;
    font-style: bolder;
    font-weight: 700;
    line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:  0.75rem;
    background-color: #FFF;
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
`;