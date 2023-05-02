import React from 'react'
import modalStyle from '../ModalMentor/ModalMentor.module.scss'

import {
  whatsapp_mentor,
  facebook_mentor,
  instagram_mentor,
  close_icon,
  delete_icon,
  edit_pen_icon,
} from '../../../assest/img'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMentor } from '../../../redux/features/mentorCrud/mentorSlice'

const ModalMentor = ({ activ, setActiv }) => {
  const dispatch = useDispatch()
  const idMentor = useSelector((state) => state.mentor.getMentor)
  const userRole = useSelector((state) => state.getIdUser.role)
  function handleDelete(id) {
    dispatch(deleteMentor(id))
    setActiv(false)
  }
  return (
    <>
      <div
        className={activ ? modalStyle.modal_activ : modalStyle.modal}
        onClick={() => setActiv(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            activ ? modalStyle.modal_content_activ : modalStyle.modal_content
          }
        >
          <div className={modalStyle.item_close}>
            <img
              className={modalStyle.close_icon}
              onClick={() => setActiv(false)}
              src={close_icon}
              alt="close_icon"
            />
          </div>
          <div className={modalStyle.item}>
            <div className={modalStyle.item_list}>
              <img
                className={modalStyle.mentor_img}
                src={idMentor?.image_url}
                alt=""
              />
              {userRole?.name === 'ADMIN' ? (
                <div className={modalStyle.mentor_admin}>
                  <img
                    className={modalStyle.mentor_admin_icon}
                    src={edit_pen_icon}
                    alt="edit_icon"
                  />
                  <img
                    onClick={() => handleDelete(idMentor?.id)}
                    className={modalStyle.mentor_admin_icon}
                    src={delete_icon}
                    alt="edit_icon"
                  />
                </div>
              ) : (
                ''
              )}
            </div>
            <div className={modalStyle.item_list}>
              <h3 className={modalStyle.mentor_name}>{idMentor?.full_name}</h3>
              <p className={modalStyle.mentor_deck}>{idMentor?.full_info}</p>
            </div>
            <div className={modalStyle.item_list}>
              <a href={idMentor?.facebook}>
                <img
                  className={modalStyle.mentor_icon}
                  src={facebook_mentor}
                  alt=""
                />
              </a>

              <a href={idMentor?.instagram}>
                <img
                  className={modalStyle.mentor_icon}
                  src={instagram_mentor}
                  alt=""
                />
              </a>
              <a href={idMentor?.whatsapp}>
                <img
                  className={modalStyle.mentor_icon}
                  src={whatsapp_mentor}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalMentor
