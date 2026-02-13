"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatsBadgeProps {
    value: number;
    suffix?: string;
    label: string;
    delay?: number;
}

export function StatsBadge({ value, suffix = "", label, delay = 0 }: StatsBadgeProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        const timeout = setTimeout(() => {
            const duration = 1500;
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setCount(Math.floor(eased * value));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [isInView, value, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="text-center p-4"
        >
            <div className="text-3xl md:text-4xl font-extrabold text-eco-600">
                {count.toLocaleString()}{suffix}
            </div>
            <div className="text-sm text-gray-500 mt-1 font-medium">{label}</div>
        </motion.div>
    );
}
