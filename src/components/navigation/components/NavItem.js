import React, {PropTypes} from 'react'
import {Route, Link} from 'react-router-dom'
//import styles from './styles.less';

export default function NavItem({children, to, exact}) {
    return (
        <Route path={to} exact={exact} children={({match}) => (
            <li className={match ? 'active' : null}>
                <Link to={to}>{children}</Link>
            </li>
        )}/>
    )
}

