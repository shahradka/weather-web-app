import React from "react";
import "./styles.scss";
import { Cloud128 } from "@components/atoms/icons/Cloud";
import { Text } from "@components/atoms/text";

const Empty = () => {
    return <div className="empty">
        <div className="empty-inner">
            <Cloud128 />
            <div className="empty-space">
                <Text weight="bold" variant="normal">
                    Click On Load App Button
                </Text>
            </div>
        </div>
    </div>
}

export default Empty;