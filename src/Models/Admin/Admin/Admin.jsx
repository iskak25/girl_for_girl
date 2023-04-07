import React from 'react'
import { useSelector } from 'react-redux'
import AdminSteps from '../components/AdminSteps/AdminSteps'
import AllUser from '../User/AllUser/AllUser'
import EditUser from '../User/EditUser/EditUser'
import UserPages from '../User/UserPages/UserPages'
import UserSettings from '../User/UserSettings/UserSettings'
import adminstyle from './Admin.module.scss'
const Admin = () => {
  const pages = [<UserPages />, <UserSettings />, <AllUser />, <EditUser />]
  const step = useSelector((state) => state.activ.step)
  function body() {
    if (step === 0) {
      return pages[0]
    } else if (step === 1) {
      return pages[1]
    } else if (step === 2) {
      return pages[2]
    } else if (step === 3) {
      return pages[3]
    }
  }

  return (
    <>
      <div className={adminstyle.container}>
        <AdminSteps />
        {body()}
      </div>
    </>
  )
}

export default Admin
