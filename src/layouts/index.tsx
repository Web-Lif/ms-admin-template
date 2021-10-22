import React from 'react'
import BasicLayout from './BasicLayout'

import { useIgnoreLayout } from '../app'


const Layout: React.FC = ({ children }) => {

    if (useIgnoreLayout()) {
        return (
            <>
                {children}
            </>
        )
    }

    return (
        <BasicLayout>
            {children}
        </BasicLayout>
    )
}

export default Layout