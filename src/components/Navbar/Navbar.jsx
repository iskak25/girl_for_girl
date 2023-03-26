import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import logo_blaclk from '../../assest/img/logo_black.png'
import logo_white from '../../assest/img/logo_white.png'
import flag_kyrgyzstan from '../../assest/img/flag_kyrgyzstan.svg'
import FlagRuss from '../../assest/img/FlagRuss.svg'
import navStyle from './Navbar.module.scss'
// import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { NavigateBefore } from '@mui/icons-material'
import { FormHelperText } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { isActiv } from '../../redux/features/components'

const pages = [
  { page: 'Главная', link: '/' },
  { page: 'Менторская программа', link: '/mentor' },
  { page: 'Тренинги', link: '/trainings' },
  { page: 'Магазин', link: '/shop' },
  { page: 'Конференции', link: '/conferences' },
  { page: 'Видеоуроки', link: '/videolessons' },
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

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
                      {/* <MenuItem value={10}>
                      RU <img src={FlagRuss} alt="FlagRuss" />
                    </MenuItem> */}
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
                {/* <select className={navStyle.select} name="flag" id="cars">
                  <option
                    style={{
                      backgroundImage:
                        'url(../../assest/img/flag_kyrgyzstan.svg)',
                    }}
                    value="KG"
                  >
                    <div className={navStyle.select_item}>
                     
                      KG
                    </div>
                  </option>
                  <option value="RU">
                    <div className={navStyle.select_item}>
                      <img src={FlagRuss} alt="FlagRuss" />
                      RU
                    </div>
                  </option>
                </select> */}

                {/* <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip> */}
                {/* <Menu
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
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu> */}
              </Box>

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
