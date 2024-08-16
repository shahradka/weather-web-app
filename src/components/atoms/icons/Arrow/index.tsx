import React from 'react';
import Icon, { IIcon } from '../Icon'

const Arrow = ({height, width, rotation}:IIcon) => {

    return <Icon height={height} width={width} rotation={rotation}>
        <g>
            <path 
            d="M9.07358 23.4137L0.502076 13.4137C-0.167359 12.6327 -0.167359 11.3668 0.502076 10.5858L9.07358 0.58575C9.74302 -0.19525 10.8282 -0.19525 11.4976 0.58575C12.167 1.36675 12.167 2.63275 11.4976 3.41375L5.85241 9.99975H22.2857C23.2328 9.99975 24 10.8948 24 11.9998C24 13.1047 23.2328 13.9998 22.2857 13.9998H5.85241L11.4976 20.5858C11.8319 20.9757 11.9999 21.4878 11.9999 21.9998C11.9999 22.5117 11.8327 23.0238 11.4976 23.4137C10.8282 24.1947 9.74302 24.1947 9.07358 23.4137Z" 
            fill="currentColor"/>    
        </g>
    </Icon>
}

export const ArrowUp64 = () => <Arrow height={64} width={64} rotation="90" />
export const ArrowRight64 = () => <Arrow height={64} width={64} rotation="180" />
export const ArrowDown64 = () => <Arrow height={64} width={64} rotation="-90" />
export const ArrowLeft64 = () => <Arrow height={64} width={64} />
export const ArrowUp32 = () => <Arrow height={32} width={32} rotation="90" />
export const ArrowRight32 = () => <Arrow height={32} width={32} rotation="180" />
export const ArrowDown32 = () => <Arrow height={32} width={32} rotation="-90" />
export const ArrowLeft32 = () => <Arrow height={32} width={32} />
export const ArrowUp24 = () => <Arrow height={24} width={24} rotation="90" />
export const ArrowRight24 = () => <Arrow height={24} width={24} rotation="180" />
export const ArrowDown24 = () => <Arrow height={24} width={24} rotation="-90" />
export const ArrowLeft24 = () => <Arrow height={24} width={24} />
export const ArrowUp15 = () => <Arrow height={15} width={15} rotation="90" />
export const ArrowRight15 = () => <Arrow height={15} width={15} rotation="180" />
export const ArrowDown15 = () => <Arrow height={15} width={15}  rotation="-90" />
export const ArrowLeft15 = () => <Arrow height={15} width={15} />
