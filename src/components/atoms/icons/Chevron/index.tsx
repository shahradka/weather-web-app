import React from "react"
import Icon, { IIcon } from "../Icon";

const Chevron = ({height, width, rotation}:IIcon) => {
    return <Icon height={height} width={width} rotation={rotation}>
            <path d="M12.8485 8.46L12.0001 7.6116L5.21167 14.4L6.90847 16.0968L12.0001 11.0064L17.0917 16.0968L18.7885 14.4L12.8485 8.46Z" fill="currentColor"/>
        </Icon>


}

export const ChevronUp64 = () => <Chevron height={64} width={64} />
export const ChevronRight64 = () => <Chevron height={64} width={64} rotation="90" />
export const ChevronDown64 = () => <Chevron height={64} width={64}  rotation="180" />
export const ChevronLeft64 = () => <Chevron height={64} width={64}  rotation="-90" />
export const ChevronUp32 = () => <Chevron height={32} width={32} />
export const ChevronRight32 = () => <Chevron height={32} width={32} rotation="90" />
export const ChevronDown32 = () => <Chevron height={32} width={32}  rotation="180" />
export const ChevronLeft32 = () => <Chevron height={32} width={32}  rotation="-90" />
export const ChevronUp24 = () => <Chevron height={24} width={24}  />
export const ChevronRight24 = () => <Chevron height={24} width={24} rotation="90" />
export const ChevronDown24 = () => <Chevron height={24} width={24} rotation="180" />
export const ChevronLeft24 = () => <Chevron height={24} width={24}  rotation="-90" />
export const ChevronUp15 = () => <Chevron height={15} width={15}  />
export const ChevronRight15 = () => <Chevron height={15} width={15} rotation="90" />
export const ChevronDown15 = () => <Chevron height={15} width={15}  rotation="180" />
export const ChevronLeft15 = () => <Chevron height={15} width={15} rotation="-90"/>