import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

type NavLinkProps = {
    href: string;
    children: React.ReactNode
}

function NavLink(props: NavLinkProps) {
    const {children, href} = props;
    const path: string = usePathname();
    return (
        <Link href={href} className={path.startsWith(href) ? 'active link' : 'link'}>
            {children}
        </Link>
    );
}

export default NavLink;