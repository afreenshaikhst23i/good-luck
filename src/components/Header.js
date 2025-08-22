import Link from "next/link";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from "next/image";

function Header () {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    useEffect(() => {
        if (menuOpen) {
        document.body.style.position = 'fixed';
        } else {
        document.body.style.position = '';
        }
        return () => {
        document.body.style.position = '';
        };
    }, [menuOpen]);

    return (
        <header className="header-main">
            <nav className={`topnav${menuOpen ? " open" : ""}`} id="myTopnav">
                <div className="logo-wrapper">
                    <Link href="/" className="brand-logo">
                        <Image 
                            src="/images/logo/black-logo-tagline.svg" 
                            alt="Good Luck Digital Photo Studio Logo" 
                            priority
                            placeholder="empty"
                            width={281} height={112} />
                    </Link>
                    <button className="icon" onClick={toggleMenu} aria-label="Toggle Menu">
                        <span className="sr-only">Toggle Menu</span>
                        <svg aria-hidden="true" width="28" height="28" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                        </svg>
                    </button>
                </div>
                <div className="menu-wrapper">
                    <Link href="/" className={`nav-item ${router.pathname === '/' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/portfolio" className={`nav-item ${router.pathname === '/portfolio' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Portfolio</Link>
                    <Link href="/services" className={router.pathname === '/services' ? 'nav-item active' : 'nav-item'} onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link href="/about" className={router.pathname === '/about' ? 'nav-item active' : 'nav-item'} onClick={() => setMenuOpen(false)}>About Us</Link>
                    <Link href="/contact" className={router.pathname === '/contact' ? 'nav-item active' : 'nav-item'} onClick={() => setMenuOpen(false)}>Contact Us</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;