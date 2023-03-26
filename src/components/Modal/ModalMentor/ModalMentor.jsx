import React from 'react'
import modalStyle from '../ModalMentor/ModalMentor.module.scss'
import mentor_img from '../../../assest/img/mentor_img.jpg'
import whatsapp_mentor from '../../../assest/img/whatsapp_mentor.svg'
import facebook_mentor from '../../../assest/img/facebook_mentor.svg'
import instagram_mentor from '../../../assest/img/instagram_mentor.svg'
import close_icon from '../../../assest/img/close_icon.svg'
const ModalMentor = ({ activ, setActiv }) => {
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
