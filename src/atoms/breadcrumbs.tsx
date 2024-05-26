import React from 'react';
import {Breadcrumbs as MuiBreadcrumbs, BreadcrumbsProps as MuiBreadcrumbsProps} from '@mui/material';
import Link from '@mui/material/Link';

interface NavigationItem {
    label?: string;
    path?: string;
}

interface BreadcrumbProps extends MuiBreadcrumbsProps {
    separator?: string | JSX.Element;
    items: NavigationItem[];
}

function BreadCrumbs({ separator, items }: BreadcrumbProps) {
    if (items.length === 0) {
        return null; // No renderiza nada si no hay items
    }

    return (
        <MuiBreadcrumbs separator={separator} data-testid="breadcrumbs-container">
            {items.map((item, index) => (
                <Link key={index} href={item.path ?? '#'} underline="hover" color="inherit" >
                {item.label}
                </Link>
            ))}
        </MuiBreadcrumbs>
    );
};

export default BreadCrumbs;