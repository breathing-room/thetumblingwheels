import React from 'react'
import * as bannerStyles from './banner.module.scss'

const Banner = () => {
  return (
    <div bannerStyles={bannerStyles.banner}>
      <div className={bannerStyles.image}>
        <h1>The Tumbling Wheels</h1>
      </div> 
    </div>
  )
}

export default Banner