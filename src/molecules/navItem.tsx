import React from "react";
import {Button} from "../atoms";
import {Typography as MuiTypography} from "../atoms";
import {iconLookup} from "../atoms/icon-store";
import {IconType} from "../atoms/icon-store";

interface NavItemProps {
    icon: IconType,
    selected? :boolean,
    onClickCallBack: (value: string) => void,
    title: string,
}

function NavItem({icon, selected, onClickCallBack, title = ''} :NavItemProps){
const IconComponent = iconLookup[icon];
const selectedStyle = selected ? {borderBottom: "2px solid #666666", padding: "32px 0"} : {padding: "32px 0"};
const buttonId = title.toLowerCase();

    return(
        <span style={{ ...selectedStyle, borderLeft: "1px solid #EEEEEE", borderRight: "1px solid #EEEEEE"}}>
            <Button selected onClick={() => onClickCallBack(buttonId)}>
                <div style={{width: "91px", height:"76px", color:"#666666"}}>
                {IconComponent && <IconComponent/>}
                <MuiTypography variant="h6">
                    {title}
                </MuiTypography>
                </div>
            </Button>
        </span>
    )
};

export default NavItem;