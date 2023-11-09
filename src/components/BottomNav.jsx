import React from 'react';
import styled from 'styled-components';
import HomeIcon from '../assets/icons/home.png';
import ListIcon from '../assets/icons/check_out.png';
import ShoppingCartIcon from '../assets/icons/bag.png';
import SettingsIcon from '../assets/icons/settings.png';


function BottomNavbar() {
  return (
    <BottomNavbarContainer>
      <BottomNavbarItem>
        <img src={HomeIcon} alt="Home" width={50} height={48} />
      </BottomNavbarItem>
      <BottomNavbarItem>
        <img src={ListIcon} alt="List" width={24} height={24} />
      </BottomNavbarItem>
      <BottomNavbarItem>
        <img src={ShoppingCartIcon} alt="Shopping Cart" width={24} height={24} />
      </BottomNavbarItem>
      <BottomNavbarItem>
        <img src={SettingsIcon} alt="Settings" width={24} height={24} />
      </BottomNavbarItem>
    </BottomNavbarContainer>
  );
}

export default BottomNavbar;
const BottomNavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #FFF;
  color: white;
  height: 60px;
`;

const BottomNavbarItem = styled.div`
  text-align: center;
  flex: 1;
  padding: 10px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;
