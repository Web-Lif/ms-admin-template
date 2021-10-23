import { MenuDataItem } from '@ant-design/pro-layout'

export type GlobalData = {
    name: string,
    title: string,
    menus: MenuDataItem[],
    [name: string]: any
}

/**
 * 检查路由权限
 * @returns boolean true 表示使用布局, false 表示不使用布局
 */
export const requestIgnoreList = () => [
    '/User/Login'
]

/**
 * 获取菜单信息
 */
export const requestGlobalData = async (): Promise<GlobalData> => ({
    name: '系统管理员',
    title: 'MS Template',
    menus: [
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
})

/**
 * 检查登入状态，用户是否登入
 */
export const checkLoginStatus = () => {
    if(localStorage.getItem('ms-token')) {
        return true
    }
    return false
}