"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, MapPin, CreditCard, User } from "lucide-react";

const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/request", label: "Order", icon: Package },
    { href: "/tracking", label: "Track", icon: MapPin },
    { href: "/pricing", label: "Price", icon: CreditCard },
    { href: "/profile", label: "Profile", icon: User },
];

export function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-gray-200/50">
            <div className="flex items-center justify-around h-16 px-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center gap-0.5 py-1 px-3 rounded-xl transition-all duration-200 ${active
                                    ? "text-eco-600"
                                    : "text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            <div
                                className={`p-1.5 rounded-xl transition-all duration-200 ${active ? "bg-eco-100" : ""
                                    }`}
                            >
                                <Icon className="w-5 h-5" strokeWidth={active ? 2.5 : 2} />
                            </div>
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
