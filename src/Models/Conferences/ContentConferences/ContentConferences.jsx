import React from 'react'
import { avatar, Avatar, coffee, time } from '../../../assest/img'
import ConferencesContentStyle from './ContentConferences.module.scss'
const ContentConferences = () => {
  return (
    <>
      <div className={ConferencesContentStyle.container}>
        <div className={ConferencesContentStyle.content}>
          <div className={ConferencesContentStyle.header_text}>
            <h3 className={ConferencesContentStyle.header_text__h3}>
              Программа конференции
            </h3>
            <p className={ConferencesContentStyle.header_text__p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada tristique justo quis ultrices. Morbi gravida dignissim
              lectus, et semper nulla varius a
            </p>
          </div>
          <p className={ConferencesContentStyle.data}>12-мая 2023</p>
          <div className={ConferencesContentStyle.item}>
            <img
              className={ConferencesContentStyle.avatar}
              src={avatar}
              alt=""
            />
            <div className={ConferencesContentStyle.item_list}>
              <div className={ConferencesContentStyle.item_time}>
                <img
                  className={ConferencesContentStyle.item_time_img}
                  src={time}
                  alt="time"
                />
                <p className={ConferencesContentStyle.item_time_p}>
                  10:00 - 12:00
                </p>
              </div>
              <p className={ConferencesContentStyle.item_subject}>
                ПАНЕЛЬНАЯ ДИСКУССИЯ. ЭКОНОМИКА
              </p>
              <p className={ConferencesContentStyle.item_name}>
                Алина Жаныбекова
              </p>
              <p className={ConferencesContentStyle.item_desk}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada tristique justo quis ultrices. Morbi gravida dignissim
                lectus
              </p>
            </div>
          </div>
          <div className={ConferencesContentStyle.item}>
            <img
              className={ConferencesContentStyle.avatar}
              src={avatar}
              alt=""
            />
            <div className={ConferencesContentStyle.item_list}>
              <div className={ConferencesContentStyle.item_time}>
                <img
                  className={ConferencesContentStyle.item_time_img}
                  src={time}
                  alt="time"
                />
                <p className={ConferencesContentStyle.item_time_p}>
                  10:00 - 12:00
                </p>
              </div>
              <p className={ConferencesContentStyle.item_subject}>
                ПАНЕЛЬНАЯ ДИСКУССИЯ. ЭКОНОМИКА
              </p>
              <p className={ConferencesContentStyle.item_name}>
                Алина Жаныбекова
              </p>
              <p className={ConferencesContentStyle.item_desk}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada tristique justo quis ultrices. Morbi gravida dignissim
                lectus
              </p>
            </div>
          </div>
          <div className={ConferencesContentStyle.coffee}>
            <img src={coffee} alt="coffee" />
            <p className={ConferencesContentStyle.coffee_p}>Кофе-брейк</p>
          </div>
          <div className={ConferencesContentStyle.item}>
            <img
              className={ConferencesContentStyle.avatar}
              src={avatar}
              alt=""
            />
            <div className={ConferencesContentStyle.item_list}>
              <div className={ConferencesContentStyle.item_time}>
                <img
                  className={ConferencesContentStyle.item_time_img}
                  src={time}
                  alt="time"
                />
                <p className={ConferencesContentStyle.item_time_p}>
                  10:00 - 12:00
                </p>
              </div>
              <p className={ConferencesContentStyle.item_subject}>
                ПАНЕЛЬНАЯ ДИСКУССИЯ. ЭКОНОМИКА
              </p>
              <p className={ConferencesContentStyle.item_name}>
                Алина Жаныбекова
              </p>
              <p className={ConferencesContentStyle.item_desk}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada tristique justo quis ultrices. Morbi gravida dignissim
                lectus
              </p>
            </div>
          </div>
          <div className={ConferencesContentStyle.item}>
            <img
              className={ConferencesContentStyle.avatar}
              src={avatar}
              alt=""
            />
            <div className={ConferencesContentStyle.item_list}>
              <div className={ConferencesContentStyle.item_time}>
                <img
                  className={ConferencesContentStyle.item_time_img}
                  src={time}
                  alt="time"
                />
                <p className={ConferencesContentStyle.item_time_p}>
                  10:00 - 12:00
                </p>
              </div>
              <p className={ConferencesContentStyle.item_subject}>
                ПАНЕЛЬНАЯ ДИСКУССИЯ. ЭКОНОМИКА
              </p>
              <p className={ConferencesContentStyle.item_name}>
                Алина Жаныбекова
              </p>
              <p className={ConferencesContentStyle.item_desk}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada tristique justo quis ultrices. Morbi gravida dignissim
                lectus
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentConferences
