import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import RootEdit from './Models/Admin/User/EditUser/RootEdit'
import LoginUser from './Models/Auth/LoginUser/LoginUser'
import RootRecovere from './Models/Auth/Recovery/RootRecovery/RootRecovery'
import DevelepersRoot from './Models/Develepers/DevelepersRoot'
import AddMentor from './Models/Mentor/AddMentor/AddMentor'
import EditMentor from './Models/Mentor/EditMentor/EditMentor'
import AddProduct from './Models/Shop/Product/AddProduct/AddProduct'
import Basket from './Models/Shop/Product/Basket/Basket'
import EditProduct from './Models/Shop/Product/EditProduct/EditProduct'
import ProductCart from './Models/Shop/Product/ProductCart/ProductCart'
import AdminPages from './pages/AdminPages'
import AuthPages from './pages/AuthPages'
import ConferencesPages from './pages/ConferencesPages'
import HomePages from './pages/HomePages'
import MentorPages from './pages/MentorPages'
import ProfilePages from './pages/ProfilePages'
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
      id: 16,
    },

    {
      link: '/addProduct',
      element: <AddProduct />,
      id: 16,
    },
    {
      link: '/editUser/:id',
      element: <RootEdit />,
      id: 18,
    },
    {
      link: '/editProduct/:id',
      element: <EditProduct />,
      id: 19,
    },
    {
      link: '/basket',
      element: <Basket />,
      id: 20,
    },
    {
      link: '/profile',
      element: <ProfilePages />,
      id: 20,
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
