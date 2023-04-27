import React from 'react'

import AdminSteps from '../../components/AdminSteps/AdminSteps'

import adminstyle from '../../Admin/Admin.module.scss'
import EditUser from './EditUser'
const RootEdit = () => {
  return (
    <>
      <div className={adminstyle.container}>
        <AdminSteps />
        <EditUser />
      </div>
    </>
  )
}

export default RootEdit
