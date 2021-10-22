import React, { useState } from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'

const App = () => {
    const [count, setCount] = useState<number>(0)
    const history = useHistory()
    return (
        <div className="home">
            <Button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                点击-次数  {count}
            </Button>

            <Button
                onClick={() => {
                    history.push('/User/Logout')
                }}
            >
                Logout
            </Button>
        </div>
    )
}

export default App