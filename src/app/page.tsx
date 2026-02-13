"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Recycle, Truck, Gift, MapPin, Shield, Clock, Leaf, ArrowRight, Star, CheckCircle2, Package } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { StatsBadge } from "@/components/stats-badge";
import { Timeline } from "@/components/timeline";

const features = [
  { icon: Truck, title: "Home Pickup", description: "Our drivers come straight to your location. No need to leave your home." },
  { icon: Gift, title: "Earn Rewards", description: "Every pickup earns you reward points that can be exchanged for exciting prizes." },
  { icon: MapPin, title: "Real-Time Tracking", description: "Track driver's position live from pickup to completion." },
  { icon: Shield, title: "Safe & Trusted", description: "Verified drivers with ratings and reviews from user community." },
  { icon: Clock, title: "Flexible Schedule", description: "Choose pickup time that fits your schedule — daily or weekly." },
  { icon: Leaf, title: "Environmental Impact", description: "See your contribution to waste reduction and carbon emission." },
];

const howItWorks = [
  { icon: Package, title: "Sort Your Waste", description: "Separate organic, inorganic, and recyclable at home.", status: "completed" as const },
  { icon: Clock, title: "Schedule Pickup", description: "Choose schedule and service via app. Daily or weekly available.", status: "completed" as const },
  { icon: Truck, title: "Driver Picks Up", description: "Nearest driver comes to your location. Real-time tracking available.", status: "active" as const },
  { icon: Gift, title: "Get Rewards", description: "Reward points added automatically. Exchange for vouchers or donate.", status: "pending" as const },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative gradient-hero min-h-screen flex items-center pt-20 pb-12 md:pb-20">
        <div className="absolute top-20 right-0 w-72 h-72 bg-eco-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-eco-100/40 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eco-100 text-eco-700 text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" /><span>#1 Waste Pickup Platform</span>
              </motion.div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4 md:mb-6">
                Sort Your Waste, <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-500 to-eco-700">Save The Planet</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Home waste pickup, earn rewards, and track drivers in real-time. Join thousands of eco-warriors making a difference!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/request" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-eco text-white font-semibold shadow-eco hover:shadow-eco-lg transition-all duration-300 hover:-translate-y-1 text-base">
                  Order Pickup<ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-eco-700 font-semibold border-2 border-eco-200 hover:border-eco-400 hover:bg-eco-50 transition-all duration-300 text-base">
                  View Plans
                </Link>
              </div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
                <div className="flex -space-x-2">{[1, 2, 3, 4].map((i) => (<div key={i} className="w-8 h-8 rounded-full bg-eco-200 border-2 border-white flex items-center justify-center text-xs font-bold text-eco-700">{String.fromCharCode(64 + i)}</div>))}</div>
                <div className="text-sm"><div className="flex items-center gap-1 text-amber-500">{[...Array(5)].map((_, i) => (<Star key={i} className="w-3.5 h-3.5 fill-current" />))}</div><span className="text-gray-500">4.9/5 from 2,000+ reviews</span></div>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex-1 w-full max-w-md lg:max-w-lg">
              <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-card-hover border border-eco-100">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-eco-100 to-eco-50 flex items-center justify-center">
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}><Recycle className="w-24 h-24 md:w-32 md:h-32 text-eco-500" /></motion.div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">{[{ label: "Pickups", value: "150+" }, { label: "Rating", value: "4.9★" }, { label: "kgCO₂", value: "-80" }].map((s) => (<div key={s.label} className="text-center p-2 rounded-xl bg-eco-50"><div className="text-sm font-bold text-eco-700">{s.value}</div><div className="text-[10px] text-gray-500">{s.label}</div></div>))}</div>
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }} className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-card-hover border border-eco-100">
                  <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full gradient-eco flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-white" /></div><div><div className="text-xs font-semibold text-gray-900">Waste Picked Up!</div><div className="text-[10px] text-gray-500">+50 reward points</div></div></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 md:py-16 border-b border-gray-100"><div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8"><div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"><StatsBadge value={15000} suffix="+" label="Active Users" delay={0} /><StatsBadge value={50000} suffix="+" label="Pickups Completed" delay={0.1} /><StatsBadge value={120} suffix=" tons" label="CO₂ Reduced" delay={0.2} /><StatsBadge value={98} suffix="%" label="User Satisfaction" delay={0.3} /></div></div></section>

      {/* FEATURES */}
      <section className="py-16 md:py-24 gradient-eco-soft"><div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16"><span className="text-eco-600 text-sm font-semibold uppercase tracking-wider">Key Features</span><h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Everything You Need</h2><p className="text-gray-500 max-w-2xl mx-auto">Complete platform to manage waste easily, safely, and rewarding.</p></motion.div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">{features.map((f, i) => (<FeatureCard key={f.title} {...f} delay={i * 0.1} />))}</div></div></section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-24"><div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16"><span className="text-eco-600 text-sm font-semibold uppercase tracking-wider">How It Works</span><h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2 mb-4">4 Easy Steps</h2><p className="text-gray-500 max-w-2xl mx-auto">From sorting waste to earning rewards — all done in 4 simple steps.</p></motion.div><div className="max-w-4xl mx-auto"><Timeline steps={howItWorks} variant="responsive" /></div></div></section>

      {/* CTA */}
      <section className="py-16 md:py-24"><div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8"><motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl gradient-eco p-8 md:p-12 lg:p-16 text-center text-white"><div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" /><div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" /><div className="relative z-10"><h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">Ready To Start Sorting?</h2><p className="text-eco-100 text-base md:text-lg mb-8 max-w-xl mx-auto">Join now and start earning rewards while protecting the environment. Free to start!</p><Link href="/request" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-eco-700 font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">Start Now — Free!<ArrowRight className="w-5 h-5" /></Link></div></motion.div></div></section>
    </div>
  );
}
