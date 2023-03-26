import React from 'react'
import formStyle from './Form.module.scss'
// import formIcon from '../../../assest/img/form.svg'
const Form = () => {
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
              <h3 className={formStyle.content_text__h3}>Имя</h3>
              <input
                placeholder="Введите ваше имя"
                type="text"
                className={formStyle.content_text__input}
              />
            </div>
            <div className={formStyle.content_text}>
              <h3 className={formStyle.content_text__h3}>Фамилию</h3>
              <input
                placeholder="Введите вашу фамилию"
                type="text"
                className={formStyle.content_text__input}
              />
            </div>
            <div className={formStyle.content_text}>
              <h3 className={formStyle.content_text__h3}>Email</h3>
              <input
                placeholder="Введите ваш e-mail"
                type="text"
                className={formStyle.content_text__input}
              />
              <span className={formStyle.content_text_span}>
                Максимум 20 знаков
              </span>
            </div>
            <div className={formStyle.content_text}>
              <h3 className={formStyle.content_text__h3}>Номер телефона</h3>
              <input
                placeholder="Введите ваш номер телефона"
                type="text"
                className={formStyle.content_text__input}
              />
              <span className={formStyle.content_text_span}>
                Максимум 20 знаков
              </span>
            </div>
          </div>
          <div className={formStyle.button}>
            <button className={formStyle.btn}>Отправить</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
