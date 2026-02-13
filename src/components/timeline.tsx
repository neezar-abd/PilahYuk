"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface TimelineStep {
    icon: LucideIcon;
    title: string;
    description: string;
    status?: "completed" | "active" | "pending";
}

interface TimelineProps {
    steps: TimelineStep[];
    variant?: "vertical" | "responsive";
}

export function Timeline({ steps, variant = "responsive" }: TimelineProps) {
    return (
        <div
            className={
                variant === "vertical"
                    ? "flex flex-col gap-0"
                    : "flex flex-col md:flex-row md:items-start md:gap-0"
            }
        >
            {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = step.status === "active";
                const isCompleted = step.status === "completed";
                const isLast = index === steps.length - 1;

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 }}
                        className={
                            variant === "vertical"
                                ? "flex gap-4"
                                : "flex gap-4 md:flex-col md:items-center md:text-center md:flex-1"
                        }
                    >
                        {/* Icon + line */}
                        <div
                            className={
                                variant === "vertical"
                                    ? "flex flex-col items-center"
                                    : "flex flex-col items-center md:flex-row md:w-full"
                            }
                        >
                            {variant !== "vertical" && index > 0 && (
                                <div className="hidden md:block flex-1 h-0.5 bg-eco-200" />
                            )}
                            <div
                                className={`relative w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isActive
                                        ? "gradient-eco shadow-eco animate-pulse-eco"
                                        : isCompleted
                                            ? "gradient-eco shadow-eco"
                                            : "bg-gray-100"
                                    }`}
                            >
                                <Icon
                                    className={`w-5 h-5 ${isActive || isCompleted ? "text-white" : "text-gray-400"
                                        }`}
                                />
                                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-[10px] font-bold flex items-center justify-center text-eco-600 shadow-sm border border-eco-100">
                                    {index + 1}
                                </span>
                            </div>
                            {!isLast && (
                                <>
                                    <div
                                        className={`w-0.5 h-12 ${isCompleted ? "bg-eco-400" : "bg-gray-200"
                                            } ${variant !== "vertical" ? "md:hidden" : ""}`}
                                    />
                                    {variant !== "vertical" && (
                                        <div
                                            className={`hidden md:block flex-1 h-0.5 ${isCompleted ? "bg-eco-400" : "bg-gray-200"
                                                }`}
                                        />
                                    )}
                                </>
                            )}
                            {isLast && variant === "vertical" && <div className="w-0.5 h-4" />}
                        </div>

                        {/* Content */}
                        <div className={`pb-8 ${variant !== "vertical" ? "md:pb-0 md:mt-3" : ""}`}>
                            <h4
                                className={`text-sm font-semibold ${isActive || isCompleted ? "text-eco-700" : "text-gray-700"
                                    }`}
                            >
                                {step.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
