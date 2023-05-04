import * as React from 'react'
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
import AdbIcon from '@mui/icons-material/Adb'

const pages = [
  { page: 'Главная', link: '/' },
  { page: 'Менторская программа', link: '/mentor' },
  { page: 'Тренинги', link: '/trainings' },
  { page: 'Магазин', link: '/shop' },
  { page: 'Конференции', link: '/conferences' },
  { page: 'Видеоуроки', link: '/videolessons' },
]

const Navbar = () => {
  const dispatch = useDispatch()
  const getUser = useSelector((state) => state.getIdUser.userId)
  const userRole = useSelector((state) => state.getIdUser.role)
  const [age, setAge] = React.useState('')
  const [user, setUser] = React.useState(localStorage.getItem('user'))
  const [userAuth, setUserAuth] = React.useState(
    localStorage.getItem('authUser'),
  )
  const userFromLS = JSON.parse(localStorage.getItem('user'))
  const whyAuth = JSON.parse(localStorage.getItem('authUser'))
  useEffect(() => {
    setUser(userFromLS)
    setUserAuth(whyAuth)
  }, [])
  const id = user ? user.userId : null

  // console.log(whyAuth.firstName)

  const calculation = useMemo(() => id && dispatch(getAUserIdFunction(id)), [])

  // const calculation =
  useEffect(() => {
    id && dispatch(getAUserIdFunction(id))
    id && dispatch(getRoleUser(id))

    localStorage.setItem('authUser', JSON.stringify(getUser))
  }, [id])

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const activing = useSelector((state) => state.activ.stateActiv)

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
                    <MenuItem key={obj.link} onClick={handleCloseNavMenu}>
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
                      key={obj.link}
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
              {user ? (
                <>
                  {userRole?.name === 'ADMIN' ? (
                    <Link to="/admin">
                      <Box>
                        <div className={navStyle.admin}>
                          <p className={navStyle.user_name}>Администратор</p>
                          <img
                            className={navStyle.user_icon}
                            src={select_botton}
                            alt="user_icon"
                          />
                        </div>
                      </Box>
                    </Link>
                  ) : (
                    <Link to="/profile">
                      <Box>
                        <div className={navStyle.admin}>
                          <img
                            className={navStyle.user_icon}
                            src={user_icon}
                            alt="user_icon"
                          />

                          <p className={navStyle.user_name}>
                            {userAuth?.firstName}
                            {userAuth?.lastName}
                          </p>
                        </div>
                      </Box>
                    </Link>
                  )}
                </>
              ) : (
                <Box sx={{ flexGrow: 0, display: 'flex' }}>
                  <Link to="/loginPage">
                    <button
                      className={
                        activing ? navStyle.button_activ : navStyle.button
                      }
                    >
                      Регистрация
                    </button>
                  </Link>
                  <Link to="/LoginUser">
                    <button
                      className={
                        activing ? navStyle.button_activ : navStyle.button
                      }
                    >
                      Войти
                    </button>
                  </Link>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  )
}

export default Navbar
