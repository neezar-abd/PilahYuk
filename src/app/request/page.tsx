"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, Calendar, MapPin, CheckCircle2, ArrowRight, ArrowLeft, Recycle, Leaf, Truck, Clock, Sparkles } from "lucide-react";

const services = [
    { id: "organic", icon: Leaf, name: "Organic Waste", desc: "Food scraps, leaves, and natural materials", color: "from-green-400 to-green-600" },
    { id: "anorganic", icon: Recycle, name: "Inorganic Waste", desc: "Plastic, glass, cans, and recyclables", color: "from-blue-400 to-blue-600" },
    { id: "electronic", icon: Sparkles, name: "E-Waste", desc: "Used electronics, batteries, electrical components", color: "from-purple-400 to-purple-600" },
    { id: "mixed", icon: Truck, name: "Mixed (All Types)", desc: "Not sorted yet? We'll help sort it for you", color: "from-amber-400 to-orange-500" },
];

const timeSlots = ["08:00-10:00", "10:00-12:00", "13:00-15:00", "15:00-17:00", "17:00-19:00"];
const stepDefs = [{ icon: Package, label: "Service" }, { icon: Calendar, label: "Schedule" }, { icon: MapPin, label: "Address" }, { icon: CheckCircle2, label: "Confirm" }];

export default function RequestPage() {
    const [step, setStep] = useState(0);
    const [service, setService] = useState<string | null>(null);
    const [date, setDate] = useState<string | null>(null);
    const [time, setTime] = useState<string | null>(null);
    const [address, setAddress] = useState("");
    const [notes, setNotes] = useState("");

    const canNext = step === 0 ? !!service : step === 1 ? !!date && !!time : step === 2 ? address.trim().length > 10 : true;
    const dates = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(); d.setDate(d.getDate() + i + 1);
        return { value: d.toISOString().split("T")[0], day: d.toLocaleDateString("en-US", { weekday: "short" }), date: d.getDate(), month: d.toLocaleDateString("en-US", { month: "short" }) };
    });
    const svc = services.find((s) => s.id === service);

    return (
        <div className="pt-20 pb-24 md:pb-12 min-h-screen gradient-eco-soft">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Schedule a Pickup</h1>
                    <p className="text-gray-500 mt-2">Fill out the form below to order waste pickup</p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-5xl mx-auto">
                    <div className="lg:w-64 flex-shrink-0">
                        <div className="lg:hidden flex items-center justify-between mb-6">{stepDefs.map((s, i) => { const I = s.icon; return (<div key={i} className="flex items-center flex-1"><div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${i < step ? "gradient-eco shadow-eco" : i === step ? "bg-eco-100 border-2 border-eco-500" : "bg-gray-100"}`}><I className={`w-5 h-5 ${i < step ? "text-white" : i === step ? "text-eco-600" : "text-gray-400"}`} /></div>{i < stepDefs.length - 1 && <div className={`flex-1 h-0.5 mx-1 ${i < step ? "bg-eco-400" : "bg-gray-200"}`} />}</div>); })}</div>
                        <div className="hidden lg:block bg-white rounded-2xl p-6 shadow-card border border-gray-100 sticky top-24"><h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Progress</h3>{stepDefs.map((s, i) => { const I = s.icon; return (<div key={i} className="flex items-center gap-3 mb-4 last:mb-0"><div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${i < step ? "gradient-eco shadow-eco" : i === step ? "bg-eco-100 border-2 border-eco-500" : "bg-gray-100"}`}>{i < step ? <CheckCircle2 className="w-5 h-5 text-white" /> : <I className={`w-5 h-5 ${i === step ? "text-eco-600" : "text-gray-400"}`} />}</div><div><div className={`text-sm font-semibold ${i === step ? "text-eco-700" : i < step ? "text-eco-600" : "text-gray-400"}`}>{s.label}</div><div className="text-[11px] text-gray-400">Step {i + 1}</div></div></div>); })}<div className="mt-6 pt-4 border-t border-gray-100"><div className="flex justify-between text-xs text-gray-500 mb-2"><span>Progress</span><span>{Math.round(((step + 1) / 4) * 100)}%</span></div><div className="h-2 bg-gray-100 rounded-full overflow-hidden"><motion.div className="h-full gradient-eco rounded-full" animate={{ width: `${((step + 1) / 4) * 100}%` }} transition={{ duration: 0.4 }} /></div></div></div>
                    </div>

                    <div className="flex-1">
                        <AnimatePresence mode="wait">
                            {step === 0 && (<motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-gray-100"><h2 className="text-xl font-bold text-gray-900 mb-1">Choose Service Type</h2><p className="text-sm text-gray-500 mb-6">Select the type of waste to pickup</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{services.map((sv) => { const I = sv.icon; return (<button key={sv.id} onClick={() => setService(sv.id)} className={`text-left p-5 rounded-2xl border-2 transition-all duration-300 ${service === sv.id ? "border-eco-500 bg-eco-50 shadow-eco" : "border-gray-100 hover:border-eco-200 hover:shadow-card"}`}><div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${sv.color} flex items-center justify-center mb-3 shadow-sm`}><I className="w-5 h-5 text-white" /></div><h3 className="font-semibold text-gray-900">{sv.name}</h3><p className="text-xs text-gray-500 mt-1">{sv.desc}</p></button>); })}</div></motion.div>)}
                            {step === 1 && (<motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-gray-100"><h2 className="text-xl font-bold text-gray-900 mb-1">Select Schedule</h2><p className="text-sm text-gray-500 mb-6">Choose date and time for pickup</p><h3 className="text-sm font-semibold text-gray-700 mb-3">Date</h3><div className="flex gap-3 overflow-x-auto pb-2 mb-6">{dates.map((d) => (<button key={d.value} onClick={() => setDate(d.value)} className={`flex-shrink-0 w-16 py-3 rounded-2xl text-center border-2 transition-all ${date === d.value ? "border-eco-500 bg-eco-50" : "border-gray-100 hover:border-eco-200"}`}><div className="text-[10px] text-gray-400 uppercase font-medium">{d.day}</div><div className="text-lg font-bold text-gray-900">{d.date}</div><div className="text-[10px] text-gray-400">{d.month}</div></button>))}</div><h3 className="text-sm font-semibold text-gray-700 mb-3">Time</h3><div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{timeSlots.map((t) => (<button key={t} onClick={() => setTime(t)} className={`py-3 rounded-xl text-sm font-medium border-2 transition-all flex items-center justify-center gap-2 ${time === t ? "border-eco-500 bg-eco-50 text-eco-700" : "border-gray-100 text-gray-600 hover:border-eco-200"}`}><Clock className="w-4 h-4" />{t}</button>))}</div></motion.div>)}
                            {step === 2 && (<motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-gray-100"><h2 className="text-xl font-bold text-gray-900 mb-1">Address Details</h2><p className="text-sm text-gray-500 mb-6">Enter complete address for pickup</p><div className="w-full h-40 md:h-56 rounded-2xl bg-eco-50 border border-eco-100 flex items-center justify-center mb-6"><div className="text-center"><MapPin className="w-8 h-8 text-eco-400 mx-auto mb-2" /><p className="text-sm text-eco-600 font-medium">Pick on map</p></div></div><div className="space-y-4"><div><label className="text-sm font-semibold text-gray-700 block mb-1.5">Full Address <span className="text-red-500">*</span></label><textarea value={address} onChange={(e) => setAddress(e.target.value)} rows={3} placeholder="e.g., 10 Sudirman St, RT 05/RW 02..." className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20 outline-none text-sm transition-all resize-none" /></div><div><label className="text-sm font-semibold text-gray-700 block mb-1.5">Additional Notes</label><input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Near shop, green fence..." className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20 outline-none text-sm transition-all" /></div></div></motion.div>)}
                            {step === 3 && (<motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-gray-100"><h2 className="text-xl font-bold text-gray-900 mb-1">Confirm Order</h2><p className="text-sm text-gray-500 mb-6">Review your pickup details</p><div className="space-y-4">{[{ label: "Service", value: svc?.name || "-", icon: svc?.icon || Package }, { label: "Date", value: date ? new Date(date).toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long" }) : "-", icon: Calendar }, { label: "Time", value: time || "-", icon: Clock }, { label: "Address", value: address || "-", icon: MapPin }].map((item) => { const I = item.icon; return (<div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-eco-50/50 border border-eco-100"><div className="w-10 h-10 rounded-xl bg-eco-100 flex items-center justify-center flex-shrink-0"><I className="w-5 h-5 text-eco-600" /></div><div><div className="text-xs text-gray-400 font-medium">{item.label}</div><div className="text-sm font-semibold text-gray-900">{item.value}</div></div></div>); })}</div><button className="w-full mt-6 py-4 rounded-xl gradient-eco text-white font-bold shadow-eco hover:shadow-eco-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"><CheckCircle2 className="w-5 h-5" />Confirm Pickup</button></motion.div>)}
                        </AnimatePresence>
                        <div className="flex items-center justify-between mt-6">
                            <button onClick={() => step > 0 && setStep(step - 1)} disabled={step === 0} className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${step === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:bg-white hover:shadow-card"}`}><ArrowLeft className="w-4 h-4" />Back</button>
                            {step < 3 && <button onClick={() => canNext && setStep(step + 1)} disabled={!canNext} className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${canNext ? "gradient-eco text-white shadow-eco hover:shadow-eco-lg hover:-translate-y-0.5" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}>Next<ArrowRight className="w-4 h-4" /></button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
