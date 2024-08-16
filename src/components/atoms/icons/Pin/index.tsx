import React from "react"
import Icon, { IIcon } from "../Icon"

const Pin = ({height, width}:IIcon) => {
    return <Icon height={height} width={width} viewPort="0 0 32 32">
        <path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16.125c-3.383 0-6.125-2.742-6.125-6.125s2.742-6.125 6.125-6.125 6.125 2.742 6.125 6.125-2.742 6.125-6.125 6.125zM12.125 10c0-2.14 1.735-3.875 3.875-3.875s3.875 1.735 3.875 3.875c0 2.14-1.735 3.875-3.875 3.875s-3.875-1.735-3.875-3.875z" fill="currentColor">

        </path>

    </Icon>

}
export const Pin128 = () => <Pin height={128} width={128} />
export const Pin64 = () => <Pin height={64} width={64} />
export const Pin32 = () => <Pin height={32} width={32} />
export const Pin24 = () => <Pin height={24} width={24} />
export const Pin15 = () => <Pin height={15} width={15} />