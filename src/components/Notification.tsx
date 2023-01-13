import { FC } from 'react'
import { Dropdown, Badge, Tabs } from '@weblif/fast-ui'
import { BellOutlined } from '@ant-design/icons'
import { css, ClassNames } from '@emotion/react'

interface NotificationProps {
    count: number
}


const NotificationBody = () => (
    <>
        <Tabs
            centered
            items={[{
                key: 'message',
                label: '"消息(4)',
                children: (
                    <>
                        消息内容
                    </>
                )
            },{
                key: 'task',
                label: '"代办(10)',
                children: (
                    <>
                        代办内容
                    </>
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
    </>
)

const Notification: FC<NotificationProps> = ({
    count
}) => {

    return (
        <ClassNames>
            {({ css: ncss }) => (
                <Dropdown
                    trigger={['click']}
                    placement="bottomLeft"
                    overlayClassName={ncss`
                        width: 336px;
                        height: 500px;
                    `}
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
            )}
        </ClassNames>
    )
}

export default Notification