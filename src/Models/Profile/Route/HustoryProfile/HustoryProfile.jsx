import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrder } from '../../../../redux/features/product/basket'
import hustoryStyle from './HustoryProfile.module.scss'

const HustoryProfile = () => {
  const dispatch = useDispatch()
  const getOrders = useSelector((state) => state.basket.getOrder)
  useEffect(() => {
    dispatch(getOrder())
  }, [])
  console.log(   )

  return (
    <>
      <div className={hustoryStyle.content_item}>
        <img
          className={hustoryStyle.item_img}
          src={getOrders?.image_url}
          alt=""
        />
        <p className={hustoryStyle.item_name}>{getOrders?.title}</p>
        <div className={hustoryStyle.item_activ}></div>
        {/* <p>{getOrders?.size.name}</p> */}
        <div className={hustoryStyle.item_size}>
          <select
            className={hustoryStyle.item_size}
            // onChange={(e) => setSizeId(e.target.value)}
            // value={sizeId}
          >
            {getOrders?.sizes.map((i) => (
              <option
                selected={i?.id}
                // onChange={(e) => setSizeId(e.target.value)}
                value={i?.id}
              >
                {i?.name}
              </option>
            ))}
          </select>
        </div>

        <div className={hustoryStyle.item_conter}>
          <button
            // onClick={() => editAmount(1)}
            className={hustoryStyle.btn_minus}
          >
            -
          </button>
          {/* <button className={hustoryStyle.btn_number}>{amount}</button> */}
          <button
            // onClick={() => editAmount(2)}
            className={hustoryStyle.btn_minus}
          >
            +
          </button>
        </div>
        <p className={hustoryStyle.item_price}>{getOrders?.price}</p>
        <img
          // onClick={() => dispatch(deleteBasket(id))}
          // src={delete_icon}
          alt="delete_icon"
        />
      </div>
    </>
  )
}

export default HustoryProfile
