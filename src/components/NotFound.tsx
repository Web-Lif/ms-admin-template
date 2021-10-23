import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

const NotFound: React.FC<RouteComponentProps> = ({
    location
}) => {
    return (
        <div> 404 这个{location.pathname}路径不存在 </div>
    )
}
export default NotFound