/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { Form, Input, Tabs, Button, Typography, Checkbox } from 'antd'
import { useHistory } from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import styles from './styles/login.mless'

const Login = () => {
    const history = useHistory()

    useEffect(() => {
        localStorage.clear()
    }, [])

    const onFinishLogin = (values: any) => {
        localStorage.setItem('ms-token', JSON.stringify(values))
        history.replace('/')
    }
    return (
        <div
            className={styles.login}
        >
            <div className={styles.main}>
                <div className={styles.top}>
                    <Typography.Title level={3}>MS Template</Typography.Title>
                    <Typography.Text type="secondary">
                        立志打造成为湖北潜江具有影响力的模板
                    </Typography.Text>
                </div>
                <Tabs
                    defaultActiveKey="password"
                    className={styles.mainTabs}
                    centered
                >
                    <Tabs.TabPane tab="账号密码登录" key="password">
                        <Form
                            name="basic"
                            labelCol={{ span: 0 }}
                            wrapperCol={{ span: 24 }}
                            initialValues={{ remember: true }}
                            autoComplete="off"
                            onFinish={onFinishLogin}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: '用户名不能为空',
                                    }
                                ]}
                            >
                                <Input
                                    prefix={<UserOutlined />}
                                    size="large"
                                    placeholder="请输入用户名"
                                />
                            </Form.Item>
    
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: '账号不能为空',
                                    },
                                ]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined />}
                                    size="large"
                                    placeholder="请输入密码"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>自动登录</Checkbox>
                                </Form.Item>
    
                                <a
                                    style={{ float: 'right'}}
                                >
                                    忘记密码 ?
                                </a>
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    size="large"
                                >
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default Login
