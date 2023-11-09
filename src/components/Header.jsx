import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import UserIcon from '../assets/icons/user.jpg';
import HeaderIcon from '../assets/icons/menu-icon.png';
import BeerImg from '../assets/icons/Beer.png';
import useResponsive from '../hooks/useResponsive'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const responsive = useResponsive(768);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
           {!responsive && <BeerIcon src={BeerImg}/>}
           {!responsive && <Title>BeerMarket</Title>}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIconContainer>
                <MenuIcon src={HeaderIcon}/>
              </MenuIconContainer>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItemLink key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItemLink>
              ))}
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <PageLinks
              >
                Product
              </PageLinks>
              <PageLinks
              >
                 Blog
              </PageLinks>
              <PageLinks
              >
                Contact us
              </PageLinks>
          </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User icon" src={UserIcon}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItemLink key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItemLink>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
export default ResponsiveAppBar;

const StyledAppBar = styled(AppBar)`
    background: #FAFAFA !important;
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
const MenuItemLink = styled(MenuItem)`
    color:#646464;
    font-family: DM Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const MenuIcon = styled.img`

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
const BeerIcon = styled.img`
    height: 40px !important;
    width: 40px !important;
    margin-right: 1rem;
`;
const Title = styled.h3`
color: #0F0D23;
font-family: DM Sans;
font-size: .9rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

const PageLinks = styled.h3`
color: var(--Dark, #323232);
font-family: DM Sans;
font-size: 1rem;
font-style: normal;
margin: 0 1rem;
font-weight: 500;
line-height: 1rem;
`;
