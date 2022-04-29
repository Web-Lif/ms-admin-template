import React, { Suspense } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { requestIgnoreList, checkLoginStatus } from '../app'

import '@weblif/fast-ui/es/app'

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
        const navigate = useNavigate()
        navigate('/User/Login', {
            replace: true
        })
        return null
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