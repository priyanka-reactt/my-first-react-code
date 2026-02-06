"use client";
import React from "react";
import SixFeatureCards from "../components/SixFeatureCards";
import {
  HiOutlineGlobeAlt,
  HiOutlineBolt,
  HiOutlineUserGroup,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineSparkles,
} from "react-icons/hi2";

export default function SixFeaturesPage() {
  const features = [
    {
      icon: <HiOutlineGlobeAlt />,
      title: "Global Expertise",
      description:
        "Destination specialists curate authentic experiences across 50+ countries for every travel style.",
    },
    {
      icon: <HiOutlineBolt />,
      title: "Fast Itineraries",
      description:
        "Get a tailored day-by-day plan within 24 hours, optimized for time, comfort, and value.",
    },
    {
      icon: <HiOutlineUserGroup />,
      title: "Group & Family Ready",
      description:
        "From couples to large groups, flexible options with seamless coordination and support.",
    },
    {
      icon: <HiOutlineShieldCheck />,
      title: "Trusted & Secure",
      description:
        "Transparent pricing, verified partners, and end-to-end assistance for worry-free travel.",
    },
    {
      icon: <HiOutlineChartBar />,
      title: "Value Optimized",
      description:
        "Smart hotel, flight, and activity combinations to maximize your budget without compromise.",
    },
    {
      icon: <HiOutlineSparkles />,
      title: "Unique Experiences",
      description:
        "Handpicked excursions, local guides, and hidden gems you won’t find in generic packages.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFC] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Why Travelers Choose Us</h1>
          <p className="text-gray-600 mt-2">Six solid reasons to plan your next journey with confidence.</p>
        </header>
        <SixFeatureCards items={features} variant="elevated" />
      </div>
    </main>
  );
}
