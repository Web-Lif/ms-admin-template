import React, { Suspense } from 'react'
import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { requestIgnoreList, checkLoginStatus } from '../app'

import 'antd/dist/antd.variable.min.css'


const BasicLayout = React.lazy(() => import(/* webpackPrefetch: true */ './BasicLayout'))

export const useIgnoreLayout = () => {
    const location = useLocation()
    
    if (requestIgnoreList().includes(location.pathname)) {
        return true
    }

    return false
}

const Layout = () => {

    if (useIgnoreLayout()) {
        return (
            <>
                <Outlet />
            </>
        )
    }

    if (!checkLoginStatus()) {
        return <Navigate to="/User/Login" replace />
    }

    return (
        <Suspense fallback={<div />}>
            <BasicLayout>
                <Outlet />
            </BasicLayout>
        </Suspense>
    )
}

export default Layout