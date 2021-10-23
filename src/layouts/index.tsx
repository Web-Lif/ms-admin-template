import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import BasicLayout from './BasicLayout'
import { requestIgnoreList, checkLoginStatus } from '../app'


export const useIgnoreLayout = () => {
    const location = useLocation()
    
    if (requestIgnoreList().includes(location.pathname)) {
        return true
    }

    return false
}

const Layout: React.FC = ({ children }) => {

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