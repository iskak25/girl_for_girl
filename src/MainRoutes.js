import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import LoginUser from './Models/Auth/LoginUser/LoginUser'
import RootRecovere from './Models/Auth/Recovery/RootRecovery/RootRecovery'
import DevelepersRoot from './Models/Develepers/DevelepersRoot'
import AddMentor from './Models/Mentor/AddMentor/AddMentor'
import EditMentor from './Models/Mentor/EditMentor/EditMentor'
import AddProduct from './Models/Shop/AddProduct/AddProduct'
import AdminPages from './pages/AdminPages'
import AuthPages from './pages/AuthPages'
import ConferencesPages from './pages/ConferencesPages'
import HomePages from './pages/HomePages'
import MentorPages from './pages/MentorPages'
import ShopPages from './pages/ShopPages'
import TrainingsPages from './pages/TrainingsPages'
import VideolessonsPages from './pages/VideolessonsPages'

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: '/',
      element: <HomePages />,
      id: 1,
    },
    {
      link: '/loginPage',
      element: <AuthPages />,
      id: 2,
    },
    {
      link: '/loginUser',
      element: <LoginUser />,
      id: 3,
    },
    {
      link: '/recovery',
      element: <RootRecovere />,
      id: 4,
    },
    {
      link: '/activ',
      element: <RootRecovere />,
      id: 5,
    },
    // {
    //   link: '/',
    //   element: <RootRecovere />,
    //   id: 6,
    // },
    {
      link: '/mentor',
      element: <MentorPages />,
      id: 7,
    },
    {
      link: '/trainings',
      element: <TrainingsPages />,
      id: 8,
    },
    {
      link: '/shop',
      element: <ShopPages />,
      id: 9,
    },
    {
      link: '/conferences',
      element: <ConferencesPages />,
      id: 10,
    },
    {
      link: '/videolessons',
      element: <VideolessonsPages />,
      id: 11,
    },
    {
      link: '/not',
      element: <DevelepersRoot />,
      id: 12,
    },
    {
      link: '/admin',
      element: <AdminPages />,
      id: 13,
    },
    {
      link: '/editMentor',
      element: <EditMentor />,
      id: 14,
    },
    {
      link: '/addMentor',
      element: <AddMentor />,
      id: 15,
    },
    {
      link: '/addProduct',
      element: <AddProduct />,
      id: 15,
    },
  ]
  // console.log('asdfg')
  const PRIVATE_ROUTES = [
    {
      link: '/admin',
      // element: <AdminPage />,
      id: 1,
    },
    {
      link: '/edit/:id',
      // element: <EditProductPage />,
      id: 2,
    },
  ]

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} key={item.id} element={item.element} />
        ))}

        {/* {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
              />
            ))
          : null} */}
      </Routes>
    </>
  )
}

export default MainRoutes
