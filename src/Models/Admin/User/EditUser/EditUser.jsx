import React from 'react'
import { useDispatch } from 'react-redux'
import { steps } from '../../../../redux/features/components'
import editStyle from './EditUser.module.scss'

const EditUser = () => {
  const dispatch = useDispatch()

  return (
    <>
      <div className={editStyle.container}>
        <div className={editStyle.content}>
          <h3 className={editStyle.h3}>Алия Алиева</h3>
          <div className={editStyle.item}>
            <p className={editStyle.p_deck}>Электронная почта</p>
            <p className={editStyle.p}>example@gmail.com</p>
          </div>
          <div className={editStyle.item}>
            <p className={editStyle.p_deck}>Телефон</p>
            <p className={editStyle.p}>0709815969</p>
          </div>
          <div className={editStyle.item}>
            <p className={editStyle.p_deck}>Пароль</p>
            <p className={editStyle.p_violet}>Нажмите, чтобы изменить пароль</p>
          </div>
          <div className={editStyle.item}>
            <p className={editStyle.p_deck}>Имя</p>
            <p className={editStyle.p}>Алия</p>
          </div>
          <div className={editStyle.item}>
            <p className={editStyle.p_deck}>Фамилия</p>
            <p className={editStyle.p}>Алиева</p>
          </div>
          <div className={editStyle.item}>
            <p className={editStyle.p_deck}>Регион</p>
            <p className={editStyle.p}>Бишкек</p>
          </div>
          <div className={editStyle.item}>
            <button className={editStyle.button_veolet}>
              Обновить профиль
            </button>
            <button
              onClick={() => dispatch(steps(2))}
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
