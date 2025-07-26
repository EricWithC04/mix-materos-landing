import { useEffect, useState } from "react";

export const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`flex justify-between ${scrolled ? "bg-white/20 backdrop-blur-md shadow" : "" } transition text-white px-8 py-6 fixed w-full z-50`}>
            <div className="flex items-center gap-2">
                <h1 className={`text-3xl font-bold ${scrolled ? "text-neutral-400": "text-white"} transition`}>MixMateros</h1>
            </div>
            <div className="flex items-center">
                <ul className="flex gap-4 items-center [&>li]:font-semibold">
                    <li>
                        <a href="#contact" className={`${scrolled ? "text-neutral-400": "text-white"} transition`}>Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}