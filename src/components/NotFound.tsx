import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styles from './styles/notfound.module.less'

const NotFound: React.FC<RouteComponentProps> = () => (
    <div
        className={styles.notfound}
    />
)
export default NotFound