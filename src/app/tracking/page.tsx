"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Star, Clock, Navigation, Shield, MapPin, Truck, CheckCircle2, Package } from "lucide-react";
import { Timeline } from "@/components/timeline";

const trackingSteps = [
    { icon: Package, title: "Order Confirmed", description: "Driver being allocated", status: "completed" as const },
    { icon: Truck, title: "Driver Heading to Location", description: "Mr. Budi is on the way", status: "active" as const },
    { icon: MapPin, title: "Arrived at Location", description: "Waiting for presence confirmation", status: "pending" as const },
    { icon: CheckCircle2, title: "Completed", description: "Waste successfully picked up", status: "pending" as const },
];

export default function TrackingPage() {
    const [eta, setEta] = useState(12);

    useEffect(() => {
        const interval = setInterval(() => setEta((prev) => (prev > 1 ? prev - 1 : 1)), 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pt-20 pb-24 md:pb-12 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Tracking Pickup</h1>
                    <p className="text-gray-500 mt-1 text-sm">Order #PY-2026-0847</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-eco-100 shadow-card bg-eco-50" style={{ minHeight: 320 }}>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative"><motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 w-16 h-16 rounded-full bg-eco-400 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" /><div className="relative w-12 h-12 rounded-full gradient-eco shadow-eco-lg flex items-center justify-center border-4 border-white z-10"><Navigation className="w-5 h-5 text-white" /></div></div>
                        </div>
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300"><motion.circle cx="120" cy="200" r="6" fill="hsl(142, 71%, 45%)" opacity="0.3" animate={{ r: [6, 10, 6] }} transition={{ repeat: Infinity, duration: 2, delay: 0 }} /><motion.circle cx="160" cy="170" r="4" fill="hsl(142, 71%, 45%)" opacity="0.2" animate={{ r: [4, 7, 4] }} transition={{ repeat: Infinity, duration: 2, delay: 0.3 }} /><motion.circle cx="200" cy="150" r="5" fill="hsl(142, 71%, 45%)" opacity="0.25" animate={{ r: [5, 8, 5] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }} /><circle cx="280" cy="120" r="8" fill="hsl(38, 92%, 50%)" opacity="0.5" /><text x="280" y="108" textAnchor="middle" fontSize="10" fill="hsl(38, 92%, 35%)" fontWeight="bold">📍</text></svg>
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-4 right-4 bg-white rounded-xl px-4 py-2 shadow-card-hover border border-eco-100"><div className="flex items-center gap-2"><Clock className="w-4 h-4 text-eco-600" /><div><div className="text-xs text-gray-400">Estimated Arrival</div><div className="text-sm font-bold text-eco-700">{eta} min</div></div></div></motion.div>
                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /><span className="text-xs font-semibold text-gray-700">LIVE</span></div>
                    </motion.div>

                    <div className="lg:col-span-2 space-y-4">
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-5 shadow-card border border-gray-100">
                            <div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 rounded-2xl bg-eco-100 flex items-center justify-center text-2xl">🧑‍💼</div><div className="flex-1"><h3 className="font-bold text-gray-900">Mr. Budi Santoso</h3><div className="flex items-center gap-1 mt-0.5"><Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /><span className="text-sm text-gray-600 font-medium">4.9</span><span className="text-xs text-gray-400">(342 trips)</span></div></div><div className="flex items-center gap-1"><Shield className="w-4 h-4 text-eco-500" /><span className="text-[10px] text-eco-600 font-semibold">Verified</span></div></div>
                            <div className="text-sm text-gray-500 mb-4 flex items-center gap-2"><Truck className="w-4 h-4 text-gray-400" /><span>Motorcycle - B 1234 XYZ</span></div>
                            <div className="flex gap-3"><button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-eco-50 text-eco-700 font-semibold text-sm hover:bg-eco-100 transition-colors"><Phone className="w-4 h-4" />Call</button><button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl gradient-eco text-white font-semibold text-sm shadow-eco hover:shadow-eco-lg transition-all"><MessageCircle className="w-4 h-4" />Chat</button></div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-2xl p-5 shadow-card border border-gray-100"><h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Status</h3><Timeline steps={trackingSteps} variant="vertical" /></motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
