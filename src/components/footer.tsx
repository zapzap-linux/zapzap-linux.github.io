import { Footer as FooterFlowbite } from 'flowbite-react';
import logo from '/zapzap-icon.svg'
import { navigationLinks } from './navbar';


function Footer() {
    return (
        <FooterFlowbite container
            className='bg-light dark:bg-dark rounded-none'>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <FooterFlowbite.Brand
                        alt="Flowbite Logo"
                        href="#home"
                        name="ZapZap"
                        src={logo}
                    />
                    <FooterFlowbite.LinkGroup className='gap-x-2'>
                        {navigationLinks.map((item) => (
                            <FooterFlowbite.Link key={item.name} href={item.href}
                                className='text-sm font-normal hover:font-bold hover:scale-105 text-dark dark:text-light'>
                                {item.name}
                            </FooterFlowbite.Link>
                        ))}
                    </FooterFlowbite.LinkGroup>
                </div>
                <FooterFlowbite.Divider />
                <FooterFlowbite.Copyright
                    by="by Rafael Tosta"
                    href="https://rtosta.vercel.app/"
                    year={2023-2024}
                />
            </div>
        </FooterFlowbite>
    )
}

export default Footer;
