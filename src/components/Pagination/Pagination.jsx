import React from 'react'
import { left, right } from '../../assest/img'
import paginationStyle from './Pagination.module.scss'

const Pagination = () => {
  return (
    <>
      <div className={paginationStyle.container}>
        <div className={paginationStyle.content}>
          <div className={paginationStyle.item_img}>
            <img className={paginationStyle.img} src={left} alt="left" />
          </div>
          <div className={paginationStyle.item_activ}>
            <p className={paginationStyle.p}>1</p>
          </div>
          <div className={paginationStyle.item}>
            <p className={paginationStyle.p}>2</p>
          </div>
          <div className={paginationStyle.item}>
            <p className={paginationStyle.p}>3</p>
          </div>
          <div className={paginationStyle.item}>
            <p className={paginationStyle.p}>4</p>
          </div>
          <div className={paginationStyle.item}>
            <p className={paginationStyle.p}>....</p>
          </div>
          <div className={paginationStyle.item_img}>
            <img className={paginationStyle.img} src={right} alt="right" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Pagination
