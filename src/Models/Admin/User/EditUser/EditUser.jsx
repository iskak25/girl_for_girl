import React from 'react'
import { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getAUserIdFunction } from '../../../../redux/features/auth/GetUserIdSlice'
import { steps } from '../../../../redux/features/components'
import editStyle from './EditUser.module.scss'

const EditUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.getIdUser,
  )
  const [userData, setUserData] = useState([])
  const userID = useSelector((state) => state.getIdUser.userId)

  useEffect(() => {
    // dispatch(getAUserIdFunction(id))
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <div className={editStyle.container}>
        <div className={editStyle.content}>
          <h3 className={editStyle.h3}>
            {userID.firstName}
            {userID.lastName}
          </h3>
          <div className={editStyle.item}>
            <p className={editStyle.p_deck}>Электронная почта</p>
            <input
              // onChange={(e) => handleInput(e, userID, setUserData)}
              name="email"
              value={userID.email}
              className={editStyle.p}
            />
          </div>
          <div className={editStyle.item}>
            <p className={editStyle.p_deck}>Телефон</p>
            <input
              // onChange={(e) => handleInput(e, userID, setUserData)}
              name="phoneNumber"
              className={editStyle.p}
              value={userID.phoneNumber}
            />
          </div>
          <div className={editStyle.item}>
            {/* <p className={editStyle.p_deck}>Пароль</p> */}
            {/* <p className={editStyle.p_violet}>{userID}</p> */}
          </div>
          <div className={editStyle.item}>
            <p className={editStyle.p_deck}>Имя</p>
            <input
              // onChange={(e) => handleInput(e, userID, setUserData)}
              name="firstName"
              value={userID.firstName}
              className={editStyle.p}
            />
          </div>
          <div className={editStyle.item}>
            <p className={editStyle.p_deck}>Фамилия</p>
            <input
              // onChange={(e) => handleInput(e, userID, setUserData)}
              name="lastName"
              value={userID.lastName}
              className={editStyle.p}
            />
          </div>
          <div className={editStyle.item}>
            <p className={editStyle.p_deck}>Регион</p>
            <input
              name="region"
              // onChange={(e) => handleInput(e, userID, setUserData)}
              value={userID.region.name}
              className={editStyle.p}
            />
          </div>
          <div className={editStyle.item}>
            <button className={editStyle.button_veolet}>
              Обновить профиль
            </button>
            <button
              onClick={() => navigate('/admin')}
              className={editStyle.button_white}
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditUser
