import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delete_icon } from '../../../../../assest/img'
import {
  amountProduct,
  deleteBasket,
} from '../../../../../redux/features/product/basket'
import cartBasketStyle from './BasketCart.module.scss'

const BasketCart = ({ id, product }) => {
  const [amount, setAmount] = useState(0)
  const [productId, setProductId] = useState(0)
  const [sizeId, setSizeId] = useState(1)

  function plusCount() {
    setAmount(amount + 1)
  }

  function minusCount() {
    setAmount(amount - 1)
  }

  //   const { allProduct, isLoadingId, isError, isSuccess, message } = useSelector(
  //     (state) => state.basket,
  //   )
  const dispatch = useDispatch()

  const vales = {
    productId,
    sizeId,
    amount,
  }

  useEffect(() => {
    setProductId(product?.id)
  }, [product])
  const userData = JSON.stringify(vales, null, 2)
  function editAmount(a) {
    if (a == 1) {
      if (amount > 1) {
        minusCount()
      }
    }
    if (a == 2) {
      plusCount()
    }
    dispatch(amountProduct(userData))
  }

  return (
    <>
      {/* {allProduct?.map(({ id, product }) => ( */}
      <div className={cartBasketStyle.content_item}>
        <img
          className={cartBasketStyle.item_img}
          src={product?.image_url}
          alt=""
        />
        <p className={cartBasketStyle.item_name}>{product?.title}</p>
        <div className={cartBasketStyle.item_activ}></div>
        {/* <p>{product?.size.name}</p> */}
        <div className={cartBasketStyle.item_size}>
          <select
            className={cartBasketStyle.item_size}
            onChange={(e) => setSizeId(e.target.value)}
            // value={sizeId}
          >
            {product?.sizes.map((i) => (
              <option
                selected={i?.id}
                onChange={(e) => setSizeId(e.target.value)}
                value={i?.id}
              >
                {i?.name}
              </option>
            ))}
          </select>
        </div>

        <div className={cartBasketStyle.item_conter}>
          <button
            onClick={() => editAmount(1)}
            className={cartBasketStyle.btn_minus}
          >
            -
          </button>
          <button className={cartBasketStyle.btn_number}>{amount}</button>
          <button
            onClick={() => editAmount(2)}
            className={cartBasketStyle.btn_minus}
          >
            +
          </button>
        </div>
        <p className={cartBasketStyle.item_price}>{product?.price}</p>
        <img
          onClick={() => dispatch(deleteBasket(id))}
          src={delete_icon}
          alt="delete_icon"
        />
      </div>
      {/* ))} */}
    </>
  )
}

export default BasketCart
