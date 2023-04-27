import React from 'react'
import ContentLoader from 'react-content-loader'
const Seleton = (props) => {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={300}
        height={400}
        viewBox="0 0 300 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="NaN" rx="0" ry="0" width="230" height="NaN" />
        <rect x="11" y="1" rx="28" ry="28" width="272" height="278" />
        <rect x="10" y="294" rx="36" ry="36" width="273" height="88" />
      </ContentLoader>
    </div>
  )
}

export default Seleton
