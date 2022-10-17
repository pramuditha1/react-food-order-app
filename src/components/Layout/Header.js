import React from 'react'
import cafeImage from '../../assets/Cafe-Header-2.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <>
        <header className={classes.header}>
            <h1>Cafe Noir</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={cafeImage} alt="cafe noir banner"/>
        </div>
    </>
  )
}

export default Header