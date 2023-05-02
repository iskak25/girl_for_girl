import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addOrder,
  getBasket,
  getOrder,
} from '../../../../redux/features/product/basket'
import basketStyle from './Basket.module.scss'
import BasketCart from './BasketCart/BasketCart'
const Basket = () => {
  const {
    allProduct,
    order,
    isLoadingId,
    isError,
    isSuccess,
    message,
  } = useSelector((state) => state.basket)
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  // let a

  useEffect(() => {
    dispatch(getBasket())
  }, [])

  // const dispatch = useDispatch()
  const getOrders = useSelector((state) => state.basket.getOrder)
  useEffect(() => {
    dispatch(getOrder())
  }, [])
  console.log(getOrders)

  return (
    <>
      <div className={basketStyle.container}>
        <div className={basketStyle.content_container}>
          <div className={basketStyle.header}>
            <h2 className={basketStyle.header_basket}>Корзина</h2>
            <hr className={basketStyle.header_line} />
          </div>
          <div className={basketStyle.content}>
            <h3 className={basketStyle.content_h3}>Ваш заказ</h3>
            {allProduct?.map(({ id, product, amount }) => (
              <BasketCart id={id} product={product} amounts={amount} key={id} />
            ))}

            <div className={basketStyle.end}>
              <p className={basketStyle.all_price}>
                К оплате:
                <span className={basketStyle.all_price__span}>7900 сом</span>
              </p>
              <button
                onClick={() => dispatch(addOrder())}
                className={basketStyle.btn_pay}
              >
                Оплатить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Basket
