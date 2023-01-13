import { Suspense, lazy } from 'react'
import { css, Global } from '@emotion/react'
import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { requestIgnoreList, checkLoginStatus } from '../app'


const BasicLayout = lazy(() => import(/* webpackPrefetch: true */ './BasicLayout'))

export const useIgnoreLayout = () => {
    const location = useLocation()
    
    if (requestIgnoreList().includes(location.pathname)) {
        return true
    }

    return false
}

const Layout = () => {

    let outlet = null

    if (useIgnoreLayout()) {
        outlet =  (
            <>
                <Outlet />
            </>
        )
    } else if (checkLoginStatus() === false) {
        outlet = <Navigate to="/User/Login" replace />
    } else {
        outlet = (
            <BasicLayout>
                <Outlet />
            </BasicLayout>
        )
    }

    return (
        <Suspense fallback={<div />}>
            <Global
                styles={css`
                    html, body {
                        height: 100%;
                        margin: 0px;
                        background-color: #f0f2f5;
                    }
                    .ant-pro {
                        height: 100%;
                    }

                `}
            />  
            {outlet}
        </Suspense>
    )
}

export default Layout