"use client";
import React, { ReactNode } from "react";

export type FeatureItem = {
  icon: ReactNode; // pass an icon element from react-icons/hi2
  title: string;
  description: string;
};

export interface SixFeatureCardsProps {
  items: FeatureItem[]; // provide 6 items
  className?: string;
  variant?: "elevated" | "flat"; // elevated = stronger shadow
}

const SixFeatureCards: React.FC<SixFeatureCardsProps> = ({
  items,
  className = "",
  variant: _variant = "elevated",
}) => {
  void _variant;
  const baseShadow = ""; // no card shadow
  const hoverShadow = ""; // no hover shadow

  return (
    <section className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {items.slice(0, 6).map((item, idx) => (
        <article
          key={idx}
          className={`rounded-3xl p-6 ${baseShadow} ${hoverShadow} flex flex-col items-center justify-center text-center`}
        >
          {(() => {
            const cards = [
              { iconBg: "bg-[#E6F4FF]", icon: "text-[#1877FF]" }, // sky
              { iconBg: "bg-[#FFF3D6]", icon: "text-[#FF8A00]" }, // amber
              { iconBg: "bg-[#E6FFF6]", icon: "text-[#16A085]" }, // teal/emerald
              { iconBg: "bg-[#EFE7FF]", icon: "text-[#7C3AED]" }, // violet
              { iconBg: "bg-[#FFE6EA]", icon: "text-[#E11D48]" }, // rose
              { iconBg: "bg-[#E8EEFF]", icon: "text-[#1D4ED8]" }, // indigo/blue
            ];
            const pal = cards[idx % cards.length];
            return (
              <div className={`w-full h-full rounded-3xl flex flex-col items-center justify-center p-6`}>
                <span className={`inline-flex items-center justify-center rounded-full ${pal.iconBg} p-3 md:p-4 transition-transform duration-200 ease-out hover:scale-110`}>
                  <span className={`text-3xl md:text-4xl ${pal.icon}`}>{item.icon}</span>
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            );
          })()}
        </article>
      ))}
    </section>
  );
};

export default SixFeatureCards;
