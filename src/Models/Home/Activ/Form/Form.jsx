import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addQuestion } from '../../../../redux/features/question/questionSlice'
import formStyle from './Form.module.scss'
const Form = () => {
  const [full_name, setFull_name] = useState('')
  const [question, setQuestion] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const vales = {
    full_name,
    email,
    phone_number,
    question,
  }

  // console.log(vales)

  const QuestionData = JSON.stringify(vales, null, 2)
  return (
    <>
      <div className={formStyle.form_container}>
        <div className={formStyle.container}>
          <div className={formStyle.header}>
            <h3 className={formStyle.header_h3}>
              Оставь свои данные и мы с тобой свяжемся
            </h3>
          </div>
          <div className={formStyle.content}>
            <div className={formStyle.content_text}>
              <h3 className={formStyle.content_text__h3}>ФИО</h3>
              <input
                onChange={(e) => setFull_name(e.target.value)}
                placeholder="Введите ваше имя"
                type="text"
                className={formStyle.content_text__input}
              />
            </div>
            <div className={formStyle.content_text}>
              <h3 className={formStyle.content_text__h3}>Вопрос</h3>
              <input
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Введите вашу фамилию"
                type="text"
                className={formStyle.content_text__input}
              />
            </div>
            <div className={formStyle.content_text}>
              <h3 className={formStyle.content_text__h3}>Email</h3>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите ваш e-mail"
                type="text"
                className={formStyle.content_text__input}
              />
              {/* <span className={formStyle.content_text_span}>
                Максимум 20 знаков
              </span> */}
            </div>
            <div className={formStyle.content_text}>
              <h3 className={formStyle.content_text__h3}>Номер телефона</h3>
              <input
                onChange={(e) => setPhone_number(e.target.value)}
                placeholder="Введите ваш номер телефона"
                type="number"
                className={formStyle.content_text__input}
              />
            </div>
          </div>
          <div className={formStyle.button}>
            <button
              onClick={() => dispatch(addQuestion(QuestionData))}
              className={formStyle.btn}
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
