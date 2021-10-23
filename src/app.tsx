import { useLocation } from 'react-router-dom'
import { MenuDataItem } from '@ant-design/pro-layout'

/**
 * 检查路由权限
 * @returns boolean true 表示使用布局, false 表示不使用布局
 */
export const useIgnoreLayout = () => {
    const location = useLocation()

    const ignoreList: string[] = []

    if (ignoreList.includes(location.pathname)) {
        return true
    }
    return false
}

/**
 * 获取菜单信息
 */
export const requestLayoutMenu = async (): Promise<MenuDataItem[]> => [
    {
        path: '/',
        name: 'welcome',
        children: [
            {
                path: '/welcome',
                name: 'one',
                children: [
                    {
                        path: '/welcome/welcome',
                        name: 'two',
                        exact: true,
                    },
                ],
            },
        ],
    },
    {
        path: '/demo',
        name: 'demo',
    },
]


export type UserInformationType = {
    name: string
    [name: string]: any
}

/**
 * 获取当期人员信息
 */
export const requestUserInformation = async (): Promise<UserInformationType> => ({
    name: '系统管理员'
})