import { all } from 'axios'
import React from 'react'
import allStyle from './AllUser.module.scss'
import { useDispatch } from 'react-redux'
import { steps } from '../../../../redux/features/components'
import { vector_left } from '../../../../assest/img'

const AllUser = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <div className={allStyle.container}>
        <div className={allStyle.content}>
          <div className={allStyle.pagination}>
            <button className={allStyle.pagination_btn}>1</button>
            <button className={allStyle.pagination_btn}>2</button>
            <button className={allStyle.pagination_btn}>3</button>
            <button className={allStyle.pagination_btn}>
              <img src={vector_left} alt="vector_left" />
            </button>
          </div>
          <div className={allStyle.item}>
            <p className={allStyle.item_name}>Имя</p>
            <p className={allStyle.item_lastName}>Фамилия</p>
            <p className={allStyle.item_email}>Электронная почта</p>
            <p className={allStyle.item_phone}>Телефон</p>
            <p className={allStyle.item_region}>Регион</p>
            <div className={allStyle.item_block}>
              <p className={allStyle.item_block_p}>Действия</p>
            </div>
          </div>
          <div className={allStyle.list}>
            <p className={allStyle.list_name}>Алия</p>
            <p className={allStyle.list_lastName}>Алиева</p>
            <p className={allStyle.list_email}>example@gmail.com</p>
            <p className={allStyle.list_phone}>0709815969</p>
            <p className={allStyle.list_region}> Бишкек</p>
            <div className={allStyle.list_block}>
              <button
                onClick={() => dispatch(steps(3))}
                className={allStyle.list_block_button}
              >
                Изменить
              </button>
              <button className={allStyle.list_block_btn}>Блокировать</button>
            </div>
          </div>
          <div className={allStyle.list}>
            <p className={allStyle.list_name}>Алия</p>
            <p className={allStyle.list_lastName}>Алиева</p>
            <p className={allStyle.list_email}>example@gmail.com</p>
            <p className={allStyle.list_phone}>0709815969</p>
            <p className={allStyle.list_region}> Бишкек</p>
            <div className={allStyle.list_block}>
              <button
                onClick={() => dispatch(steps(3))}
                className={allStyle.list_block_button}
              >
                Изменить
              </button>
              <button className={allStyle.list_block_btn}>Блокировать</button>
            </div>
          </div>{' '}
          <div className={allStyle.list}>
            <p className={allStyle.list_name}>Алия</p>
            <p className={allStyle.list_lastName}>Алиева</p>
            <p className={allStyle.list_email}>example@gmail.com</p>
            <p className={allStyle.list_phone}>0709815969</p>
            <p className={allStyle.list_region}> Бишкек</p>
            <div className={allStyle.list_block}>
              <button
                onClick={() => dispatch(steps(3))}
                className={allStyle.list_block_button}
              >
                Изменить
              </button>
              <button className={allStyle.list_block_btn}>Блокировать</button>
            </div>
          </div>{' '}
          <div className={allStyle.list}>
            <p className={allStyle.list_name}>Алия</p>
            <p className={allStyle.list_lastName}>Алиева</p>
            <p className={allStyle.list_email}>example@gmail.com</p>
            <p className={allStyle.list_phone}>0709815969</p>
            <p className={allStyle.list_region}> Бишкек</p>
            <div className={allStyle.list_block}>
              <button
                onClick={() => dispatch(steps(3))}
                className={allStyle.list_block_button}
              >
                Изменить
              </button>
              <button className={allStyle.list_block_btn}>Блокировать</button>
            </div>
          </div>{' '}
          <div className={allStyle.list}>
            <p className={allStyle.list_name}>Алия</p>
            <p className={allStyle.list_lastName}>Алиева</p>
            <p className={allStyle.list_email}>example@gmail.com</p>
            <p className={allStyle.list_phone}>0709815969</p>
            <p className={allStyle.list_region}> Бишкек</p>
            <div className={allStyle.list_block}>
              <button
                onClick={() => dispatch(steps(3))}
                className={allStyle.list_block_button}
              >
                Изменить
              </button>
              <button className={allStyle.list_block_btn}>Блокировать</button>
            </div>
          </div>{' '}
          <div className={allStyle.list}>
            <p className={allStyle.list_name}>Алия</p>
            <p className={allStyle.list_lastName}>Алиева</p>
            <p className={allStyle.list_email}>example@gmail.com</p>
            <p className={allStyle.list_phone}>0709815969</p>
            <p className={allStyle.list_region}> Бишкек</p>
            <div className={allStyle.list_block}>
              <button
                onClick={() => dispatch(steps(3))}
                className={allStyle.list_block_button}
              >
                Изменить
              </button>
              <button className={allStyle.list_block_btn}>Блокировать</button>
            </div>
          </div>{' '}
          <div className={allStyle.list}>
            <p className={allStyle.list_name}>Алия</p>
            <p className={allStyle.list_lastName}>Алиева</p>
            <p className={allStyle.list_email}>example@gmail.com</p>
            <p className={allStyle.list_phone}>0709815969</p>
            <p className={allStyle.list_region}> Бишкек</p>
            <div className={allStyle.list_block}>
              <button
                onClick={() => dispatch(steps(3))}
                className={allStyle.list_block_button}
              >
                Изменить
              </button>
              <button className={allStyle.list_block_btn}>Блокировать</button>
            </div>
          </div>{' '}
          <div className={allStyle.list}>
            <p className={allStyle.list_name}>Алия</p>
            <p className={allStyle.list_lastName}>Алиева</p>
            <p className={allStyle.list_email}>example@gmail.com</p>
            <p className={allStyle.list_phone}>0709815969</p>
            <p className={allStyle.list_region}> Бишкек</p>
            <div className={allStyle.list_block}>
              <button
                onClick={() => dispatch(steps(3))}
                className={allStyle.list_block_button}
              >
                Изменить
              </button>
              <button className={allStyle.list_block_btn}>Блокировать</button>
            </div>
          </div>{' '}
          <div className={allStyle.list}>
            <p className={allStyle.list_name}>Алия</p>
            <p className={allStyle.list_lastName}>Алиева</p>
            <p className={allStyle.list_email}>example@gmail.com</p>
            <p className={allStyle.list_phone}>0709815969</p>
            <p className={allStyle.list_region}> Бишкек</p>
            <div className={allStyle.list_block}>
              <button
                onClick={() => dispatch(steps(3))}
                className={allStyle.list_block_button}
              >
                Изменить
              </button>
              <button className={allStyle.list_block_btn}>Блокировать</button>
            </div>
          </div>{' '}
          <div className={allStyle.list}>
            <p className={allStyle.list_name}>Алия</p>
            <p className={allStyle.list_lastName}>Алиева</p>
            <p className={allStyle.list_email}>example@gmail.com</p>
            <p className={allStyle.list_phone}>0709815969</p>
            <p className={allStyle.list_region}> Бишкек</p>
            <div className={allStyle.list_block}>
              <button
                onClick={() => dispatch(steps(3))}
                className={allStyle.list_block_button}
              >
                Изменить
              </button>
              <button className={allStyle.list_block_btn}>Блокировать</button>
            </div>
          </div>{' '}
          <div className={allStyle.list}>
            <p className={allStyle.list_name}>Алия</p>
            <p className={allStyle.list_lastName}>Алиева</p>
            <p className={allStyle.list_email}>example@gmail.com</p>
            <p className={allStyle.list_phone}>0709815969</p>
            <p className={allStyle.list_region}> Бишкек</p>
            <div className={allStyle.list_block}>
              <button
                onClick={() => dispatch(steps(3))}
                className={allStyle.list_block_button}
              >
                Изменить
              </button>
              <button className={allStyle.list_block_btn}>Блокировать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllUser
