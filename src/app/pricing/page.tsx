"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Crown, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { PricingCard } from "@/components/pricing-card";
import { StatsBadge } from "@/components/stats-badge";

const tiers = [
    { icon: Zap, name: "Free", price: "$0", period: "month", description: "Start sorting waste at no cost", popular: false, features: [{ text: "2x pickups per month", included: true }, { text: "Basic tracking", included: true }, { text: "Base reward points", included: true }, { text: "Flexible schedule", included: false }, { text: "Priority queue", included: false }, { text: "Environmental impact report", included: false }], ctaText: "Start Free" },
    { icon: Sparkles, name: "Regular", price: "$9", period: "month", description: "For eco-conscious families", popular: true, features: [{ text: "8x pickups per month", included: true }, { text: "Real-time tracking", included: true }, { text: "2x reward points", included: true }, { text: "Flexible schedule", included: true }, { text: "Priority queue", included: true }, { text: "Environmental impact report", included: false }], ctaText: "Choose Regular" },
    { icon: Crown, name: "Premium", price: "$19", period: "month", description: "Unlimited access for eco-warriors", popular: false, features: [{ text: "Unlimited pickups", included: true }, { text: "Real-time tracking + ETA", included: true }, { text: "3x reward points", included: true }, { text: "Flexible schedule", included: true }, { text: "VIP priority queue", included: true }, { text: "Environmental impact report", included: true }], ctaText: "Go Premium" },
];

const comparisonData = [
    { feature: "Pickups per month", free: "2x", regular: "8x", premium: "Unlimited" },
    { feature: "Tracking", free: "Basic", regular: "Real-time", premium: "Real-time + ETA" },
    { feature: "Reward points", free: "1x", regular: "2x", premium: "3x" },
    { feature: "Schedule", free: "Weekday", regular: "Flexible", premium: "Flexible + Weekend" },
    { feature: "Queue priority", free: "Normal", regular: "Priority", premium: "VIP" },
    { feature: "CO₂ report", free: "—", regular: "Monthly", premium: "Real-time" },
    { feature: "Customer support", free: "Email", regular: "Chat", premium: "24/7 Dedicated" },
    { feature: "Referral bonus", free: "—", regular: "500 pts", premium: "1000 pts" },
];

const faqs = [
    { q: "How do I get started?", a: "Simply sign up for free, choose your service, schedule pickup time, and our driver will come to your location. It's that easy!" },
    { q: "Can I change plans mid-month?", a: "Absolutely! You can upgrade anytime. The fee is prorated. Downgrades take effect in the next billing period." },
    { q: "What happens to collected waste?", a: "Waste is sorted at our facility. Recyclables go through recycling process, organic waste is composted, and the rest is managed responsibly." },
    { q: "What can I exchange reward points for?", a: "Points can be exchanged for shopping vouchers, mobile credit, donations to environmental programs, or exclusive PilahYuk merchandise." },
    { q: "Which areas do you serve?", a: "We currently serve Greater Jakarta, Bandung, Surabaya, and Yogyakarta. Expansion to other cities coming soon!" },
];

export default function PricingPage() {
    const [showComparison, setShowComparison] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="pt-20 pb-12">
            <section className="relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-r from-eco-600 via-eco-500 to-eco-600" /><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 text-center"><p className="text-white text-sm md:text-base font-medium">🎉 <strong>Special Promo!</strong> 50% off for first 3 months on Regular & Premium plans. <span className="underline underline-offset-2 cursor-pointer">Claim now →</span></p></motion.div></section>

            <section className="py-12 md:py-20 gradient-eco-soft"><div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center"><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}><span className="text-eco-600 text-sm font-semibold uppercase tracking-wider">Pricing</span><h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2 mb-4">Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-500 to-eco-700">Perfect Plan</span></h1><p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">Start free! Upgrade anytime for more features and bigger rewards.</p></motion.div></div></section>

            <section className="py-8 border-b border-gray-100"><div className="max-w-5xl mx-auto px-4"><div className="grid grid-cols-3 gap-4"><StatsBadge value={15000} suffix="+" label="Active Users" delay={0} /><StatsBadge value={92} suffix="%" label="Choose Regular" delay={0.1} /><StatsBadge value={4.9} suffix="★" label="Rating" delay={0.2} /></div></div></section>

            <section className="py-12 md:py-20"><div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">{tiers.map((tier, i) => (<PricingCard key={tier.name} {...tier} delay={i * 0.15} />))}</div></div></section>

            <section className="py-8 md:py-12"><div className="max-w-5xl mx-auto px-4 md:px-6"><button onClick={() => setShowComparison(!showComparison)} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-eco-50 text-eco-700 font-semibold hover:bg-eco-100 transition-colors">{showComparison ? "Hide" : "View"} Full Comparison{showComparison ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}</button><AnimatePresence>{showComparison && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden"><div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full text-sm"><thead><tr className="bg-eco-50"><th className="text-left p-4 font-semibold text-gray-700">Feature</th><th className="text-center p-4 font-semibold text-gray-700">Free</th><th className="text-center p-4 font-semibold text-eco-700 bg-eco-100">Regular ⭐</th><th className="text-center p-4 font-semibold text-gray-700">Premium</th></tr></thead><tbody>{comparisonData.map((row, i) => (<tr key={i} className="border-t border-gray-100 hover:bg-gray-50 transition-colors"><td className="p-4 text-gray-700 font-medium">{row.feature}</td><td className="p-4 text-center text-gray-500">{row.free}</td><td className="p-4 text-center text-eco-700 font-medium bg-eco-50/50">{row.regular}</td><td className="p-4 text-center text-gray-500">{row.premium}</td></tr>))}</tbody></table></div></motion.div>)}</AnimatePresence></div></section>

            <section id="faq" className="py-12 md:py-20 gradient-eco-soft"><div className="max-w-3xl mx-auto px-4 md:px-6"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-14"><span className="text-eco-600 text-sm font-semibold uppercase tracking-wider">FAQ</span><h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">Frequently Asked Questions</h2></motion.div><div className="space-y-3">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-card"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-eco-50/50 transition-colors"><span className="font-semibold text-gray-900 pr-4">{faq.q}</span><ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} /></button><AnimatePresence>{openFaq === i && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden"><p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p></motion.div>)}</AnimatePresence></motion.div>))}</div></div></section>
        </div>
    );
}
