import React, { FC, useState, Suspense, useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import ProLayout, { MenuDataItem } from '@ant-design/pro-layout'
import { Space, Dropdown, Menu, Badge, Tabs } from 'antd'
import { SettingOutlined, BellOutlined, SyncOutlined, ScissorOutlined, CloseCircleOutlined } from '@ant-design/icons'
import LoadingBar from 'react-top-loading-bar'

import { Tabs as TabsProps } from '@/types'
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

const findCurrentTabIndex = (tabs: MenuDataItem[], activeKey: string) => tabs.findIndex((ele) => {
    const key = ele.key || ele.path
    if (key === activeKey) {
        return true
    }
    return false
})


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
    const [tabActiveKey, setActiveKey] = useState<string>('/')
    const [reload, setReload]  =useState<{
        key: string,
        count: number
    }>()


    const loadingRef = useRef<any>(null)

    const tabsProps: TabsProps = {
        open: ({
            item,
            active = true,
            params
        }) => {
            const key = item.key || item.path

            if (findCurrentTabIndex(tabs, key!) === -1) {
                setTabs([
                    ...tabs,
                    {
                        ...item,
                        params
                    }
                ])
            }

            if (active) {
                setActiveKey(key!)
            }
        },
        close: ({
            key,
            goback
        }) => {
            const index = findCurrentTabIndex(tabs, key)
            if (index !== -1) {
                tabs.splice(index, 1)
                setTabs([
                    ...tabs
                ])
            }
            if (goback) {
                setActiveKey(goback)
            }
        },
        active: ({
            key,
            params
        }) => {
            const index = findCurrentTabIndex(tabs, key)
            tabs[index].params = params
            setTabs([...tabs])
            setActiveKey(key)
        },
        status: 'passive'
    }

    const isMultiTabs = () => config.tabs === 'multi' && config.layout === 'side'

    const renderChildren = () => {
        if (isMultiTabs()) {
            const renderBodyTabPane = () => tabs.map(tab => {
                const router = (window as any).g_routers.find((ele: any) => ele.path === tab.path)
                const DynamicComponent = router?.component || NotFound
                const key = (tab.key || tab.path) || ''
                
                if (key === tabActiveKey) {
                    tabsProps.status = 'active'
                } else {
                    tabsProps.status = 'passive'
                }

                return (
                    <Tabs.TabPane
                        tab={tab.name}
                        key={tab.key || tab.path}
                        closable={tab.closable}
                        forceRender
                    >
                        <Suspense fallback={<Loading />}>
                            <DynamicComponent
                                key={reload?.key === key ? reload.count : undefined}
                                tabs={{
                                    ...tabsProps,
                                    params: tab.params
                                }}
                            />
                        </Suspense>
                    </Tabs.TabPane>
                )
            })
            return (
                <Tabs
                    className={styles.tabsHideNav}
                    activeKey={tabActiveKey}
                >
                    {renderBodyTabPane()}
                </Tabs>
            )
        }
        return children
    }

    const getLocation = () => {
        if (isMultiTabs()) {
            return {
                pathname: tabActiveKey
            }
        }
        return location
    }

    return (
        <>
            <LoadingBar ref={loadingRef}/>
            <ProLayout
                className={styles.proLayout}
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
                    if (isMultiTabs()) {
                        const renderDropdownNode = (node: any) => (
                            <Dropdown
                                overlay={(
                                    <Menu>
                                        <Menu.Item
                                            key="reload"
                                            icon={<SyncOutlined />}
                                            onClick={() => {
                                                loadingRef.current?.continuousStart()
                                                let number = 0
                                                if (reload?.key === node.key) {
                                                    number += (reload?.count || 0) + 1
                                                }
                                                setReload({
                                                    key: node.key,
                                                    count: number
                                                })
                                                setTimeout(() => {
                                                    loadingRef.current?.complete()
                                                }, 0);
                                            }}
                                        >
                                            重新加载
                                        </Menu.Item>
                                        <Menu.Item
                                            key="closeOther"
                                            icon={<CloseCircleOutlined />}
                                            onClick={() => {
                                                const newTabs = tabs.filter(ele => {
                                                    const key = ele.key || ele.path
                                                    if (['/', node.key].includes(key)) {
                                                        return true
                                                    }
                                                    return false
                                                })
                                                setActiveKey(node.key)
                                                setTabs(newTabs)
                                            }}
                                        >
                                                关闭其他标签页
                                        </Menu.Item>
                                        <Menu.Item
                                            key="closeRight"
                                            icon={<ScissorOutlined />}
                                            onClick={() => {
                                                const index = findCurrentTabIndex(tabs, node.key)
                                                const newTabs = tabs.slice(0, index + 1)
                                                if (findCurrentTabIndex(newTabs, tabActiveKey) === -1) {
                                                    setActiveKey(node.key)
                                                }
                                                setTabs(newTabs)
                                            }}
                                        >
                                                关闭右侧标签页
                                        </Menu.Item>
                                    </Menu>
                                )}
                                trigger={['contextMenu']}
                            >
                                {node}
                            </Dropdown>
                        )
                        return (
                            <Tabs
                                type="editable-card"
                                hideAdd
                                className={styles.tabsNavTop}
                                activeKey={tabActiveKey}
                                renderTabBar={(props, DefaultTabBar) => (
                                    // eslint-disable-next-line react/jsx-props-no-spreading
                                    <DefaultTabBar {...props} >
                                        {(node: any) => (
                                            renderDropdownNode(node)
                                        )}
                                    </DefaultTabBar>
                                )}
                                onEdit={(e, action) => {
                                    if (action === 'remove') {
                                        const index = findCurrentTabIndex(tabs, e as string)
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
                                            setActiveKey(nextActiveKey || '/')
                                        }
            
                                    }
                                }}
                                onChange={(key) => {
                                    setTabs([...tabs])
                                    setActiveKey(key)
                                }}
                            >
                                {tabs.map(tab => (
                                    <Tabs.TabPane tab={tab.name} key={tab.key || tab.path} closable={tab.closable} />
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

                        if (isMultiTabs()) {
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
                                setActiveKey(activeKey!)
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
        </>
    )
}

export default BasicLayout