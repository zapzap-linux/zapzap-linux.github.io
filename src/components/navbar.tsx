import { Navbar as NavbarFlowbite } from 'flowbite-react';
import logo from '/zapzap-icon.svg'

export const navigationLinks = [
    { name: "Home", href: "/#home" },
    { name: "Features", href: "/#features" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Download", href: "/#download" },
    { name: "Donate", href: "/#donate" },
];

export function Navbar() {

    return (
        < NavbarFlowbite fluid rounded
            className='fixed w-full bg-light dark:bg-dark shadow-sm'>
            <NavbarFlowbite.Brand href="#home">
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="ZapZap Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold text-dark dark:text-light">ZapZap</span>
            </NavbarFlowbite.Brand>
            <NavbarFlowbite.Toggle />
            <NavbarFlowbite.Collapse>
                {navigationLinks.map((item) => (
                    <NavbarFlowbite.Link key={item.name} href={item.href}
                        className='text-base font-normal hover:font-bold hover:scale-105 text-dark dark:text-light'>
                        {item.name}
                    </NavbarFlowbite.Link>
                ))}
            </NavbarFlowbite.Collapse>
        </NavbarFlowbite >


    );
}
