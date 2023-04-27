import React from 'react'
import setingStyle from './SetingProfile.module.scss'

const SetingProfile = () => {
  return (
    <>
      <div>
        {/* <hr className={setingStyle.hr} /> */}

        <div className={setingStyle.container}>
          <div className={setingStyle.hr}></div>
          <div className={setingStyle.content}>
            <div className={setingStyle.item}>
              <p className={setingStyle.item_p}>Изменить данные</p>
              <div className={setingStyle.buttons}>
                <button className={setingStyle.button_cancel}>Отменить</button>
                <button className={setingStyle.button_save}>Сохранить</button>
              </div>
            </div>
            <div className={setingStyle.item_input}>
              <input
                type="text"
                name=""
                placeholder="Имя"
                className={setingStyle.input_small}
              />
              <input
                type="text"
                name=""
                placeholder="Фамилия"
                className={setingStyle.input_small}
              />
            </div>
            <div className={setingStyle.item_input}>
              <input
                type="text"
                name=""
                placeholder="Номер телефона"
                className={setingStyle.input_big}
              />
            </div>
            <div className={setingStyle.item_input}>
              <input
                type="text"
                name=""
                placeholder="Дата рождения"
                className={setingStyle.input_small}
              />
              <input
                type="text"
                name=""
                placeholder="e-mail"
                className={setingStyle.input_small}
              />
            </div>
            <div className={setingStyle.item_input}>
              <input
                type="text"
                name=""
                placeholder="Новый пароль"
                className={setingStyle.input_big}
              />
            </div>
            <div className={setingStyle.item_input}>
              <input
                type="text"
                name=""
                placeholder="Подтверждение пароля"
                className={setingStyle.input_big}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SetingProfile
