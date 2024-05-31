import {Button, Typography} from "../atoms";
import {iconLookup, IconType} from "../atoms/icon-store";

interface NavItemProps {
    icon: IconType, 
    selected? :boolean,
    onClickCallBack: (value: string) => void,
    title?: string,
}

function NavItem({icon, selected, onClickCallBack, title = ''} :NavItemProps){
const IconComponent = iconLookup[icon];
const selectedStyle = selected ? {borderBottom: "2px solid #666666"} : {};
const buttonId = title.toLowerCase();

    return(
        <span style={{ ...selectedStyle, borderLeft: "1px solid #EEEEEE", borderRight: "1px solid #EEEEEE", padding: "32px 0"}}>
            <Button selected onClick={() => onClickCallBack(buttonId)}>
                <div style={{width: "91px", height:"76px", color:"#666666"}}>
                {<IconComponent/>}
                <Typography variant="h6">
                    {title.toUpperCase()}
                </Typography>
                </div>
            </Button>
        </span>
    )
};

export default NavItem;