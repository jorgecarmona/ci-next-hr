import {Link as MuiLink} from "@mui/material"

interface LinkProps {
    children: string;
    underline?: 'none' | 'hover' | 'always';
}

function Link({ children, underline = 'none' }: LinkProps) {
    return (
        <MuiLink underline={underline}>
            {children}
        </MuiLink>
    );
};

export default Link;
