import React, { useEffect, useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'

const Loading = () => {
    const ref = useRef<{
        continuousStart: () => void,
        complete: () => void,
    }>(null)

    useEffect(() => {
        ref.current?.continuousStart()
        return () => {
            ref.current?.complete()
        }
    }, [])
    return (
        <>
            <LoadingBar ref={ref} />
        </>
    )
}

export default Loading