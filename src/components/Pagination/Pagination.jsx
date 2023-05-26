import React from 'react'
import { left, right } from '../../assest/img'
import paginationStyle from './Pagination.module.scss'

const Pagination = () => {
  return (
    <>
      <div className={paginationStyle.container}>
        <div className={paginationStyle.content}>
          <div className={paginationStyle.item_activ}>
            <p className={paginationStyle.p}>1</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pagination
