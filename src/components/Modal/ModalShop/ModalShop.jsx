import React from 'react'
import { close, shop1, shop_car, shop_lacaition } from '../../../assest/img'
import modalShopStyle from './ModalShop.module.scss'

const ModalShop = ({ activ, setActiv }) => {
  return (
    <>
      <div
        className={activ ? modalShopStyle.modal_activ : modalShopStyle.modal}
        onClick={() => setActiv(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            activ
              ? modalShopStyle.modal_content_activ
              : modalShopStyle.modal_content
          }
        >
          <div
            onClick={() => setActiv(false)}
            className={modalShopStyle.modal_container__close}
          >
            <img
              className={modalShopStyle.modal_close_icon}
              src={close}
              alt="close"
            />
          </div>
          <div className={modalShopStyle.content}>
            <div className={modalShopStyle.item_img}>
              <img
                className={modalShopStyle.item_img__img}
                src={shop1}
                alt="shop1"
              />
              <h3 className={modalShopStyle.item_img__p}>Толстовка Весна</h3>
            </div>
            <div className={modalShopStyle.item_text}>
              <div className={modalShopStyle.text_heder}>
                <h3 className={modalShopStyle.text_heder_h3}>Цена</h3>
                <h3 className={modalShopStyle.text_heder_h2}>2990 сом</h3>
              </div>
              <p className={modalShopStyle.text_center}>Характеристики</p>
              <div className={modalShopStyle.text_desck}>
                <div className={modalShopStyle.name}>
                  <p className={modalShopStyle.name_p}>Производство:</p>
                  <p className={modalShopStyle.name_p}>Цвет:</p>
                  <p className={modalShopStyle.name_p}>Размер:</p>
                </div>
                <div className={modalShopStyle.price}>
                  <p className={modalShopStyle.price_p}>400 cm</p>
                  <p className={modalShopStyle.price_p}>150 cm</p>
                  <p className={modalShopStyle.price_p}>70 cm </p>
                </div>
              </div>

              <div className={modalShopStyle.border}>
                <img
                  className={modalShopStyle.border_img}
                  src={shop_lacaition}
                  alt=""
                />
                <p className={modalShopStyle.border_p}>Bishkek - 720075</p>
              </div>
              <div className={modalShopStyle.border}>
                <img
                  className={modalShopStyle.border_img}
                  src={shop_car}
                  alt=""
                />
                <p className={modalShopStyle.border_p}>
                  Delivery Between 1 week - 2 week
                </p>
              </div>

              <button className={modalShopStyle.item_btn}>
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalShop
