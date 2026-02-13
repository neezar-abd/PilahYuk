"use client";

import { motion } from "framer-motion";
import { Gift, Star, Award, ArrowUpRight, Copy, Share2, Settings, LogOut, ChevronRight, TrendingUp, Leaf, Recycle } from "lucide-react";

const transactions = [
    { id: 1, type: "Organic Pickup", date: "Feb 10, 2026", points: "+50", status: "completed" },
    { id: 2, type: "Inorganic Pickup", date: "Feb 8, 2026", points: "+75", status: "completed" },
    { id: 3, type: "Referral Bonus", date: "Feb 5, 2026", points: "+200", status: "bonus" },
    { id: 4, type: "Redeem Voucher", date: "Feb 3, 2026", points: "-500", status: "redeemed" },
    { id: 5, type: "E-Waste Pickup", date: "Feb 1, 2026", points: "+100", status: "completed" },
    { id: 6, type: "Mixed Pickup", date: "Jan 28, 2026", points: "+30", status: "completed" },
];

const rewards = [
    { name: "Food Voucher $5", cost: 500, icon: "🍔" },
    { name: "Mobile Credit $3", cost: 300, icon: "📱" },
    { name: "Donate 1 Tree", cost: 200, icon: "🌳" },
    { name: "PilahYuk Merch", cost: 1000, icon: "👕" },
];

export default function ProfilePage() {
    return (
        <div className="pt-20 pb-24 md:pb-12 min-h-screen gradient-eco-soft">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden rounded-3xl gradient-eco p-6 md:p-8 text-white mb-6 shadow-eco-lg">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4"><div><p className="text-eco-100 text-sm font-medium">Total Points</p><h2 className="text-4xl md:text-5xl font-extrabold mt-1">1,250</h2></div><div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm"><Award className="w-4 h-4" /><span className="text-sm font-semibold">Silver</span></div></div>
                        <div className="flex items-center gap-6 text-sm"><div className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-eco-200" /><span className="text-eco-100">+325 this month</span></div><div className="flex items-center gap-1.5"><Leaf className="w-4 h-4 text-eco-200" /><span className="text-eco-100">45kg CO₂ saved</span></div></div>
                        <div className="mt-6"><div className="flex justify-between text-xs mb-1.5"><span className="text-eco-200">Silver Tier</span><span className="text-eco-200">750 pts to Gold</span></div><div className="h-2 bg-white/20 rounded-full overflow-hidden"><motion.div className="h-full bg-white rounded-full" initial={{ width: 0 }} animate={{ width: "62%" }} transition={{ duration: 1, delay: 0.5 }} /></div></div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="space-y-4">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-5 shadow-card border border-gray-100">
                            <div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 rounded-2xl bg-eco-100 flex items-center justify-center text-2xl">👤</div><div><h3 className="font-bold text-gray-900">Andy Pratama</h3><p className="text-sm text-gray-500">andy@email.com</p></div></div>
                            <div className="grid grid-cols-3 gap-3">{[{ label: "Pickups", value: "24" }, { label: "Months", value: "6" }, { label: "Streak", value: "12" }].map((s) => (<div key={s.label} className="text-center p-2 rounded-xl bg-eco-50"><div className="text-lg font-bold text-eco-700">{s.value}</div><div className="text-[10px] text-gray-500">{s.label}</div></div>))}</div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-5 shadow-card border border-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2"><Gift className="w-5 h-5 text-eco-500" />Referral Code</h3>
                            <div className="flex items-center gap-2 p-3 rounded-xl bg-eco-50 border border-eco-100"><code className="flex-1 text-sm font-bold text-eco-700 tracking-wider">ANDY-ECO2026</code><button className="p-2 rounded-lg hover:bg-eco-100 transition-colors"><Copy className="w-4 h-4 text-eco-600" /></button></div>
                            <p className="text-xs text-gray-500 mt-2">Invite friends & get 200 pts for each successful referral!</p>
                            <button className="w-full mt-3 py-2.5 rounded-xl bg-eco-50 text-eco-700 font-semibold text-sm hover:bg-eco-100 transition-colors flex items-center justify-center gap-2"><Share2 className="w-4 h-4" />Share</button>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100">{[{ icon: Settings, label: "Settings", color: "text-gray-600" }, { icon: LogOut, label: "Sign Out", color: "text-red-500" }].map((item) => { const I = item.icon; return (<button key={item.label} className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"><I className={`w-5 h-5 ${item.color}`} /><span className={`text-sm font-medium flex-1 text-left ${item.color}`}>{item.label}</span><ChevronRight className="w-4 h-4 text-gray-300" /></button>); })}</motion.div>
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-5 shadow-card border border-gray-100">
                            <div className="flex items-center justify-between mb-4"><h3 className="font-bold text-gray-900 flex items-center gap-2"><Star className="w-5 h-5 text-amber-400" />Redeem Rewards</h3><button className="text-sm text-eco-600 font-semibold hover:text-eco-700 flex items-center gap-1">View all<ArrowUpRight className="w-3.5 h-3.5" /></button></div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{rewards.map((r) => (<button key={r.name} className="p-4 rounded-xl border border-gray-100 hover:border-eco-200 hover:shadow-card transition-all text-center group"><div className="text-3xl mb-2">{r.icon}</div><div className="text-xs font-semibold text-gray-900 mb-1">{r.name}</div><div className="text-xs text-eco-600 font-bold">{r.cost} pts</div></button>))}</div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-5 shadow-card border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Recycle className="w-5 h-5 text-eco-500" />Activity History</h3>
                            <div className="space-y-2">{transactions.map((tx) => (<div key={tx.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"><div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.status === "bonus" ? "bg-amber-100" : tx.status === "redeemed" ? "bg-purple-100" : "bg-eco-100"}`}>{tx.status === "bonus" ? <Gift className="w-5 h-5 text-amber-600" /> : tx.status === "redeemed" ? <Star className="w-5 h-5 text-purple-600" /> : <Recycle className="w-5 h-5 text-eco-600" />}</div><div className="flex-1"><div className="text-sm font-semibold text-gray-900">{tx.type}</div><div className="text-xs text-gray-400">{tx.date}</div></div><div className={`text-sm font-bold ${tx.points.startsWith("+") ? "text-eco-600" : "text-red-500"}`}>{tx.points}</div></div>))}</div>
                            <button className="w-full mt-4 py-2.5 rounded-xl bg-gray-50 text-gray-600 font-semibold text-sm hover:bg-gray-100 transition-colors">View All History</button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
