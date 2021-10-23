import React, { FC, useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import ProLayout from '@ant-design/pro-layout'
import { Space, Dropdown, Menu, Badge, Tabs } from 'antd'
import { SettingOutlined, BellOutlined } from '@ant-design/icons'


import styles from './styles/layout.mless'
import { requestLayoutMenu, requestUserInformation, UserInformationType } from '../app'



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
                    退出登录
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

const Notification: FC<NotificationProps> = ({
    count
}) => {
    const overlay = (
        <Menu>
            <Tabs
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
            </Tabs>
            <div
                className={styles.notificationBottom}
            >
                <div>清空通知</div>
                <div>查看更多</div>
            </div>
        </Menu>
    )

    return (
        <Dropdown
            trigger={["click"]}
            overlay={overlay}
            placement="bottomLeft"
            overlayClassName={styles.notificationOverlay}
        >
            <Badge
                count={count}
                className={styles.notification}
            >
                <BellOutlined />
            </Badge>
        </Dropdown>
    )
}

const BasicLayout: FC = ({ children }) => {

    const [loading, setLoading] = useState<boolean>(true)
    const location = useLocation()

    const [userInfo, setUserInfo] = useState<UserInformationType>({
        name: '......'
    })

    useEffect(() => {
        requestUserInformation().then((user) => {
            setUserInfo(user)
        })
    }, [])

    return (
        <ProLayout
            title="ms-template"
            location={location}
            fixedHeader
            fixSiderbar
            menu={{
                loading,
                request: async () => {
                    const menus = await requestLayoutMenu()
                    setLoading(false)
                    return menus
                }
            }}
            rightContentRender={() => (
                <Space>
                    <Notification
                        count={20}
                    />
                    <UserTopInfo
                        name={userInfo.name}
                    />
                </Space>
            )}
            menuItemRender={(item, dom) => (
                <Link
                    to={item.path!}
                >
                    {dom}
                </Link>
            )}
        >
            {children}
        </ProLayout>
    )
}

export default BasicLayout