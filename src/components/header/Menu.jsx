import React from 'react'

import { headerMenus, searchKeyword } from '../../data/header'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
    const location = useLocation();
  return (
    <nav className='header__menu'>
        <ul className='menu'>
            {headerMenus.map((menu, key) => (
                <li key={key} className={location.pathname === menu.src? 'active' : ''}>
                    <Link to={menu.src}>
                        {menu.icon}{menu.title}
                    </Link>
                </li>
            ))}
        </ul>
        <ul className='keyword'>
            {searchKeyword.map((keword, key) => (
                <li key={key} className={location.pathname === keword.src? 'active' : ''}>
                    <Link to={keword.src}>
                        {keword.title}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Menu