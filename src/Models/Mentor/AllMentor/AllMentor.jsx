import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { avatar_mentor, plus_icon } from '../../../assest/img'
import Modal from '../../../components/Modal/ModalMentor/ModalMentor'
import { GetAllMentor } from '../../../redux/features/mentorCrud/mentorSlice'
import CartMentor from '../CartMentor/CartMentor'
import allMentorStyle from './AllMentor.module.scss'

const AllMentor = ({ title }) => {
  const [modalActiv, setModalActiv] = useState(false)
  const allMentor = useSelector((state) => state.mentor.allMentors)
  const userRole = useSelector((state) => state.getIdUser.role)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(GetAllMentor())
  }, [])

  return (
    <>
      <Modal activ={modalActiv} setActiv={setModalActiv} />
      <div className={allMentorStyle.container}>
        <div className={allMentorStyle.content}>
          <h3 className={allMentorStyle.content_h3}>{title}</h3>
          {userRole?.name === 'ADMIN' ? (
            <Link to="/addMentor">
              <h2 className={allMentorStyle.plus_h2}>
                добавить ментора
                <img
                  className={allMentorStyle.plus_img}
                  src={plus_icon}
                  alt="plus_icon"
                />
              </h2>
            </Link>
          ) : (
            <div></div>
          )}

          <div className={allMentorStyle.item}>
            <CartMentor activ={modalActiv} setModalActiv={setModalActiv} />
          </div>
        </div>
      </div>
    </>
  )
}

export default AllMentor
