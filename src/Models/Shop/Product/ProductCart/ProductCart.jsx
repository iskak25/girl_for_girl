import React from 'react'
import { delete_icon, edit_pen_icon } from '../../../../assest/img'
import productCartStyle from './ProductCart.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  DeleteProduct,
  GetIdProduct,
} from '../../../../redux/features/product/productCrudSlice'

const ProductCart = ({ setModalActiv, modalActiv }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userRole = useSelector((state) => state.getIdUser.role)

  const { allProducts } = useSelector((state) => state.product)
  function idProduct(id) {
    dispatch(GetIdProduct(id))
    setModalActiv(true)
  }
  function editProduct(id) {
    dispatch(GetIdProduct(id))
    navigate(`/editProduct/${id}`)
  }
  return (
    <>
      <div className={productCartStyle.content}>
        {allProducts?.map((item) => (
          <div
            key={item.id}
            className={
              modalActiv ? productCartStyle.item_isActiv : productCartStyle.item
            }
          >
            <div className={productCartStyle.item_header}>
              <img
                onClick={() => idProduct(item.id)}
                className={productCartStyle.item_img}
                src={item.imageUrl}
                // alt={item.imageUrl}
              />
              <div
                className={
                  modalActiv
                    ? productCartStyle.list_isActiv
                    : productCartStyle.list
                }
              >
                <div className={productCartStyle.text}>
                  <div className={productCartStyle.left}>
                    <h4 className={productCartStyle.text_h4}>{item.title}</h4>
                    <div className={productCartStyle.text_price}>
                      <p className={productCartStyle.text_price__activ}>
                        {item.price}
                      </p>
                    </div>
                  </div>
                  {userRole?.name === 'ADMIN' ? (
                    <div className={productCartStyle.right}>
                      <img
                        onClick={() => editProduct(item.id)}
                        className={productCartStyle.delete_icon}
                        src={edit_pen_icon}
                        alt="delete_icon"
                      />
                      <img
                        onClick={() => dispatch(DeleteProduct(item.id))}
                        className={productCartStyle.edit_icon}
                        src={delete_icon}
                        alt="delete_icon"
                      />
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductCart
