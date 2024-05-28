import {Link as MuiLink} from "@mui/material"

interface LinkProps {
    children: string;
    linkType: 'primary' | 'secondary';
    underline: 'none' | 'hover' | 'always';
}

function Link({ children, linkType, underline }: LinkProps) {
    let Text = "Don't have an account?";

    return (
    <div>
        {linkType === 'secondary' ? <span style={{fontSize: '14px'}}>{Text}</span> : null}
        <MuiLink underline={underline}>
            {children}
        </MuiLink>
    </div>
    );
};

export default Link;
