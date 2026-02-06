import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { BiGroup } from "react-icons/bi";
import { CgMouse } from "react-icons/cg";
import { FaCompass, FaInstagram, FaSearch, FaSuitcase, FaCamera, FaArrowRight } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { HiOutlineLocationMarker, HiOutlineStar, HiOutlineUserGroup } from "react-icons/hi";
import { IoCalendarClearOutline, IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlineStar, MdStarOutline } from "react-icons/md";
import { PiAirplaneTilt } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { SlBag, SlPlane } from "react-icons/sl";
import { FiMessageCircle, FiPhone, FiShield } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import SixFeatureCards from "../components/SixFeatureCards";
import { FaRegStar, FaGlobe, FaClock, FaCheckCircle } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaUserGroup, FaWandMagicSparkles } from "react-icons/fa6";
const REVIEWS_PER_PAGE = 3;
const reviews = [
  {
    name: "Sumeet Bhandage",
    place: "Singapore",
    text: "It was really good experience with customise your trip. Everything was smooth and well planned.",
  },
  {
    name: "Saswat Sumantra Rath",
    place: "Dubai",
    text: "Recently had a family trip to Dubai. Very professional service and good support.",
  },
  {
    name: "Gary Ahuja",
    place: "Singapore",
    text: "Booked my Singapore trip and it was a great experience. Hotels and itinerary were perfect.",
  },
  {
    name: "Ankit Sharma",
    place: "Thailand",
    text: "Hotels and itinerary were perfect. Support team was very helpful.",
  },
  {
    name: "Neha Verma",
    place: "Bali",
    text: "Loved the trip planning. Very smooth and stress-free journey.",
  },
  {
    name: "Rohit Khanna",
    place: "Maldives",
    text: "The arrangements were seamless and the team was super responsive throughout the trip.",
  },
];

function SlideIndex() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedReview, setExpandedReview] = useState<number | null>(null);
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

  // Auto-play slider every 6 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === totalPages - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(intervalId);
  }, [totalPages]);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalPages - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === totalPages - 1 ? 0 : prev + 1
    );
  };
  const destinations = [
    {
      name: "thailand",
      popular: true,
      img: "https://res.cloudinary.com/djywuxbmb/image/upload/v1757033372/Thailand_Image_g2u2du.jpg",
      duration: {
        minDays: 4,
        maxDays: 12,
      },
      category: "international",
      rating: {
        stars: 4.8,
        reviews: "2.1k",
      },
      bestTime: {
        startMonth: "oct",
        endMonth: "mar",
      },
      tourOptions: 6,
    },
    {
      name: "bali",
      popular: true,
      img: "https://res.cloudinary.com/djywuxbmb/image/upload/v1757029286/Bali_images_3_gjqfog.jpg",
      duration: {
        minDays: 5,
        maxDays: 9,
      },
      category: "international",
      rating: {
        stars: 4.8,
        reviews: "2.1k",
      },
      bestTime: {
        startMonth: "oct",
        endMonth: "mar",
      },
      tourOptions: 9,
    },
    {
      name: "dubai",
      popular: true,
      img: "https://cdn.sanity.io/images/ei82hdc1/production/c0cb921d1b87fc2e674da51ca5bf1a1039e87098-1860x1046.jpg",
      duration: {
        minDays: 4,
        maxDays: 15,
      },
      category: "trending",
      rating: {
        stars: 4.8,
        reviews: "2.1k",
      },
      bestTime: {
        startMonth: "oct",
        endMonth: "mar",
      },
      tourOptions: 11,
    },
  ];
  const features = [
    {
      icon: <IoIosCheckmarkCircleOutline />,
      title: "100% Personalized Itineraries",
      description:
        "Every trip is crafted specifically for your preferences, budget, and travel style",
    },
    {
      icon: <SlPlane />,
      title: "Flight + Hotel Booking Support",
      description:
        "Complete booking assistance for flights, accommodation, and local transport",
    },
    {
      icon: <FiPhone />,
      title: "24x7 Trip Assistance",
      description:
        "Round-the-clock support team available to help you throughout your journey",
    },
    {
      icon: <TfiWorld />,
      title: "Global & Domestic Experts",
      description:
        "Local destination experts with deep knowledge of culture, cuisine, and hidden gems.",
    },
    {
      icon: <FiShield />,
      title: "Secure Payments",
      description:
        "Bank-grade security with multiple payment options and travel insurance coverage",
    },
    {
      icon: <FiMessageCircle />,
      title: "Real-time Support on WhatsApp",
      description:
        "Instant assistance via WhatsApp for quick queries and emergency support",
    },
  ];

  const packages = [
    {
      hotDeal: true,
      category: "International",
      duration: { days: 7, nights: 6 },
      image:
        "https://res.cloudinary.com/djywuxbmb/image/upload/v1757105055/Bali_Image_1_kngycj.jpg",
      name: "Beauty of Vietnam & Cambodia",
      subtitle: "Cambodia",
    },
    {
      hotDeal: true,
      category: "International",
      duration: { days: 8, nights: 7 },
      image:
        "https://res.cloudinary.com/djywuxbmb/image/upload/v1757077092/bali_adventure_1_kgktnw.jpg",
      name: "Unforgettable Singapore: Your Cruise Adventure",
      subtitle: "Singapore",
    },
    {
      hotDeal: true,
      category: "International",
      duration: { days: 7, nights: 6 },
      image:
        "https://res.cloudinary.com/djywuxbmb/image/upload/v1757029286/Bali_images_3_gjqfog.jpg",
      name: "Bali with Gili Islands-8N/9N",
      subtitle: "Bali",
    },
  ];
  const stats = [
    {
      key: "Happy Travelers",
      number: "10,000+",
      label: "Happy Travelers",
      icon: <FaRegStar />
    },
    { key: "Destinations", number: "50++", label: "Destinations", icon: <FaGlobe /> },
    { key: "Support", number: "24/7", label: "Support", icon: <FaClock /> },
    { key: "Satisfaction Rate", number: "99%", label: "Satisfaction Rate", icon: <FaCheckCircle /> },
  ]; // <

  const galleryImages = [
    { src: destinations[0].img, label: "Thailand" },
    { src: destinations[1].img, label: "Bali" },
    { src: destinations[2].img, label: "Dubai" },
    { src: packages[1].image, label: "Singapore Cruise" },
    { src: packages[0].image, label: "Vietnam & Cambodia" },
    { src: packages[2].image, label: "Bali Islands" },
    { src: destinations[0].img, label: "Thailand Escape" },
    { src: destinations[2].img, label: "Dubai Nights" },
  ];
  const [query, setQuery] = useState("");


  return (

    <div>
      <div className="relative w-full h-[800px]">
        <video
          src="https://res.cloudinary.com/djywuxbmb/video/upload/v1760353597/CYPT_Video_Banner_1_1_uecqxl.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="brightness-[0.3] absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Plan Your Dream Trip –{" "}
            <span className="text-orange-500">
              The <br /> Way You Want It
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white max-w-[850px]">
            Fully customisable travel packages made for solo travelers, families,
            and groups. Experience the world like never before with our
            personalized itineraries.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="flex items-center gap-2 bg-[#1CA9D1] text-white px-5 py-3 rounded-lg transition transform hover:scale-110">
              <IoCalendarClearOutline className="text-lg" />
              Customise Your Trip
            </button>

            <button className="flex items-center gap-2 bg-[#727B81] text-white px-5 py-3 rounded-lg transition transform hover:scale-110">
              <BiGroup className="text-lg" />
              Browse Popular Packages
            </button>
          </div>

          <div className="mt-16 flex justify-center gap-28 text-white text-center">
            <div>
              <h2 className="text-3xl font-extrabold text-orange-500">10,000+</h2>
              <p className="text-xs text-white mt-3">Happy Travelers</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-blue-600">50+</h2>
              <p className="text-xs text-white mt-3">Destinations</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-sky-500">24/7</h2>
              <p className="text-xs text-white mt-3">Support</p>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <CgMouse className="text-4xl text-white animate-bounce" />
          </div>
        </div>
      </div>
      <div className="text-center py-16 bg-white ">
        <h2 className="text-5xl font-extrabold ">
          <span className="text-black">How It. </span>
          <span className=" text-sky-400">Works</span>
        </h2>
        <p className="mt-3 text-lg text-gray-700   mx-auto">
          Simple, fast, and completely personalized. Get your dream <br />{" "}
          vacation planned in just 3 easy steps.
        </p>
      </div>
      <div className="flex justify-center items-center gap-10 mt-10 text-3xl relative">
        <div
          className="bg-[#E7F1FF] p-6 rounded-3xl flex items-center justify-center relative z-5 
                  transition-transform duration-300 hover:scale-110 "
        >
          <IoChatbubbleOutline className="text-[#1877FF]" />
          <div
            className="absolute -top-2 -right-2 p-5 bg-[#1B9ADE] text-white text-2xl font-extrabold 
                    w-6 h-6 flex items-center justify-center rounded-full"
          >
            1
          </div>
        </div>

        <div className="h-[2px] w-50 bg-gray-300"></div>

        <div
          className="bg-[#FFF4E5] p-6 rounded-3xl flex items-center justify-center relative z-5
                  transition-transform duration-300 hover:scale-110 "
        >
          <HiOutlineStar className="text-[#FF9100]" />
          <div
            className="absolute -top-2 -right-2 font-extrabold p-5 bg-[#1B9ADE] text-white text-2xl 
                    w-6 h-6 flex items-center justify-center rounded-full"
          >
            2
          </div>
        </div>

        <div className="h-[2px] w-50 bg-gray-300"></div>

        <div
          className="bg-[#E8F9F8] p-6 rounded-3xl flex items-center justify-center relative z-5 
                  transition-transform duration-300 hover:scale-110 "
        >
          <PiAirplaneTilt className="text-[#1EC6B6]" />
          <div
            className="absolute -top-2 -right-2 p-5 font-extrabold bg-[#1B9ADE] text-white text-2xl 
                    w-6 h-6 flex items-center justify-center rounded-full"
          >
            3
          </div>
        </div>
      </div>

      <div className="flex justify-center items-start gap-20 mt-16 text-center">
        <div className="max-w-xs">
          <h2 className="text-xl font-extrabold text-gray-800">
            Tell Us What You Want
          </h2>
          <p className="mt-3 text-base text-gray-700">
            Fill out your travel preferences – destination, <br /> dates,
            budget, and special requirements
          </p>
        </div>

        <div className="max-w-xs">
          <h2 className="text-xl font-extrabold text-gray-800">
            We Craft the Perfect Plan
          </h2>
          <p className="mt-3 text-base text-gray-700">
            Our travel experts create a personalized <br /> itinerary tailored
            just for you in 24 hours
          </p>
        </div>

        <div className="max-w-xs">
          <h2 className="text-xl font-extrabold text-gray-800">
            You Travel Stress-Free
          </h2>
          <p className="mt-3 text-base text-gray-700">
            Everything’s handled – from flight tickets <br /> to hotel bookings
            to 24/7 travel support
          </p>
        </div>
      </div>
      <div className="flex justify-center m-20">
        <button className="flex items-center gap-2 bg-white rounded-full px-6 py-2 text-gray-800 font-medium">
          <span className="bg-[#FFF4E5] p-2 rounded-full flex items-center justify-center">
            <MdStarOutline className="text-[#FF9100] text-xl" />
          </span>
          Trusted by 10,000+ travelers worldwide
        </button>
      </div>
      <div className="bg-[#FBFBFC] py-10">
        <div className="flex justify-center mb-10">
          <button className="flex items-center gap-2 text-[#1877FF] bg-[#CFE5FA] rounded-full px-6 py-2 font-medium">
            <TbWorld className="text-[#1877FF] text-xl" />
            Popular Destinations
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-5xl font-extrabold ">
            <span className="text-black">Explore </span>
            <span className=" text-sky-400">Amazing Places</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mt-6 ">
            Discover the world’s most breathtaking destinations with our
            carefully<br></br>
            curated travel packages. From pristine beaches to majestic
            mountains,<br></br>
            every journey tells a unique story.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 bg-[#FBFBFC] md:grid-cols-3 gap-8 px-10 py-16">
        {destinations.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 h-full flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-56 ">
              <Image
                src={place.img}
                alt={place.name}
                fill
                className="object-cover"
              />
              {place.popular && (
                <button className="absolute top-2 left-3 flex items-center gap-1 bg-[#11B88A] text-white text-xs font-bold px-3 py-1 rounded-full">
                  <MdOutlineStar className="w-4 h-6" />
                  Popular
                </button>
              )}
              {/* Duration */}
              <div className="absolute bottom-3 left-3">
                <button className="flex items-center gap-1 bg-[#1872F4] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  <GoClock className="w-3 h-6" />
                  {place.duration.minDays}–{place.duration.maxDays} Days
                </button>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-3 text-left relative flex flex-col flex-1">
              <h3 className="text-2xl  p-5 font-bold capitalize">
                <b>{place.name}</b>
              </h3>

              {/* Rating */}
              <div className="flex justify-between items-center p-2 rounded-lg">
                {/* Left side */}
                <button className="flex items-center gap-2 bg-[#E7F6F8] text-[#227DFF] text-[13px] font-semibold px-5 py-1 rounded-full">
                  <AiFillEnvironment className="w-4 h-7" />
                  {place.category}
                </button>

                {/* Right side (rating section) */}
                <div className="flex items-center gap-1">
                  <HiOutlineStar className="text-yellow-500 w-4 h-4" />
                  <span className="font-semibold">{place.rating.stars}</span>
                  <span className="text-gray-500 text-sm">
                    ({place.rating.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Best Time */}
              <div>
                <p className="mt-2 text-gray-600 text-sm">
                  Best Time: {place.bestTime.startMonth} –{" "}
                  {place.bestTime.endMonth}
                </p>

                {/* Tour Options */}
                <p className="mt-2 text-gray-700 font-medium">
                  {place.tourOptions}+ Tour Options
                </p>
              </div>
              <button className="w-full mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                Explore Destination →
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className=" bg-[#FBFBFC] py-10 w-full flex justify-center">
        <button className="mt-2 px-6 py-2 bg-[#1FB8C3] text-white font-semibold rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
          <TbWorld className="text-lg" />
          Explore all Destinations →
        </button>
      </div>


      <div className="flex flex-col mt-16 items-center justify-center text-center px-4">
        <h2 className="text-5xl font-extrabold ">
          <span className="text-black">Featured</span>
          <span className=" text-sky-400">Travel Packages</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mt-6 ">
          Handpicked packages designed by our travel experts for <br></br>{" "}
          unforgettable experiences
        </p>
      </div>
      <div className="flex justify-center">
        <span className=" space-x-10  rounded-4xl font-semibold mt-10 bg-gradient-to-r from-[#dee4e4] via-[white]/150 to-[#56eadd]">
          <button className="px-6 py-1">🏠 Domestic</button>
          <button className="bg-gradient-to-r text-white from-[#1981F5] to-[#1DBFBC] px-6 py-1 rounded-2xl">
            🌍 International
          </button>
        </span>
      </div>
      <div className="grid grid-cols-1 bg-[#FBFBFC] md:grid-cols-3 gap-4 px-8 py-12 justify-items-center">
        {packages.map((place, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 h-full flex flex-col max-w-[360px] w-full"
          >
            {/* Image */}
            <div className="relative w-full h-48 ">
              <Image
                src={place.image}
                alt={place.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* ✅ Two white buttons with different text */}
              {place.hotDeal && (
                <>
                  <button className="absolute top-2 left-3 flex items-center gap-1 bg-[#F25632] text-white text-xs font-bold px-3 py-1 rounded-full">
                    <MdOutlineStar className="w-4 h-4" />
                    HOTDEAL
                  </button>

                  <button className="absolute top-2 right-3 flex items-center gap-1 bg-white text-[#1872F4] text-xs font-bold px-3 py-1 rounded-full">
                    <HiOutlineStar className="w-4 h-4" />
                    standard
                  </button>
                </>
              )}

              {/* Duration */}
              <div className="absolute bottom-3 left-3">
                <button className="flex items-center gap-1 bg-[#1872F4] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  <GoClock className="w-3 h-6" />
                  {place.duration.nights}N/{place.duration.days}D
                </button>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-3 text-left relative flex flex-col flex-1">
              {/* Rating */}
              <div className="flex p-4">
                <button className="flex items-center gap-2 bg-[#E7F6F8] text-[#227DFF] text-[13px] font-semibold px-5 py-1 rounded-full">
                  <AiFillEnvironment className="w-4 h-7" />
                  {place.category}
                </button>
              </div>
              <h3 className="text-lg md:text-xl px-4 font-bold capitalize transition-colors duration-100 group-hover:text-green-600 hover:text-green-600">
                <b>{place.name}</b>
              </h3>
              {place.subtitle && (
                <div className="px-4 mt-1 flex items-center justify-start gap-2 text-sm text-gray-800">
                  <FaCompass className="text-[#1C79FF]" />
                  <span>{place.subtitle}</span>
                </div>
              )}

              <div className="mt-auto">
                <p className="text-[#1C79FF] text-sm text-center">Contact for best rates</p>
                <div className="flex gap-3 mt-3">
                  <button className="w-1/2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-green-600 transition transform hover:scale-105">
                    Get Quote
                  </button>
                  <button className="w-1/2 px-4 py-2  bg-blue-500 text-white font-semibold rounded-lg hover:bg-green-600 transition transform hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" bg-[#FBFBFC] py-6 w-full flex justify-center">
        <button className="mt-2 px-6 py-2 bg-[#1FB8C3] text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          View All Packages
        </button>
      </div>
      <div className="bg-[#FBFBFC] px-6 md:px-10 pb-12">
        <SixFeatureCards items={features} />
      </div>
      <div className="bg-[#FBFBFC] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white border border-[#F3E6E8] rounded-3xl px-6 md:px-12 py-12 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 text-center">
              {stats.map((s) => (
                <div key={s.key} className="flex flex-col items-center">
                  <div className="text-[#1877FF] text-5xl">{s.icon}</div>
                  <h2 className="text-[#1877FF] font-extrabold text-3xl mt-10">{s.number}</h2>
                  <p className="text-gray-500 mt-1 text-lg">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-20 ">
          {/* Icon */}

          <div className="flex justify-center">
            <div className="bg-orange-500 w-16 h-16 rounded-xl flex items-center justify-center">
              <div className="text-white text-4xl flex items-center h-full ">
                <RiDoubleQuotesR />
              </div>
            </div>
          </div>
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold  mt-10">
            <span className="text-black">What Our </span>
            <span className="text-orange-500">Travelers Say</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Real stories from real travelers who experienced our
            personalized <br></br> travel services
          </p>
        </div>

        {/* 3-card review slider with slide animation */}
        <div className="min-h-[400px] flex items-center justify-center mt-10">
          <div className="relative max-w-6xl w-full mx-auto px-4 overflow-x-hidden overflow-y-visible">

            {/* LEFT ARROW */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 mt-[-10px] bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center text-xl z-20 p-2"
            >
              ‹
            </button>

            {/* SLIDER CARDS */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const start = pageIndex * REVIEWS_PER_PAGE;
                const pageReviews = reviews.slice(
                  start,
                  start + REVIEWS_PER_PAGE
                );

                return (
                  <div
                    key={pageIndex}
                    className="w-full flex-shrink-0 px-6 py-4 md:py-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                      {pageReviews.map((review, idx) => {
                        const globalIndex = start + idx;
                        const isExpanded = expandedReview === globalIndex;
                        const shortText =
                          review.text.length > 130
                            ? review.text.slice(0, 130) + "..."
                            : review.text;
                        const displayText = isExpanded ? review.text : shortText;

                        return (
                          <div
                            key={globalIndex}
                            className="bg-white rounded-2xl shadow-lg p-6 pb-8 md:p-7 md:pb-10 flex flex-col h-full min-h-[260px] md:min-h-[300px]"
                          >
                            {/* STARS */}
                            <div className="text-yellow-400 text-xl mb-3">
                              ⭐⭐⭐⭐⭐
                            </div>

                            {/* TEXT + View more/less */}
                            <p className="text-gray-700 italic mb-2 flex-1">
                              “{displayText}”
                            </p>
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedReview(
                                  isExpanded ? null : globalIndex
                                )
                              }
                              className="text-sm font-semibold text-[#1877FF] hover:underline mb-4 text-left mt-1 ml-1"
                            >
                              {isExpanded ? "View Less" : "View More"}
                            </button>

                            {/* Profile footer */}
                            <div className="mt-4 flex items-center">
                              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mr-3">
                                {review.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-semibold text-base text-gray-900">
                                  {review.name}
                                </p>
                                <p className="text-sm text-gray-600">
                                  Destination: {review.place}
                                </p>
                                <p className="text-xs text-gray-400">
                                  September 2025
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 mt-[-10px] bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center text-xl z-20 p-2"
            >
              ›
            </button>

          </div>
        </div>

        <div className="text-center mt-24">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#BD51DA] w-20 h-20 rounded-2xl flex items-center justify-center -mt-6">
              <FaInstagram className="text-white text-5xl" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-black">Real Trip </span>
            <span className="text-orange-500">Moments</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Discover authentic travel experiences through the eyes of our travelers.
            <br />
            Get inspired by real moments from real trips.
          </p>
        </div>
        <div className="bg-[#FBFBFC] py-8 w-full flex justify-center">
          <button className="mt-4 px-12 py-2 bg-[#AD2FC1] text-white text-base font-semibold rounded-full hover:bg-[#8611c2] transition flex items-center justify-center gap-3">
            <FaInstagram className="text-xl" />
            <span>View All Packages</span>
          </button>
        </div>

        {/* Instagram-style gallery */}
        <div className="mt-8 px-4 md:px-0">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-40 sm:h-48 md:h-56 rounded-2xl overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm sm:text-base md:text-lg font-semibold drop-shadow-md">
                    {image.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Your Travel Moments Card */}
        <div className="mt-20 px-4 md:px-0">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#FBEDF7] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center gap-4">
              {/* Icon at top */}
              <div className=" p-4 rounded-2xl flex items-center justify-center">
                <FaCamera className="text-[#A855F7] text-4xl md:text-5xl" />
              </div>

              {/* Heading */}
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Share Your Travel Moments
              </h2>

              {/* Paragraph */}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
                Tag us in your travel photos and get featured on our feed. Let&apos;s inspire more travelers together!
              </p>

              {/* Button below paragraph */}
              <button className="bg-gradient-to-r from-[#AD2FC1] to-[#9D31DA] text-white px-5 py-2 rounded-xl font-medium text-sm md:text-base hover:from-[#8611c2] hover:to-[#7a0fb8] transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-3">
                <FaInstagram className="text-lg" />
                <span>Follow &amp; Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Ready for Your Next Adventure CTA section */}
        <div className="mt-40 px-4 md:px-0 flex flex-col items-center text-center">
          {/* Top pill button */}
          <button className="mb-6 inline-flex items-center gap-2 bg-[#E7F1FF] text-[#1F6FEB] px-6 py-2 rounded-full text-sm md:text-base font-semibold shadow-sm">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#1F6FEB] text-white text-xs">
              ✈
            </span>
            Ready for Your Next Adventure?
          </button>

          {/* Main heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#1F2933]">Let&apos;s Start Crafting Your</span>{" "}
            <span className="text-[#FF9F1C]">Next Adventure</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            Share your preferences and we&apos;ll handle the rest. From flights to accommodations,
            from activities to local experiences – consider it done.
          </p>

          {/* Bottom CTA button */}
          <button className="mt-8 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#1F6FEB] to-[#1EC6B6] text-white px-10 py-3 rounded-2xl text-base md:text-lg font-semibold  hover:from-[#1752b7] hover:to-[#18a393] transition-all duration-300 transform hover:scale-105">
          <SlBag />
            Start Customizing
            <FaArrowRight />

          </button>

          {/* Three feature cards below CTA */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
  
  {/* Card 1 */}
  <div className="bg-white rounded-2xl shadow-lg p-8 text-center  transition">
    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
      <HiOutlineLocationMarker
       className="text-2xl" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">
      Choose Your Destination
    </h3>
    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
      Browse our 50+ destinations or tell us where you want to go
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-2xl shadow-lg p-8 text-center transition">
    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600">
     <FaRegStar className="text-2xl" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">
      Customise Everything
    </h3>
    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
      Tailor your itinerary, budget, activities, and accommodation
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-2xl shadow-lg p-8 text-center  transition">
    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-green-100 text-green-600">
      <FaUserGroup  className="text-2xl" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">
      Travel with Confidence
    </h3>
    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
      Enjoy 24/7 support and seamless booking management
    </p>
  </div>
 <div  >
  <div >

    {/* Heading */}
    <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
      Why 10,000+ Travelers Choose Us
    </h2>

    {/* Stats as table-like layout */}
    <div>
      <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {/* Row 1: Numbers */}
        <p className="text-2xl md:text-3xl font-bold text-blue-600">100%</p>
        <p className="text-2xl md:text-3xl font-bold text-orange-500">24/7</p>
        <p className="text-2xl md:text-3xl font-bold text-emerald-500">50+</p>
        <p className="text-2xl md:text-3xl font-bold text-blue-600">99%</p>

        {/* Row 2: Labels */}
        <p className="text-sm md:text-base text-gray-600">Personalized</p>
        <p className="text-sm md:text-base text-gray-600">Support</p>
        <p className="text-sm md:text-base text-gray-600">Destinations</p>
        <p className="text-sm md:text-base text-gray-600">Satisfaction</p>
      </div>
    </div>

    {/* Description */}
    <p className="mt-5 text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
      Join thousands of satisfied travelers who have experienced our personalized
      travel services.
    </p>

  </div>
</div>


</div>


        </div>
        <div className="w-full flex justify-center mt-12">
          <div className="flex items-center bg-white rounded-full shadow-lg px-4 py-3 w-full max-w-3xl">
            <FaSearch className="text-gray-400 text-lg mr-3" />

            <input
              type="text"
              placeholder="Where do you want to go?"
              className="flex-1 outline-none text-base"
            />

            <button className="ml-3 px-6 py-2 bg-[#9D31DA] text-white rounded-full text-sm font-semibold hover:bg-[#8611c2]">
              Search
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center mt-14">
          <div className="bg-white shadow-xl rounded-2xl p-4 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl w-full">

            <input
              type="text"
              placeholder="Destination"
              className="border rounded-xl px-4 py-3 outline-none"
            />

            <input
              type="date"
              className="border rounded-xl px-4 py-3 outline-none"
            />

            <select className="border rounded-xl px-4 py-3 outline-none">
              <option>Guests</option>
              <option>1-2</option>
              <option>3-5</option>
              <option>5+</option>
            </select>

            <button className="bg-[#9D31DA] text-white rounded-xl font-semibold hover:bg-[#8611c2]">
              Search
            </button>
          </div>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

      </div>
    </div>
  );
}

export default SlideIndex;
