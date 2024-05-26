import React from 'react';

import Link from '@mui/material/Link';

interface UnderlineLinkProps {
    children: string;
    linkType: 'primary' | 'secondary' | 'default';
    underline: 'none' | 'hover' | 'always';
}

function UnderlineLink({ children, linkType, underline }: UnderlineLinkProps) {
    let Text = "Don't have an account?";

    return (
    <div>
        {linkType === 'secondary' ? <span>{Text}</span> : null}
        <Link underline={underline}>
            {children}
        </Link>
    </div>
    );
};

export default UnderlineLink;
