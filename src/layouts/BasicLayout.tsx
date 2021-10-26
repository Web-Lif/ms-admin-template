import React, { FC, useState, Suspense } from 'react'
import { useLocation, Link } from 'react-router-dom'
import ProLayout, { MenuDataItem } from '@ant-design/pro-layout'
import { Space, Dropdown, Menu, Badge, Tabs } from 'antd'
import { SettingOutlined, BellOutlined } from '@ant-design/icons'


import NotFound from '../components/NotFound'
import { requestGlobalData, GlobalData, config } from '../app'
import Loading from '../components/Loading'
import styles from './styles/layout.mless'

interface UserTopInfoProps {
    name: string
}


const UserTopInfo: FC<UserTopInfoProps> = ({
    name
}) => (
    <Dropdown
        overlay={(
            <Menu>
                <Menu.Item
                    key="logout"
                    icon={ <SettingOutlined />}
                >
                    <Link
                        to="/User/Login"
                    >
                        退出登录
                    </Link>
                </Menu.Item>
            </Menu>
        )}
    >
        <div className={styles.userName}>
            {name}
        </div>
    </Dropdown>
)


interface NotificationProps {
    count: number
}

const NotificationBody = () => (
    <>
        <Tabs
            className={styles.notificationCard}
            centered
        >
            <Tabs.TabPane
                tab="消息(4)"
                key="message"
                className={styles.notificationTabs}
            >
                    消息内容
            </Tabs.TabPane>
            <Tabs.TabPane
                tab="代办(10)"
                key="task"
                className={styles.notificationTabs}
            >
                    代办内容
            </Tabs.TabPane>
        </Tabs><div
            className={styles.notificationBottom}
        >
            <div>清空通知</div>
            <div>查看更多</div>
        </div>
    </>
)

const Notification: FC<NotificationProps> = ({
    count
}) => {
    const overlay = (
        <Menu>
            <NotificationBody />
        </Menu>
    )

    return (
        <Dropdown
            trigger={["click"]}
            overlay={overlay}
            placement="bottomLeft"
            overlayClassName={styles.notificationOverlay}
        >
            <div
                className={styles.notificationDropdown}
            >
                <Badge
                    count={count}
                    className={styles.notification}
                >
                    <BellOutlined />
                </Badge>
            </div>
        </Dropdown>
    )
}

const BasicLayout: FC = ({ children }) => {

    const location = useLocation()

    const [globalData, setGlobalData] = useState<GlobalData>({
        name: '',
        title: '',
        menus: []
    })

    const [tabs, setTabs] = useState<MenuDataItem[]>([{
        path: '/',
        name: '首页',
        closable: false
    }])
    const [tabActiveKey, setActiveKey] = useState<string>()

    const renderChildren = () => {
        if (config.tabs === 'multi') {
            const renderBodyTabPane = () => tabs.map(tab => {
                const router = (window as any).g_routers.find((ele: any) => ele.path === tab.path)
                const DynamicComponent = router?.component || NotFound
                return (
                    <Tabs.TabPane
                        tab={tab.name}
                        key={`ms-tab-body-${tab.key || tab.path}`}
                        closable={tab.closable}
                        forceRender
                    >
                        <Suspense fallback={<Loading />}>
                            <DynamicComponent />
                        </Suspense>
                    </Tabs.TabPane>
                )
            })
            return (
                <Tabs
                    className={styles.tabsHideNav}
                    activeKey={`ms-tab-body-${tabActiveKey}`}
                >
                    {renderBodyTabPane()}
                </Tabs>
            )
        }
        return children
    }

    const getLocation = () => {
        if (config.tabs === 'multi') {
            return {
                pathname: tabActiveKey
            }
        }
        return location
    }


    return (
        <ProLayout
            title={globalData.title}
            layout={config.layout}
            navTheme={config.navTheme}
            headerTheme={config.headerTheme}
            location={getLocation()}
            fixedHeader
            fixSiderbar
            menu={{
                request: async () => {
                    const data = await requestGlobalData()
                    setGlobalData(data)
                    return data.menus
                }
            }}
            headerContentRender={() => {
                if (config.tabs === 'multi') {
                    return (
                        <Tabs
                            type="editable-card"
                            hideAdd
                            className={styles.tabsNavTop}
                            activeKey={`ms-tab-header-${tabActiveKey}`}
                            onEdit={(e, action) => {
                                if (action === 'remove') {
                                    const index = tabs.findIndex((ele) => {
                                        const key = ele.key || ele.path
                                        if (key === tabActiveKey) {
                                            return true
                                        }
                                        return false
                                    })
                                    if (index !== -1) {
                                        tabs.splice(index, 1)
                                        setTabs([
                                            ...tabs
                                        ])
                                        let nextActiveKey;
                                        if (tabs.length > 0) {
                                            const tab = tabs[tabs.length - 1]
                                            nextActiveKey = tab.key || tab.path 
                                        }
                                        setActiveKey(nextActiveKey)
                                    }
        
                                }
                            }}
                            onChange={(key) => {
                                setActiveKey(key.replace('ms-tab-header-', ''))
                            }}
                        >
                            {tabs.map(tab => (
                                <Tabs.TabPane tab={tab.name} key={`ms-tab-header-${tab.key || tab.path}`} closable={tab.closable} />
                            ))}
                        </Tabs>
                    )
                }
                return null
            }}
            rightContentRender={() => (
                <Space>
                    <Notification
                        count={20}
                    />
                    <UserTopInfo
                        name={globalData.name}
                    />
                </Space>
            )}
            menuItemRender={(item, dom) => {
                const { path } = item
                if (path) {
                    if (config.tabs === 'single') {
                        return (
                            <Link
                                to={path}
                            >
                                {dom}
                            </Link>
                        )
                    }

                    if (config.tabs === 'multi') {
                        const onClick = () => {
                            const activeKey = item.key || item.path
                            const index = tabs.findIndex(ele => {
                                const key = ele.key || ele.path
                                if (activeKey === key) {
                                    return true
                                }
                                return false
                            })
                            if (index === -1) {
                                setTabs([
                                    ...tabs,
                                    item
                                ])
                            }
                            setActiveKey(item.key)
                        }
                        return (
                            <div
                                role = "link" 
                                aria-hidden="true"
                                onClick={onClick}
                            >
                                {dom}
                            </div>
                        )
                        
                    }
                }
                return dom
            }}
        >
            {renderChildren()}
        </ProLayout>
    )
}

export default BasicLayout