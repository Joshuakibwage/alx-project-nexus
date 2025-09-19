"use client";
import ModeToggle from "@/components/shared/ModeToggle";
import { Heart } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/contstants/page";
import { usePathname } from "next/navigation";


const Navbar = () => {

    const pathname = usePathname();


    return (
        <header className="">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div>
                    <Link href="/">
                        Quick Cart
                    </Link>
                </div>

                <nav className="">
                    <ul className="flex gap-4">
                       {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.path}
                                        className={`px-3 py-2 rounded-md transition ${
                                            pathname === link.path
                                            ? "bg-blue-500 text-white"
                                            : "hover:bg-gray-100"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))
                       }
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <Heart />
                    <ModeToggle />
                </div>
            </div>
            
            
           
        </header>
    )
}

export default Navbar;