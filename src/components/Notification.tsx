import { FC } from 'react'
import { Dropdown, Badge, Tabs } from '@weblif/fast-ui'
import { BellOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'

interface NotificationProps {
    count: number
}


const NotificationBody = () => (
    <div
        css={css`
            background-color: #fff;
            border-radius: 4px;
            box-shadow: 0 6px 16px -8px rgb(0 0 0 / 8%), 0 9px 28px 0 rgb(0 0 0 / 5%), 0 12px 48px 16px rgb(0 0 0 / 3%);
            width: 336px;
            height: 450px;
        `}
    >
        <Tabs
            centered
            items={[{
                key: 'message',
                label: '消息(4)',
                children: (
                    <div
                        css={css`
                            margin: 1rem;
                        `}
                    >
                        消息内容
                    </div>
                )
            },{
                key: 'task',
                label: '代办(10)',
                children: (
                    <div
                        css={css`
                            margin: 1rem;
                        `}
                    >
                        代办内容
                    </div>
                )
            }]}
        />
        <div
            css={css`
                > div {
                    display: inline-block;
                    cursor: pointer;
                    width: 50%;
                    height: 46px;
                    color: rgba(0,0,0,.85);
                    line-height: 46px;
                    text-align: center;
                    border-top: 1px solid #f0f0f0;
                    border-radius: 0 0 2px 2px;
                    background-color: #fff;
                    transition: all .3s;
                    &:hover {
                        background-color: #f5f5f5;
                    }
                }
            `}
        >
            <div>清空通知</div>
            <div>查看更多</div>
        </div>
    </div>
)

const Notification: FC<NotificationProps> = ({
    count
}) => {

    return (
        <>
            <Dropdown
                trigger={['click']}
                placement="bottomLeft"
                dropdownRender={() => <NotificationBody />}
            >
                <div
                    css={css`
                            height: 100%;
                        `}
                >
                    <Badge
                        count={count}
                        css={css`
                                cursor: pointer;
                                padding: 4px;
                                vertical-align: middle;
                            `}
                    >
                        <BellOutlined />
                    </Badge>
                </div>
            </Dropdown>
        </>
    )
}

export default Notification