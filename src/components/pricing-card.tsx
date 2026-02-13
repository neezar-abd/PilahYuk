"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface PricingFeature {
    text: string;
    included: boolean;
}

interface PricingCardProps {
    icon: LucideIcon;
    name: string;
    price: string;
    period: string;
    description: string;
    features: PricingFeature[];
    popular?: boolean;
    delay?: number;
    ctaText?: string;
}

export function PricingCard({
    icon: Icon,
    name,
    price,
    period,
    description,
    features,
    popular = false,
    delay = 0,
    ctaText = "Choose Plan",
}: PricingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -8 }}
            className={`relative p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 ${popular
                ? "border-eco-500 bg-white shadow-eco-lg scale-[1.02]"
                : "border-gray-100 bg-white shadow-card hover:shadow-card-hover"
                }`}
        >
            {popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full gradient-eco text-white text-xs font-semibold shadow-eco">
                        Most Popular ⭐
                    </span>
                </div>
            )}

            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${popular ? "gradient-eco shadow-eco" : "bg-eco-100"
                }`}>
                <Icon className={`w-6 h-6 ${popular ? "text-white" : "text-eco-600"}`} />
            </div>

            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">{description}</p>

            <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">{price}</span>
                <span className="text-gray-400 ml-1">/{period}</span>
            </div>

            <ul className="space-y-3 mb-8">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        {feature.included ? (
                            <div className="w-5 h-5 rounded-full bg-eco-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <Check className="w-3 h-3 text-eco-600" strokeWidth={3} />
                            </div>
                        ) : (
                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <X className="w-3 h-3 text-gray-400" strokeWidth={3} />
                            </div>
                        )}
                        <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>

            <button
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${popular
                    ? "gradient-eco text-white shadow-eco hover:shadow-eco-lg hover:-translate-y-0.5"
                    : "bg-eco-50 text-eco-700 hover:bg-eco-100"
                    }`}
            >
                {ctaText}
            </button>
        </motion.div>
    );
}
