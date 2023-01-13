import { useState,FC, useEffect } from 'react'
import { Form, Input, Tabs, Button, Typography, Checkbox } from '@weblif/fast-ui'
import { useNavigate } from 'react-router-dom'
import { css } from '@emotion/react'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { checkLoginStatus } from '@/app'

const Login: FC = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (checkLoginStatus()) {
            navigate('/')
        }
    }, [])

    const [loading, setLoading] = useState<boolean>(false)

    const onFinishLogin = (values: unknown) => {
        setLoading(true)
        localStorage.setItem('ms-token', JSON.stringify(values))
        setLoading(false)
        navigate('/')
    }

    return (
        <div
            css={css`
                background-image: url(./assets/svg/LoginBackground.svg);
                background-repeat: no-repeat;
                background-position: center 110px;
                background-size: 100%;
                width: 100%;
                height: 100%;
                padding-top: 4rem;
            `}
        >
            <div
                css={css`
                    width: 328px;
                    margin: 0 auto;
                    border: 1px solid #f0f2f5;
                    padding: 1rem;
                `}
            >
                <div
                    css={css`
                        padding-top: 1.2rem;
                        padding-bottom: 1.2rem;
                        text-align: center;
                    `}
                >
                    <Typography.Title level={3}>MS Template</Typography.Title>
                    <Typography.Text type="secondary">
                        立志打造成为湖北潜江具有影响力的模板
                    </Typography.Text>
                </div>
                <Tabs
                    css={css`
                        .ant-tabs-nav {
                            &::before {
                                display: none;
                            }
                        }
                    `}
                    defaultActiveKey="password"
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
                                    style={{ float: 'right' }}
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
                                    loading={loading}
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
