import React, { useEffect } from 'react'

const App = () => {
    useEffect(() => {
        console.log("这是我的第一次加载......")
    }, [])
    return (
        <>
            这个是首页信息 <input /> 
        </>
    )
}

export default App