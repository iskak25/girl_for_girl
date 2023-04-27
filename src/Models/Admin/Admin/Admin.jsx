import React from 'react'
import { useSelector } from 'react-redux'
import AdminSteps from '../components/AdminSteps/AdminSteps'
import AllUser from '../User/AllUser/AllUser'
import EditUser from '../User/EditUser/EditUser'
import UserPages from '../User/UserPages/UserPages'
import UserSettings from '../User/UserSettings/UserSettings'
import adminstyle from './Admin.module.scss'
const Admin = () => {
  const pages = [<UserPages />, <UserSettings />, <AllUser />]
  const step = useSelector((state) => state.activ.step)

  return (
    <>
      <div className={adminstyle.container}>
        <AdminSteps />
        {pages[step]}
      </div>
    </>
  )
}

export default Admin
