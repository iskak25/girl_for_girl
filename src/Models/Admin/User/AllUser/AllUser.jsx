import React from 'react'
import allStyle from './AllUser.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { steps } from '../../../../redux/features/components'
import { vector_left } from '../../../../assest/img'
import { getAllUserFunction } from '../../../../redux/features/auth/GetUsersSlice'
import { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAUserIdFunction } from '../../../../redux/features/auth/GetUserIdSlice'

const AllUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.getUsers,
  )

  const [usersData, setUsersData] = useState([])
  const users = useSelector((state) => state.getUsers.allUsers)

  function editUser(id) {
    dispatch(getAUserIdFunction(id))
    navigate(`/editUser/${id}`)  
  }

  useEffect(() => {
    dispatch(getAllUserFunction())
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <button onClick={() => dispatch(getAllUserFunction())}></button>

      <div className={allStyle.container}>
        <div className={allStyle.content}>
          <div className={allStyle.pagination}>
            <button className={allStyle.pagination_btn}>1</button>
            <button className={allStyle.pagination_btn}>2</button>
            <button className={allStyle.pagination_btn}>3</button>
            <button className={allStyle.pagination_btn}>
              <img src={vector_left} alt="vector_left" />
            </button>
          </div>
          <div className={allStyle.item}>
            <p className={allStyle.item_name}>Имя</p>
            <p className={allStyle.item_lastName}>Фамилия</p>
            <p className={allStyle.item_email}>Электронная почта</p>
            <p className={allStyle.item_phone}>Телефон</p>
            <p className={allStyle.item_region}>Регион</p>
            <div className={allStyle.item_block}>
              <p className={allStyle.item_block_p}>Действия</p>
            </div>
          </div>
          {users?.map((user) => (
            <div key={user.id} className={allStyle.list}>
              <p className={allStyle.list_name}>{user.firstName}</p>
              <p className={allStyle.list_lastName}>{user.lastName}</p>
              <p className={allStyle.list_email}>{user.email}</p>
              <p className={allStyle.list_phone}>{user.phoneNumber}</p>
              <p className={allStyle.list_region}>{user.region.name}</p>
              <div className={allStyle.list_block}>
                <button
                  onClick={() => editUser(user.id)}
                  className={allStyle.list_block_button}
                >
                  Изменить
                </button>
                <button className={allStyle.list_block_btn}>Блокировать</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllUser
