import React from 'react'
import ContentLoader from 'react-content-loader'
import modalShopStyle from './ModalShop.module.scss'

const SeletonModalShop = (props) => {
  return (
    <>
      <div className={modalShopStyle.modal_activ}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={modalShopStyle.modal_content_activ}
        >
          {/* <div className={modalShopStyle.modal_container__close}> */}
          <ContentLoader
            speed={2}
            width={1100}
            height={700}
            viewBox="0 0 1100 700"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
          >
            <rect x="0" y="NaN" rx="0" ry="0" width="230" height="NaN" />
            <rect x="4" y="63" rx="45" ry="45" width="289" height="422" />
            <rect x="331" y="74" rx="14" ry="14" width="201" height="11" />
            <rect x="334" y="110" rx="14" ry="14" width="201" height="18" />
            <rect x="325" y="145" rx="14" ry="14" width="287" height="33" />
            <rect x="334" y="243" rx="14" ry="14" width="355" height="240" />
            <rect x="330" y="197" rx="14" ry="14" width="287" height="36" />
          </ContentLoader>
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default SeletonModalShop
