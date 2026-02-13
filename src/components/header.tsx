"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Recycle, Menu, X } from "lucide-react";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/request", label: "Order" },
    { href: "/tracking", label: "Tracking" },
    { href: "/profile", label: "Profile" },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "glass shadow-soft"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-18">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-xl gradient-eco flex items-center justify-center shadow-eco transition-transform duration-300 group-hover:scale-110">
                            <Recycle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-eco-800">
                            Pilah<span className="text-eco-500">Yuk</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${pathname === item.href
                                    ? "bg-eco-100 text-eco-700"
                                    : "text-gray-600 hover:text-eco-600 hover:bg-eco-50"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/request"
                            className="ml-3 px-5 py-2.5 rounded-xl gradient-eco text-white text-sm font-semibold shadow-eco transition-all duration-300 hover:shadow-eco-lg hover:-translate-y-0.5"
                        >
                            Order Pickup
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center hover:bg-eco-50 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-eco-100"
                    >
                        <nav className="px-4 py-3 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${pathname === item.href
                                        ? "bg-eco-100 text-eco-700"
                                        : "text-gray-600 hover:bg-eco-50"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
