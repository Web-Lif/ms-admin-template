import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import 'antd/dist/antd.variable.css';
import { requestIgnoreList, checkLoginStatus } from '../app'


const BasicLayout = React.lazy(() => import('./BasicLayout'));

export const useIgnoreLayout = () => {
    const location = useLocation()
    
    if (requestIgnoreList().includes(location.pathname)) {
        return true
    }

    return false
}

type LayoutProps = {
    children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

    if (useIgnoreLayout()) {
        return (
            <>
                {children}
            </>
        )
    }

    if (!checkLoginStatus()) {
        const history = useHistory()
        history.replace('/User/Login')
        return null
    }

    return (
        <BasicLayout>
            {children}
        </BasicLayout>
    )
}

export default Layout