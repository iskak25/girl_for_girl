import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React, { useState } from 'react'
import { close } from '../../../assest/img'
import modalShopStyle from './ModalShop.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import SeletonModalShop from './SeletonModalShop'
import { addBasket } from '../../../redux/features/product/basket'

const ModalShop = ({ activ, setActiv }) => {
  let userData = { productId: 0, sizeId: 1, amount: 0 }
  const { idProduct, isLoadingId } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  userData.productId = idProduct?.id
  if (isLoadingId) {
    return (
      <h2>
        <SeletonModalShop />
      </h2>
    )
  }

  return (
    <>
      <div
        className={activ ? modalShopStyle.modal_activ : modalShopStyle.modal}
        onClick={() => setActiv(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            activ
              ? modalShopStyle.modal_content_activ
              : modalShopStyle.modal_content
          }
        >
          <div
            onClick={() => setActiv(false)}
            className={modalShopStyle.modal_container__close}
          >
            <img
              className={modalShopStyle.modal_close_icon}
              src={close}
              alt="close"
            />
          </div>
          <div className={modalShopStyle.content}>
            <div className={modalShopStyle.item_img}>
              <img
                className={modalShopStyle.item_img__img}
                src={idProduct?.imageUrl}
                alt="shop1"
              />
            </div>
            <div className={modalShopStyle.item_text}>
              <div className={modalShopStyle.text_heder}>
                <p className={modalShopStyle.text_name}>{idProduct?.title}</p>
                <p className={modalShopStyle.text_price}>
                  {idProduct?.price} сом
                </p>
                <select
                  className={modalShopStyle.text_size}
                  name="cars"
                  id="cars"
                >
                  {idProduct?.sizes.map((item) => (
                    <option
                      value={item.id}
                    
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => dispatch(addBasket(userData))}
                  className={modalShopStyle.item_btn}
                >
                  Добавить в корзину
                </button>
                <div className={modalShopStyle.deck}>
                  <p className={modalShopStyle.text_deck_header}>Подробности</p>
                  <hr className={modalShopStyle.text_line} />

                  <Accordion
                    sx={{
                      width: '530px',
                      background: 'none',
                      boxShadow: 'none',
                      margin: '0',
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        padding: '0',
                      }}
                    >
                      <Typography>
                        <p className={modalShopStyle.text_deck_header}>
                          Состав и уход
                        </p>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: '0' }}>
                      <Typography>
                        <p className={modalShopStyle.text_inTheDeck}>
                          {idProduct?.description}
                        </p>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <hr className={modalShopStyle.text_line} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </>
  )
}

export default ModalShop
