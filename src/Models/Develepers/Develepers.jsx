import React from 'react'
import devStyle from './Develepers.module.scss'
import devsWumen from '../../assest/img/devsWumen.png'
const Develepers = () => {
  return (
    <>
      <div className={devStyle.container}>
        <img className={devStyle.devsImg} src={devsWumen} alt="devsWumen" />
        <h3 className={devStyle.devsH3}>
          Эта страница в стаде разработки <br /> ⏱️ <br />
          Осталось чуть-чуть
        </h3>
      </div>
    </>
  )
}

export default Develepers
