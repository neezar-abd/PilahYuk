import Link from "next/link";
import { Recycle, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
    Services: [
        { label: "Waste Pickup", href: "/request" },
        { label: "Tracking", href: "/tracking" },
        { label: "Pricing", href: "/pricing" },
        { label: "Rewards", href: "/profile" },
    ],
    Company: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" },
    ],
    Legal: [
        { label: "Terms & Conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "FAQ", href: "/pricing#faq" },
    ],
};

export function Footer() {
    return (
        <footer className="hidden md:block bg-eco-900 text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-eco-500 flex items-center justify-center">
                                <Recycle className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">
                                Pilah<span className="text-eco-400">Yuk</span>
                            </span>
                        </Link>
                        <p className="text-eco-200/70 text-sm leading-relaxed mb-4">
                            Eco-friendly waste pickup platform with reward system for a greener future.
                        </p>
                        <div className="space-y-2 text-sm text-eco-200/60">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>hello@pilahyuk.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <span>+62 821-1234-5678</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Jakarta, Indonesia</span>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="text-sm font-semibold text-eco-300 uppercase tracking-wider mb-4">
                                {title}
                            </h3>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-eco-200/60 hover:text-white transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-eco-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-eco-200/50">
                            © 2026 PilahYuk. All rights reserved.
                        </p>
                        <p className="text-sm text-eco-200/50">
                            🌿 Together we protect the planet
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
