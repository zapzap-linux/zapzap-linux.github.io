export const navigation = [
    { name: "Início", href: "/" },
    { name: "Doações", href: "/#donate" },
];


function Navbar() {

    return (
        <nav className="fixed p-3 px-6 tracking-wide flex flex-row gap-x-8 justify-start w-full bg-slate-50/50 backdrop-blur-lg shadow-lg">
            <div className="flex flex-row gap-x-8">
                {navigation.map((item) => (
                    <a key={item.name} href={item.href}>
                        <p className="font-mono text-sm hover:font-extrabold text-green-500 hover:scale-110">
                            {item.name}
                        </p>
                    </a>
                ))}
            </div>

        </nav>
    );
}


export default Navbar;