import React, { useState } from 'react'
import mainShopStyle from './MainShop.module.scss'
import ModalShop from '../../../components/Modal/ModalShop/ModalShop'
import { shop1, shop2, shop3, shop4 } from '../../../assest/img'

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
              <img className={mainShopStyle.item_img} src={shop1} alt="shop1" />
              <div className={mainShopStyle.list}>
                <div className={mainShopStyle.text}>
                  <h4 className={mainShopStyle.text_h4}>Толстовка Весна</h4>

                  <div className={mainShopStyle.text_price}>
                    <p className={mainShopStyle.text_price__activ}>2990 сом</p>
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
              <img className={mainShopStyle.item_img} src={shop2} alt="shop2" />
              <div className={mainShopStyle.list}>
                <div className={mainShopStyle.text}>
                  <h4 className={mainShopStyle.text_h4}>Куртка Весна</h4>

                  <div className={mainShopStyle.text_price}>
                    <p className={mainShopStyle.text_price__activ}>3500 сом</p>
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
              <img className={mainShopStyle.item_img} src={shop3} alt="shop3" />
              <div className={mainShopStyle.list}>
                <div className={mainShopStyle.text}>
                  <h4 className={mainShopStyle.text_h4}>Комбенизон Лето</h4>

                  <div className={mainShopStyle.text_price}>
                    <p className={mainShopStyle.text_price__activ}>2990 сом</p>
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
              <img className={mainShopStyle.item_img} src={shop4} alt="shop4" />
              <div className={mainShopStyle.list}>
                <div className={mainShopStyle.text}>
                  <h4 className={mainShopStyle.text_h4}>Рубашка Весна</h4>

                  <div className={mainShopStyle.text_price}>
                    <p className={mainShopStyle.text_price__activ}>2990 сом</p>
                    <p className={mainShopStyle.text_noPrice}>
                      <s></s>
                    </p>
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
