import React from 'react'
import modalStyle from '../ModalMentor/ModalMentor.module.scss'

import { useNavigate } from 'react-router-dom'
import {
  mentor_img,
  whatsapp_mentor,
  facebook_mentor,
  instagram_mentor,
  close_icon,
  edit_icon,
} from '../../../assest/img'

const ModalMentor = ({ activ, setActiv }) => {
  const navigate = useNavigate()

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
              <img className={modalStyle.mentor_img} src={mentor_img} alt="" />
              <div className={modalStyle.mentor_admin}>
                <img
                  onClick={() => navigate(`/editMentor`)}
                  className={modalStyle.mentor_admin_icon}
                  src={edit_icon}
                  alt="edit_icon"
                />
                {/* <img
                  className={modalStyle.mentor_img_admin_icon}
                  src={edit_icon}
                  alt="edit_icon"
                /> */}
              </div>
            </div>
            <div className={modalStyle.item_list}>
              <h3 className={modalStyle.mentor_name}>Жылдыз Капарова</h3>
              <p className={modalStyle.mentor_deck}>
                Выпускница программы Executive MBA Московской бизнес-школы
                СКОЛКОВО.Создатель бизнес - сообщества выпускников Skolkovo в
                Казахстане. В настоящий момент проходит обучение в Германии на
                Executive Coaching. Аселя любит раскрывать потенциал и
                мотивировать людей для достижения поставленных целей.Мама двоих
                дочерей.
              </p>
            </div>
            <div className={modalStyle.item_list}>
              <img
                className={modalStyle.mentor_icon}
                src={facebook_mentor}
                alt=""
              />
              <img
                className={modalStyle.mentor_icon}
                src={instagram_mentor}
                alt=""
              />
              <img
                className={modalStyle.mentor_icon}
                src={whatsapp_mentor}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalMentor
