import React, { FC, useRef } from 'react'
import { Button } from 'antd'
import { RouteComponentProps } from '@/types'


const App: FC<RouteComponentProps> = ({
    tabs
}) => {
    const count = useRef<number>(0)
    return  (
        <>
            <Button
                onClick={() => {
                    count.current += 1
                    tabs.active({
                        key: '/',
                        params: {
                            message: `hello, word - ${count.current}`
                        }
                    })
                }}
            >
                点击跳转到首页
            </Button>
            <Button
                onClick={() => {
                    count.current += 1
                    tabs.open({
                        item: {
                            key: `newHome${count.current}`,
                            path: '/',
                            name: 'New Home Tab'
                        },
                        params: {
                            message: `hello, word New - ${count.current} `
                        }
                    })
                }}
            >
                打开新的首页信息
            </Button>
        </>
    )
}

export default App