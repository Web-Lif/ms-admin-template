import { MenuDataItem } from '@ant-design/pro-layout';
import { RouteComponentProps as RouterProps } from 'react-router-dom'

export interface Tabs {
    /**
     * 开启一个标签页
     */
    open: ({
        item,
        activation,
        params
    }: {
        item: MenuDataItem,
        activation?: boolean,
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

}

export interface RouteComponentProps extends RouterProps {
    tabs: Tabs
}