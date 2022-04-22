import React, { FC, useEffect, useRef } from 'react'
import { Button, message } from '@weblif/fast-ui'
import { RouteComponentProps } from '@/types'


const App: FC<RouteComponentProps> = ({
    tabs
}) => {
    const count = useRef<number>(0)
    useEffect(() => {
        const { hooks } = tabs
        hooks.current = {
            onBeforeCloseTab: () => {
                message.info('关闭被阻止, 请使用右键强制关闭')
                return false
            }
        }
    }, [])
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
                        },
                        active: false,
                    })
                }}
            >
                打开新的首页信息
            </Button>
        </>
    )
}

export default App