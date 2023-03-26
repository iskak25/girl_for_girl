import React from 'react'
import Pagination from '../../../components/Pagination/Pagination'
import MainShop from '../MainShop/MainShop'
import shopRootStyle from './ShopRoot.module.scss'

const ShopRoot = () => {
  return (
    <>
      <div className={shopRootStyle.container}>
        <MainShop />
        <Pagination />
      </div>
    </>
  )
}

export default ShopRoot
