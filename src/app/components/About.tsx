import React from "react";
import { Link } from "react-router";
import { Users, Target, TrendingUp, Heart, MapPin, ArrowRight, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stores } from "../data/stores";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We source only the finest tyres from trusted manufacturers worldwide",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction and safety are at the heart of everything we do",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Staying ahead with the latest tyre technology and industry trends",
    },
    {
      icon: Heart,
      title: "Trust & Integrity",
      description: "Building lasting relationships through honest service and fair pricing",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "50K+", label: "Happy Customers" },
    { value: "100+", label: "Tyre Brands" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-orange-500">New Gold Star Tyres</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4">
              Your trusted partner in premium tyre solutions since 2011
            </p>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              We provide top-quality tyres from leading brands, expert fitting services, and honest advice—helping you drive with confidence on every road.
            </p>
          </div>
        </div>
      </section>

      {/* Our Stores Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We have four stores</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Visit any of our locations for expert service and premium tyres
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stores.map((store) => (
              <Link
                key={store.id}
                to={`/stores/${store.id}`}
                className="group block bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl border border-zinc-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden hover:transform hover:scale-[1.02]"
              >
                <div className="h-40 bg-zinc-800 relative overflow-hidden">
                  <ImageWithFallback
                    src={store.images[0]}
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-semibold text-white drop-shadow-lg">{store.name}</span>
                    <ArrowRight className="size-5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-zinc-400 text-sm line-clamp-2">{store.shortDescription}</p>
                  <p className="text-zinc-500 text-xs font-mono mt-2">GST: {store.gst}</p>
                  <div className="flex items-center gap-2 mt-2 text-orange-500 text-sm font-medium">
                    <Phone className="size-4 flex-shrink-0" />
                    <span>{store.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-zinc-500 text-sm">
                    <MapPin className="size-4 flex-shrink-0" />
                    <span>{store.city}, {store.state}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-zinc-300 text-lg">
                <p>
                  Founded in 2011, New Gold Star Tyres began with a simple mission: to provide drivers with access to the highest quality tyres at competitive prices. What started as a small family-owned shop has grown into a trusted name in the industry.
                </p>
                <p>
                  Over the years, we've built strong relationships with leading tyre manufacturers worldwide, allowing us to offer an extensive selection of premium tyres for every type of vehicle and driving condition.
                </p>
                <p>
                  Today, we're proud to serve thousands of satisfied customers, backed by our expert team and commitment to excellence in everything we do.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="/OIP%20(3).jpg"
                alt="Our story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl border border-zinc-700"
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              The principles that guide us in serving you better every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl border border-zinc-700 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-zinc-400">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
