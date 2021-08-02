import React from 'react'
import Button from '../button'
import * as footerButtonsStyles from './footerButtons.module.scss'

const FooterButtons = () => {
  return (
    <div className={footerButtonsStyles.container}>
      <Button text='Mailing list'/>
      <Button text='Purchase'/>
      <Button text=''/>
    </div>
  )
}

export default FooterButtons