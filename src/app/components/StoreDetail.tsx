import { Link, useParams, useNavigate } from "react-router";
import { ArrowLeft, MapPin, Phone, FileText } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stores } from "../data/stores";

export function StoreDetail() {
  const { storeId } = useParams<{ storeId: string }>();
  const navigate = useNavigate();
  const store = stores.find((s) => s.id === storeId);

  if (!store) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold mb-4">Store not found</h1>
        <Link
          to="/about"
          className="text-orange-500 hover:text-orange-400 transition-colors"
        >
          ← Back to About Us
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Back button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="size-5" />
          Back
        </button>
      </div>

      {/* Hero with store name */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            {store.name}
          </h1>
          <p className="text-xl text-zinc-400">{store.shortDescription}</p>
        </div>
      </section>

      {/* Shop images gallery */}
      <section className="py-8 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Store Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {store.images.map((img, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden border border-zinc-700"
              >
                <ImageWithFallback
                  src={img}
                  alt={`${store.name} - Photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About this store */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">About This Store</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-zinc-300 leading-relaxed">
              {store.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Address & Contact */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Location & Contact</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="size-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">GSTIN</h3>
                  <p className="text-zinc-300 font-mono">{store.gst}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
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
              <div className="flex items-start gap-3">
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
            <div className="h-80 rounded-xl overflow-hidden border border-zinc-700">
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
    </div>
  );
}
