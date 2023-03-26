import React, { useState } from 'react'
import mainShopStyle from './MainShop.module.scss'
import shop1 from '../../../assest/img/shop1.jpg'
import shop2 from '../../../assest/img/shop2.jpg'
import shop3 from '../../../assest/img/shop3.jpg'
import shop4 from '../../../assest/img/shop4.jpg'
import star from '../../../assest/img/star.svg'
import star_activ from '../../../assest/img/star_activ.svg'
import ModalShop from '../../../components/Modal/ModalShop/ModalShop'
import zIndex from '@mui/material/styles/zIndex'

const MainShop = () => {
  const [modalActiv, setModalActiv] = useState(false)

  return (
    <>
      <ModalShop
        style={{ zIndex: '0' }}
        activ={modalActiv}
        setActiv={setModalActiv}
      />
      <div className={modalActiv ? 'dislay:"none"' : mainShopStyle.container}>
        <div className={mainShopStyle.content}>
          <div
            onClick={() => setModalActiv(true)}
            className={mainShopStyle.item}
          >
            <div className={mainShopStyle.item_header}>
              <div className={mainShopStyle.discount}>
                <p className={mainShopStyle.discount_p}>Скидка</p>
              </div>
              <img className={mainShopStyle.item_img} src={shop1} alt="shop1" />
              <div className={mainShopStyle.list}>
                <div className={mainShopStyle.text}>
                  <h4 className={mainShopStyle.text_h4}>Толстовка Весна</h4>
                  <div className={mainShopStyle.text_star}>
                    <img src={star_activ} alt="star_activ" />
                    <img src={star_activ} alt="star_activ" />
                    <img src={star_activ} alt="star_activ" />
                    <img src={star_activ} alt="star_activ" />
                    <img src={star} alt="star" />
                  </div>
                  <div className={mainShopStyle.text_price}>
                    <p className={mainShopStyle.text_price__activ}>2990 сом</p>
                    <p className={mainShopStyle.text_noPrice}>
                      <s>3500 сом</s>
                    </p>
                    <p className={mainShopStyle.text_price__protsent}>-24% </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setModalActiv(true)}
            className={mainShopStyle.item}
          >
            <div className={mainShopStyle.item_header}>
              <div className={mainShopStyle.discount}>
                <p className={mainShopStyle.discount_p}>Скидка</p>
              </div>
              <img className={mainShopStyle.item_img} src={shop2} alt="shop2" />
              <div className={mainShopStyle.list}>
                <div className={mainShopStyle.text}>
                  <h4 className={mainShopStyle.text_h4}>Куртка Весна</h4>
                  <div className={mainShopStyle.text_star}>
                    <img src={star_activ} alt="star_activ" />
                    <img src={star_activ} alt="star_activ" />
                    <img src={star_activ} alt="star_activ" />
                    <img src={star_activ} alt="star_activ" />
                    <img src={star} alt="star" />
                  </div>
                  <div className={mainShopStyle.text_price}>
                    <p className={mainShopStyle.text_price__activ}>3500 сом</p>
                    <p className={mainShopStyle.text_noPrice}>
                      <s>4000 сом</s>
                    </p>
                    <p className={mainShopStyle.text_price__protsent}>-24% </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setModalActiv(true)}
            className={mainShopStyle.item}
          >
            <div className={mainShopStyle.item_header}>
              <div className={mainShopStyle.discount}>
                <p className={mainShopStyle.discount_p}>Скидка</p>
              </div>
              <img className={mainShopStyle.item_img} src={shop3} alt="shop3" />
              <div className={mainShopStyle.list}>
                <div className={mainShopStyle.text}>
                  <h4 className={mainShopStyle.text_h4}>Комбенизон Лето</h4>
                  <div className={mainShopStyle.text_star}>
                    <img src={star_activ} alt="star_activ" />
                    <img src={star_activ} alt="star_activ" />
                    <img src={star_activ} alt="star_activ" />
                    <img src={star_activ} alt="star_activ" />
                    <img src={star} alt="star" />
                  </div>
                  <div className={mainShopStyle.text_price}>
                    <p className={mainShopStyle.text_price__activ}>2990 сом</p>
                    <p className={mainShopStyle.text_noPrice}>
                      <s></s>
                    </p>
                    <p className={mainShopStyle.text_price__protsent}></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setModalActiv(true)}
            className={mainShopStyle.item}
          >
            <div className={mainShopStyle.item_header}>
              <div className={mainShopStyle.discount}>
                <p className={mainShopStyle.discount_p}>Скидка</p>
              </div>
              <img className={mainShopStyle.item_img} src={shop4} alt="shop4" />
              <div className={mainShopStyle.list}>
                <div className={mainShopStyle.text}>
                  <h4 className={mainShopStyle.text_h4}>Рубашка Весна</h4>
                  <div className={mainShopStyle.text_star}>
                    <img src={star_activ} alt="star_activ" />
                    <img src={star_activ} alt="star_activ" />
                    <img src={star_activ} alt="star_activ" />
                    <img src={star_activ} alt="star_activ" />
                    <img src={star} alt="star" />
                  </div>
                  <div className={mainShopStyle.text_price}>
                    <p className={mainShopStyle.text_price__activ}>2990 сом</p>
                    <p className={mainShopStyle.text_noPrice}>
                      <s></s>
                    </p>
                    <p className={mainShopStyle.text_price__protsent}></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainShop
