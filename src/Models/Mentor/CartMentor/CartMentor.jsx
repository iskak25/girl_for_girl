import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GetIdMentor } from '../../../redux/features/mentorCrud/mentorSlice'
import cartMentorStyle from './CartMentor.module.scss'

const CartMentor = (props) => {
  const allMentor = useSelector((state) => state.mentor.allMentors)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function infoMentor(id) {
    dispatch(GetIdMentor(id))
    props.setModalActiv(true)
  }

  return (
    <>
      {allMentor?.map((item) => (
        <div
          className={
            props.activ ? cartMentorStyle.no_item : cartMentorStyle.item
          }
        >
          <div className={cartMentorStyle.list}>
            <div className={cartMentorStyle.listOne}>
              <p>{item.full_name}</p>
            </div>
            <div className={cartMentorStyle.listTwo}>
              <button
                onClick={() => infoMentor(item.id)}
                className={cartMentorStyle.listTwo_btn}
              >
                Подробнее
              </button>
            </div>
          </div>
          <img
            className={cartMentorStyle.mentor_img}
            src={item.image_url}
            alt="mentor"
          />
        </div>
      ))}
    </>
  )
}

export default CartMentor
