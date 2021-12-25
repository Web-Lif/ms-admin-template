import { MenuDataItem } from '@ant-design/pro-layout';
import React from 'react';
import { RouteComponentProps as RouterProps } from 'react-router-dom'

export interface TabHooks {
    onBeforeCloseTab?: () => void | boolean | Promise<void | boolean>
}

export interface Tabs {
    /**
     * 开启一个标签页
     */
    open: ({
        item,
        active,
        params
    }: {
        item: MenuDataItem,
        active?: boolean,
        params?: any 
    }) => void

    /**
     * 关闭标签页
     */
    close: ({
        key, goback
    }:{
        key: string,
        goback?: string
    }) => void

    /**
     * 激活当前的标签页信息
     */
    active: ({
        key
    }: {
        key: string,
        params?: any
    }) => void
    
    /**
     * 当前状态
     */
    status: 'active' | 'passive'

    /**
     * 当前标签页的信息
     */
    params?: any

    /**
     * 一些hook
     */
    hooks: React.MutableRefObject<TabHooks>
}

export interface RouteComponentProps extends RouterProps {
    tabs: Tabs
}