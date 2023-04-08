import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material'

import navStyle from './Navbar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  logo_blaclk,
  logo_white,
  flag_kyrgyzstan,
  user_icon,
  FlagRuss,
} from '../../assest/img'

const pages = [
  { page: 'Главная', link: '/' },
  { page: 'Менторская программа', link: '/mentor' },
  { page: 'Тренинги', link: '/trainings' },
  { page: 'Магазин', link: '/shop' },
  { page: 'Конференции', link: '/conferences' },
  { page: 'Видеоуроки', link: '/videolessons' },
]

const Navbar = () => {
  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const activing = useSelector((state) => state.activ.stateActiv)

  const dispatch = useDispatch()

  return (
    <>
      <div className={navStyle.rootContainer}>
        <AppBar
          sx={{
            boxShadow: 'none',
            backgroundColor: 'transparent;',
          }}
          position="static"
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                {activing ? (
                  <img src={logo_blaclk} alt="logo_blaclk" />
                ) : (
                  <img src={logo_white} alt="logo_white" />
                )}
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="#000"
                >
                  <MenuIcon />
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
                  {pages.map((obj) => (
                    <MenuItem key={obj.page} onClick={handleCloseNavMenu}>
                      <Link to={obj.link}>
                        <Typography textAlign="center">{obj.page}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <img src={logo_blaclk} alt="logo_blaclk" />
              </Typography>
              <Box
                sx={{
                  justifyContent: 'space-evenly',
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                {pages.map((obj) => (
                  <Link to={obj.link}>
                    <Button
                      className={activing ? navStyle.link_activ : navStyle.link}
                      key={obj.page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: '#000', display: 'block' }}
                    >
                      {obj.page}
                    </Button>
                  </Link>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <FormControl sx={{ m: 1, minWidth: 120, border: 'none' }}>
                  {activing ? (
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <MenuItem value="">
                        <em sx={{ display: 'flex', justifyContent: 'center' }}>
                          <div className={navStyle.language}>
                            RU <img src={FlagRuss} alt="FlagRuss" />
                          </div>
                        </em>
                      </MenuItem>

                      <MenuItem value={20}>
                        <div className={navStyle.language}>
                          KG <img src={flag_kyrgyzstan} alt="flag_kyrgyzstan" />
                        </div>
                      </MenuItem>
                    </Select>
                  ) : (
                    ''
                  )}
                </FormControl>
              </Box>
              <Link to="/admin">
                <Box>
                  <p className={navStyle.user_name}>Садыкова Айканыш</p>
                  <img
                    className={navStyle.user_icon}
                    src={user_icon}
                    alt="user_icon"
                  />
                </Box>
              </Link>

              <Box sx={{ flexGrow: 0 }}>
                <Link to="/loginPage">
                  <button
                    className={
                      activing ? navStyle.button_activ : navStyle.button
                    }
                  >
                    Зарегистрироваться
                  </button>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  )
}

export default Navbar
