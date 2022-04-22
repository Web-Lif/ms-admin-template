import { MenuDataItem } from '@ant-design/pro-layout'
import React from 'react'
import { RouteComponentProps as RouterProps } from 'react-router-dom'

export interface TabHooks {
    onBeforeCloseTab?: () => void | boolean | Promise<void | boolean>
}

type FunctionOpen = ({
    item,
    active,
    params
}: {
    item: MenuDataItem,
    active?: boolean,
    params?: unknown
}) => void


type FunctionClose = ({
    key, goback
}:{
    key: string,
    goback?: string
}) => void

export interface Tabs {
    /**
     * 开启一个标签页
     */
    open: FunctionOpen

    /**
     * 关闭标签页
     */
    close: FunctionClose

    /**
     * 激活当前的标签页信息
     */
    active: ({
        key
    }: {
        key: string,
        params?: unknown
    }) => void
    
    /**
     * 当前状态
     */
    status: 'active' | 'passive'

    /**
     * 当前标签页的信息
     */
    params?: unknown

    /**
     * 一些hook
     */
    hooks: React.MutableRefObject<TabHooks>
}

export interface RouteComponentProps extends RouterProps {
    tabs: Tabs
}