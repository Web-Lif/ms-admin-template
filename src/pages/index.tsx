import React, { FC, useEffect } from 'react'

import { RouteComponentProps } from '@/types'

const App: FC<RouteComponentProps> = ({
    tabs
}) => {
    useEffect(() => {
        console.log(JSON.stringify(tabs.params), tabs.status)
    }, [tabs.status])
    return (
        <>
            这个是首页信息  {JSON.stringify(tabs.params)}
        </>
    )
    
}

export default App