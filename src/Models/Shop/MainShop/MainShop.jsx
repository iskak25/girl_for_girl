import React, { useState, useEffect } from 'react'
import mainShopStyle from './MainShop.module.scss'
import ProductCart from '../Product/ProductCart/ProductCart'
import ModalShop from '../../../components/Modal/ModalShop/ModalShop'
import { basket, plus_icon } from '../../../assest/img'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProducts } from '../../../redux/features/product/productCrudSlice'
import Seleton from '../Product/ProductCart/seleton'

const MainShop = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.product)
  const userRole = useSelector((state) => state.getIdUser.role)
  const [modalActiv, setModalActiv] = useState(false)

  useEffect(() => {
    dispatch(GetAllProducts())
  }, [])

  const skeletons = [...new Array(4)].map((_, index) => <Seleton key={index} />)

  if (isLoading) {
    return skeletons
  }
  console.log(modalActiv)

  return (
    <>
      <ModalShop
        style={{ zIndex: '0' }}
        activ={modalActiv}
        setActiv={setModalActiv}
      />
      <div className={modalActiv ? 'dislay:"none"' : mainShopStyle.container}>
        <div className={mainShopStyle.header}>
          {userRole?.name === 'ADMIN' ? (
            <Link to="/addProduct">
              <h2 className={mainShopStyle.plus_h2}>
                добавить продукт
                <img
                  className={mainShopStyle.plus_img}
                  src={plus_icon}
                  alt="plus_icon"
                />
              </h2>
            </Link>
          ) : (
            <div></div>
          )}

          <Link to="/basket">
            <div className={mainShopStyle.basket}>
              <img className={mainShopStyle.basket_img} src={basket} alt="" />
              <p className={mainShopStyle.basket_p}> Перейти в корзину</p>
            </div>
          </Link>
        </div>
        {isLoading ? skeletons : <ProductCart setModalActiv={setModalActiv} />}
      </div>
    </>
  )
}

export default MainShop
