import { Link } from "react-router";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stores } from "../data/stores";

export function OurStores() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-6 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-orange-500">Stores</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4">
              Visit any of our {stores.length} locations for expert service and premium tyres
            </p>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Each store is staffed with trained professionals ready to help you find the perfect tyres for your vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Stores Grid */}
      <section className="pt-4 pb-16 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <Link
                key={store.id}
                to={`/stores/${store.id}`}
                className="group block bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl border border-zinc-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden hover:transform hover:scale-[1.02]"
              >
                <div className="h-56 bg-zinc-800 relative overflow-hidden">
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
    </div>
  );
}
