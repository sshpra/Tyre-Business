import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router";
import {

  MapPin,
  Phone,
  FileText,
  ChevronLeft,
  ChevronRight,
  Shield,
  Star,
  Wrench,
  Clock,
  Award,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stores } from "../data/stores";

import download2Img from "../../assets/collection/download-2.jpg";
import oip1Img from "../../assets/collection/oip-1.jpg";
import oip2Img from "../../assets/collection/oip-2.jpg";
import oip3Img from "../../assets/collection/oip-3.jpg";

const featuredTyres = [
  { brand: "Michelin", model: "Pilot Sport 4", size: "225/45R17", image: download2Img },
  { brand: "Continental", model: "PremiumContact 6", size: "205/55R16", image: oip1Img },
  { brand: "Bridgestone", model: "Turanza T005", size: "215/60R16", image: oip2Img },
  { brand: "Pirelli", model: "P Zero", size: "245/40R18", image: oip3Img },
];

const whyChooseIcons = [Shield, Award, Wrench, Clock, TrendingUp, Star];

export function StoreDetail() {
  const { storeId } = useParams<{ storeId: string }>();

  const store = stores.find((s) => s.id === storeId);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (!store || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % store.images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [store, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!store || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + store.images.length) % store.images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [store, isTransitioning]);

  // Auto-advance slideshow
  useEffect(() => {
    if (!store) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [store, nextSlide]);

  if (!store) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold mb-4">Store not found</h1>
        <Link
          to="/stores"
          className="text-orange-500 hover:text-orange-400 transition-colors"
        >
          ← Back to Our Stores
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero with store name */}
      <section className="pt-4 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            {store.name}
          </h1>
          <p className="text-xl text-zinc-400">{store.shortDescription}</p>
        </div>
      </section>

      {/* ─── Image Slideshow ─── */}
      <section className="py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-700 aspect-[16/7] bg-zinc-900">
          {/* Slides */}
          {store.images.map((img, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{ opacity: index === currentSlide ? 1 : 0 }}
            >
              <ImageWithFallback
                src={img}
                alt={`${store.name} - Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
            </div>
          ))}

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full border border-zinc-600 hover:bg-orange-500/80 hover:border-orange-500 transition-all duration-200 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full border border-zinc-600 hover:bg-orange-500/80 hover:border-orange-500 transition-all duration-200 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {store.images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentSlide(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-orange-500 scale-110"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ─── Our Story ─── */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Story</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-8" />
            <p className="text-lg text-zinc-300 leading-relaxed">
              {store.story}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Address & Contact ─── */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2">Location & Contact</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-zinc-800/50 rounded-xl border border-zinc-700">
                <FileText className="size-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">GSTIN</h3>
                  <p className="text-zinc-300 font-mono">{store.gst}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-zinc-800/50 rounded-xl border border-zinc-700">
                <MapPin className="size-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-zinc-300">
                    {store.address}
                    <br />
                    {store.city}, {store.state} {store.zip}
                  </p>
                  {store.coordinatesLabel ? (
                    <p className="text-zinc-500 text-sm mt-2 font-mono">
                      {store.coordinatesLabel}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-zinc-800/50 rounded-xl border border-zinc-700">
                <Phone className="size-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a
                    href={`tel:${store.phone.replace(/\D/g, "")}`}
                    className="text-zinc-300 hover:text-orange-500 transition-colors"
                  >
                    {store.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-80 lg:h-full min-h-[320px] rounded-xl overflow-hidden border border-zinc-700">
              <iframe
                src={store.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${store.name}`}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Why Choose <span className="text-orange-500">{store.name}</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4" />
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Here's what sets this store apart from the rest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {store.whyChooseUs.map((reason, index) => {
              const Icon = whyChooseIcons[index % whyChooseIcons.length];
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-6 rounded-2xl border border-zinc-700 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="size-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Explore Collection ─── */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Explore Our <span className="text-orange-500">Collection</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4" />
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Premium tyres available at {store.name}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTyres.map((tyre, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl border border-zinc-700 overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-[1.03]"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={tyre.image}
                    alt={`${tyre.brand} ${tyre.model}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-orange-500">
                    {tyre.brand}
                  </h3>
                  <p className="text-zinc-300 text-sm">{tyre.model}</p>
                  <p className="text-zinc-500 text-xs mt-1 font-mono">
                    {tyre.size}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105"
            >
              View Full Collection
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
