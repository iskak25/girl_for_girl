import React from 'react'
import contentStyle from './Content.module.scss'
import mentor from '../../../../assest/img/mentor.png'
import shop from '../../../../assest/img/shop.png'
import trenink from '../../../..//assest/img/trenink.png'
import YouTube from '../../../../assest/img/YouTube.png'

const Content = () => {
  return (
    <>
      <div className={contentStyle.content_container}>
        <h2 className={contentStyle.h2}>Что мы предлагаем</h2>
        <div className={contentStyle.content}>
          <div style={{ background: '#D0F4DE' }} className={contentStyle.item}>
            <div className={contentStyle.item_list}>
              <div className={contentStyle.item_text}>
                <h3 className={contentStyle.item_h3}>МЕНТОРСКАЯ ПРОГРАММА</h3>
                <p className={contentStyle.item_p}>
                  получи ответы на свои вопросы и стань участником крутого
                  сообщества
                </p>
              </div>
              <img
                id={contentStyle.img}
                className={contentStyle.item_img}
                src={mentor}
                alt="mentor"
              />
            </div>
            <button className={contentStyle.item_button}>подробнее</button>
          </div>

          <div style={{ background: '#FFC8DD' }} className={contentStyle.item}>
            <div className={contentStyle.item_list}>
              <div className={contentStyle.item_text}>
                <h3 className={contentStyle.item_h3}>ВИДЕОУРОКИ</h3>
                <p className={contentStyle.item_p}>
                  развивайся и достигай успеха
                </p>
              </div>
              <img
                className={contentStyle.item_img}
                src={YouTube}
                alt="YouTube"
              />
            </div>
            <button className={contentStyle.item_button}>подробнее</button>
          </div>
          <div style={{ background: '#FFC8DD' }} className={contentStyle.item}>
            <div className={contentStyle.item_list}>
              <div className={contentStyle.item_text}>
                <h3 className={contentStyle.item_h3}>ТРЕНИНГИ</h3>
                <p className={contentStyle.item_p}>
                  обменивайся опытом в нашем сообществе
                </p>
              </div>
              <img
                className={contentStyle.item_img}
                src={trenink}
                alt="trenink"
              />
            </div>
            <button className={contentStyle.item_button}>подробнее</button>
          </div>
          <div style={{ background: '#D0F4DE' }} className={contentStyle.item}>
            <div className={contentStyle.item_list}>
              <div className={contentStyle.item_text}>
                <h3 className={contentStyle.item_h3}>ОНЛАЙН-МАГАЗИН</h3>
                <p className={contentStyle.item_p}>
                  Откройте для себя удобство онлайн шопинга в нашем магазине
                </p>
              </div>
              <img className={contentStyle.item_img} src={shop} alt="shop" />
            </div>
            <button className={contentStyle.item_button}>подробнее</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
