import React, { FC, useState, Suspense, useRef, useEffect, createRef, ReactElement } from 'react'
import { useLocation, Link } from 'react-router-dom'
import ProLayout, { MenuDataItem } from '@ant-design/pro-layout'
import { Space, Dropdown, Menu, Tabs, Select, Typography } from '@weblif/fast-ui'
import { SettingOutlined, SyncOutlined, ScissorOutlined, CloseCircleOutlined, SearchOutlined, BugOutlined } from '@ant-design/icons'
import LoadingBar, { LoadingBarRef } from '@weblif/react-top-loading-bar'
import pinyin from 'pinyin'

import { TabHooks, Tabs as TabsProps } from '@/types'
import { setConfigParams, getConfigParams } from '@/utils/config'
import { Notification, NotFound, Loading } from '@/components'
import { requestGlobalData, GlobalData, config, clearLoginStatus } from '../app'

import styles from './styles/layout.module.less'
import { BaseSelectRef } from 'rc-select'

interface UserTopInfoProps {
    name: string
}

const UserTopInfo: FC<UserTopInfoProps> = ({
    name,
}) => (
    <Dropdown
        overlay={(
            <Menu>
                <Menu.Item
                    key="logout"
                    icon={ <SettingOutlined />}
                >
                    <div
                        role="button"
                        aria-hidden="true"
                        onClick={() => {
                            clearLoginStatus()
                            window.location.href = '/User/Login'
                        }}
                    >
                        退出登录
                    </div>
                </Menu.Item>
            </Menu>
        )}
    >
        <div className={styles.userName}>
            {name}
        </div>
    </Dropdown>
)


const findCurrentTabIndex = (tabs: MenuDataItem[], activeKey: string) => tabs.findIndex((ele) => {
    const key = ele.key || ele.path
    if (key === activeKey) {
        return true
    }
    return false
})


const formatMenuFull = (menus: MenuDataItem[], path?: string) => {
    menus.forEach((menu) => {
        let realPath = path || '首页'
        if (/^\/.*/.test(realPath)) {
            realPath = realPath?.substring(1)
        }
        // eslint-disable-next-line no-param-reassign
        menu.fullName = realPath
        if (menu.children) {
            formatMenuFull(menu.children, `${path || ''}/${menu.name}`)
        }
    })
}

interface SearchItem {
    key: string
    title: string
    description: string
    data?: MenuDataItem
}

type BasicLayoutProps = {
    children?: React.ReactNode
}

const BasicLayout: FC<BasicLayoutProps> = ({ children }) => {

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

    useEffect(() => {
        window.history.pushState({}, '',  `${tabActiveKey}`)
    }, [tabActiveKey])

    const [reload, setReload] = useState<{
        key: string,
        count: number
    }>()

    const loadingRef = useRef<LoadingBarRef>(null)

    const searchRef = useRef<BaseSelectRef>(null)


    const getSearchList = (menuDatas: MenuDataItem[]) => {
        const data:  MenuDataItem[] = []
        menuDatas.forEach((ele, index) => {
            if (ele.children) {
                data.splice(index, 0, ...getSearchList(ele.children))
            } else {
                data.push(ele)
            }
        })
        return data
    }

    const [searchItems, setSearchItems] = useState<SearchItem[]>([])

    useEffect(() => {
        getConfigParams<MenuDataItem[]>('ms-tabs').then((data) => {
            if (data && data?.length > 0) {
                setTabs(data)
            }
        })
        getConfigParams<string>('ms-active-key').then((data) => {
            if (data) {
                setActiveKey(data)
            }
        })

        const onKeyup = (e: KeyboardEvent) => {
            if (e.key === '/') {
                e.stopPropagation()
                searchRef.current?.focus()
            }
        }

        window.addEventListener('keyup', onKeyup)

        return () => {
            window.removeEventListener('keyup', onKeyup)
        }
    }, [])

    useEffect(() => {
        setConfigParams('ms-tabs', tabs.map((ele) => ({
            ...ele,
            onClick: undefined
        })))
    }, [tabs])

    useEffect(() => {
        console.log(tabActiveKey)
        setConfigParams('ms-active-key', tabActiveKey)
    }, [tabActiveKey])

    const tabsProps: Omit<TabsProps, 'hooks'> = {
        open: ({
            item,
            active = true,
            params
        }) => {
            const key = item.key || item.path
            if (findCurrentTabIndex(tabs, key || '') === -1) {
                setTabs([
                    ...tabs,
                    {
                        ...item,
                        params
                    }
                ])
            }

            if (active) {
                setActiveKey(key || '/')
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

    const hooks: {key: string | undefined, hook: React.MutableRefObject<TabHooks | null>}[] = []
    const renderChildren = () => {
        if (isMultiTabs()) {
            const renderBodyTabPane = () => tabs.map(tab => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const router = (window as any).g_routers.find((ele: { path: string}) => ele.path === tab.path)
                const DynamicComponent = router?.component || NotFound
                const key = (tab.key || tab.path) || ''
                
                if (key === tabActiveKey) {
                    tabsProps.status = 'active'
                } else {
                    tabsProps.status = 'passive'
                }
                const hook = createRef<TabHooks>()

                hooks.push({
                    key: tab.key || tab.path,
                    hook,
                })
            
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
                                    params: tab.params,
                                    hooks: hook
                                }}
                            />
                        </Suspense>
                    </Tabs.TabPane>
                )
            })
            return (
                <Tabs
                    className={styles.tabsHideNav}
                    renderTabBar={() => <div />}
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
                pathname: tabActiveKey.toString()
            }
        }
        return location
    }

    const delTab = (newTabs: MenuDataItem[], targetKey: string) => {
        const del = () => {
            if (targetKey) {
                setActiveKey(targetKey)
            }
            setTabs(newTabs)
        }

        const tabHook = hooks.find(ele => ele.key === tabActiveKey)
        try {
            const result = tabHook?.hook?.current?.onBeforeCloseTab?.()
            if (result instanceof Promise) {
                result.then((data) => {
                    if (data !== false) {
                        del()
                    }
                }).catch((error) => {
                    del()
                    // eslint-disable-next-line no-console
                    console.error(`关闭标签页错误 - [${tabActiveKey}]`, error)
                })
            } else if (result !== false) {
                del()
            }
        } catch (error) {
            del()
            // eslint-disable-next-line no-console
            console.error(`关闭标签页错误 - [${tabActiveKey}]`, error)
        }
    }
    return (
        <>
            <LoadingBar ref={loadingRef}/>
            <ProLayout
                className={styles.proLayout}
                title={globalData.title}
                layout={config.layout}
                logo={config.logo}
                navTheme={config.navTheme}
                headerTheme={config.headerTheme}
                location={getLocation()}
                fixedHeader
                fixSiderbar
                menu={{
                    request: async () => {
                        try {
                            const data = await requestGlobalData()
                            formatMenuFull(data.menus)
                            setGlobalData(data)
                            const items = getSearchList(data.menus).map(ele => ({
                                key: (ele.path || ele.key) || '',
                                description: ele.fullName,
                                title: ele.name || '',
                                data: ele
                            }))
                            setSearchItems(items)
                            return data.menus
                        } catch (error) {
                            // eslint-disable-next-line no-console
                            console.log(error)
                            return []
                        }
                    }
                }}
                headerContentRender={() => {
                    if (isMultiTabs()) {
                        const renderDropdownNode = (node: ReactElement) => (
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
                                                    key: node.key?.toString() || '',
                                                    count: number
                                                })
                                                setTimeout(() => {
                                                    loadingRef.current?.complete()
                                                }, 0)
                                            }}
                                        >
                                            重新加载
                                        </Menu.Item>
                                        <Menu.Item
                                            key="closeOther"
                                            icon={<CloseCircleOutlined />}
                                            onClick={() => {
                                                const newTabs = tabs.filter(ele => {
                                                    const key = (ele.key || ele.path) || ''
                                                    if (['/', node.key].includes(key)) {
                                                        return true
                                                    }
                                                    return false
                                                })
                                                delTab(newTabs, node.key?.toString() || '')
                                            }}
                                        >
                                            关闭其他标签页
                                        </Menu.Item>
                                        <Menu.Item
                                            key="closeRight"
                                            icon={<ScissorOutlined />}
                                            onClick={() => {
                                                const index = findCurrentTabIndex(tabs, node.key?.toString() || '')
                                                const newTabs = tabs.slice(0, index + 1)
                                                delTab(newTabs, node.key?.toString() || '')
                                            }}
                                        >
                                            关闭右侧标签页
                                        </Menu.Item>
                                        <Menu.Item
                                            key="closeForce"
                                            icon={<BugOutlined />}
                                            onClick={() => {
                                                const index = findCurrentTabIndex(tabs, node.key?.toString() || '')
                                                if (index !== -1) {
                                                    tabs.splice(index, 1)
                                                    setTabs([
                                                        ...tabs
                                                    ])
                                                    let nextActiveKey
                                                    if (tabs.length > 0) {
                                                        const tab = tabs[tabs.length - 1]
                                                        nextActiveKey = tab.key || tab.path 
                                                    }
                                                    setActiveKey(nextActiveKey || '/')
                                                }
                                            }}
                                        >
                                            强制关闭标签
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
                                    <DefaultTabBar {...props} >
                                        {(node: ReactElement) => (
                                            renderDropdownNode(node)
                                        )}
                                    </DefaultTabBar>
                                )}
                                onEdit={(e, action) => {
                                    if (action === 'remove') {
                                        const index = findCurrentTabIndex(tabs, e as string)
                                        if (index !== -1) {
                                            const newTable = [...tabs]
                                            newTable.splice(index, 1)
                                            let nextActiveKey
                                            if (newTable.length > 0) {
                                                const tab = newTable[newTable.length - 1]
                                                nextActiveKey = tab.key || tab.path 
                                            }
                                            delTab(newTable, nextActiveKey || '/')
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
                        <Select
                            ref={searchRef}
                            showSearch
                            value=""
                            style={{
                                width: 250
                            }}
                            filterOption={(input, option) => {
                                const optionStr: string = (option?.children?.[0] as unknown as string)
                                const initials = pinyin( optionStr, {
                                    style: pinyin.STYLE_FIRST_LETTER
                                })
                                const value = pinyin(input, {
                                    style: pinyin.STYLE_FIRST_LETTER
                                })

                                const regexp = new RegExp(`^${value.join('')}.*`)
                                return regexp.test(initials.join(''))
                            }}
                            onSelect={(value: string) => {
                                const item = searchItems.find(ele => ele.key === value)
                                if (item?.data) {
                                    tabsProps.open({
                                        item: item.data,
                                    })
                                }
                            }}
                            suffixIcon={<SearchOutlined />}
                        >
                            {searchItems.map(ele => (
                                <Select.Option
                                    key={ele.key}
                                    value={ele.key}
                                >
                                    {ele.title} <br />
                                    <Typography.Text type="secondary">
                                        {ele.description}
                                    </Typography.Text>
                                </Select.Option>
                            ))}
                        </Select>
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
                                setActiveKey(activeKey || '')
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