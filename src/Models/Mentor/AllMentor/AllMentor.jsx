import React from 'react'
import { useState } from 'react'
import Modal from '../../../components/Modal/ModalMentor/ModalMentor'
import allMentorStyle from './AllMentor.module.scss'

const AllMentor = ({ title }) => {
  const [modalActiv, setModalActiv] = useState(false)
  console.log(title)
  return (
    <>
      <Modal activ={modalActiv} setActiv={setModalActiv} />
      <div className={allMentorStyle.container}>
        <div className={allMentorStyle.content}>
          <h3 className={allMentorStyle.content_h3}>{title}</h3>
          <div className={allMentorStyle.item}>
            <div className={allMentorStyle.list}>
              <div className={allMentorStyle.listOne}>
                <p>Александр Васильев</p>
              </div>
              <div className={allMentorStyle.listTwo}>
                <button
                  onClick={() => setModalActiv(true)}
                  className={allMentorStyle.listTwo_btn}
                >
                  Подробнее
                </button>
              </div>
            </div>
            <div className={allMentorStyle.list}>
              <div className={allMentorStyle.listOne}>
                <p>Александр Васильев</p>
              </div>
              <div className={allMentorStyle.listTwo}>
                <button
                  onClick={() => setModalActiv(true)}
                  className={allMentorStyle.listTwo_btn}
                >
                  Подробнее
                </button>
              </div>
            </div>
            <div className={allMentorStyle.list}>
              <div className={allMentorStyle.listOne}>
                <p>Александр Васильев</p>
              </div>
              <div className={allMentorStyle.listTwo}>
                <button
                  onClick={() => setModalActiv(true)}
                  className={allMentorStyle.listTwo_btn}
                >
                  Подробнее
                </button>
              </div>
            </div>
            <div className={allMentorStyle.list}>
              <div className={allMentorStyle.listOne}>
                <p>Александр Васильев</p>
              </div>
              <div className={allMentorStyle.listTwo}>
                <button
                  onClick={() => setModalActiv(true)}
                  className={allMentorStyle.listTwo_btn}
                >
                  Подробнее
                </button>
              </div>
            </div>
            <div className={allMentorStyle.list}>
              <div className={allMentorStyle.listOne}>
                <p>Александр Васильев</p>
              </div>
              <div className={allMentorStyle.listTwo}>
                <button
                  onClick={() => setModalActiv(true)}
                  className={allMentorStyle.listTwo_btn}
                >
                  Подробнее
                </button>
              </div>
            </div>
            <div className={allMentorStyle.list}>
              <div className={allMentorStyle.listOne}>
                <p>Александр Васильев</p>
              </div>
              <div className={allMentorStyle.listTwo}>
                <button
                  onClick={() => setModalActiv(true)}
                  className={allMentorStyle.listTwo_btn}
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllMentor
