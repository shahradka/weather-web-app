import React from "react"
import Icon, { IIcon } from "../Icon"

const Rain = ({height, width}:IIcon) => {
    return <Icon height={height} width={width} viewPort="0 0 32 32">
            <path d="M25 4c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 16c-0.607 0-1.201-0.109-1.766-0.325l-1.125-0.432-0.906 0.792c-1.453 1.268-3.301 1.966-5.203 1.966s-3.75-0.698-5.203-1.966l-0.906-0.792-1.125 0.432c-0.563 0.216-1.159 0.326-1.766 0.326-2.758 0-5-2.244-5-5s2.242-5 5-5c0.237 0 0.469 0.017 0.703 0.050l1.185 0.172 0.71-0.966c1.52-2.069 3.853-3.255 6.402-3.255 2.551 0 4.883 1.185 6.401 3.254l0.711 0.967 1.187-0.172c0.232-0.033 0.464-0.050 0.701-0.050 2.758 0 5 2.244 5 5s-2.242 5-5 5zM6 20c-1.106 0-2 0.895-2 2s0.894 2 2 2 2-0.895 2-2-0.894-2-2-2zM16 22c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2zM26 20c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2zM22 28c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2zM10 28c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2z" fill="currentColor">

            </path>
    </Icon>

}
export const Rain128 = () => <Rain height={128} width={128} />
export const Rain64 = () => <Rain height={64} width={64} />
export const Rain32 = () => <Rain height={32} width={32} />
export const Rain24 = () => <Rain height={24} width={24} />
export const Rain15 = () => <Rain height={15} width={15} />