import { useState } from "react";
import { Search, Filter, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tyre } from "./TyreInquiryForm";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import download2Img from "../../assets/collection/download-2.jpg";
import oip1Img from "../../assets/collection/oip-1.jpg";
import oip2Img from "../../assets/collection/oip-2.jpg";
import oip3Img from "../../assets/collection/oip-3.jpg";
import oipImg from "../../assets/collection/oip.jpg";
import tyre3Img from "../../assets/collection/tyre3.jpg";

const tyres: Tyre[] = [
  {
    id: "1",
    brand: "Michelin",
    model: "Pilot Sport 4",
    size: "225/45R17",
    type: "Performance",
    price: 189.99,
    season: "Summer",
    speedRating: "Y",
    loadIndex: "94",
    image: download2Img,
  },
  {
    id: "2",
    brand: "Continental",
    model: "ContiWinterContact TS 860",
    size: "205/55R16",
    type: "Winter",
    price: 145.99,
    season: "Winter",
    speedRating: "H",
    loadIndex: "91",
    image: oip1Img,
  },
  {
    id: "3",
    brand: "Bridgestone",
    model: "Turanza T005",
    size: "215/60R16",
    type: "Touring",
    price: 129.99,
    season: "All-Season",
    speedRating: "V",
    loadIndex: "95",
    image: oip2Img,
  },
  {
    id: "4",
    brand: "Pirelli",
    model: "P Zero",
    size: "245/40R18",
    type: "Performance",
    price: 249.99,
    season: "Summer",
    speedRating: "Y",
    loadIndex: "97",
    image: oip3Img,
  },
  {
    id: "5",
    brand: "Goodyear",
    model: "Eagle F1 Asymmetric 5",
    size: "225/50R17",
    type: "Performance",
    price: 169.99,
    season: "Summer",
    speedRating: "W",
    loadIndex: "94",
    image: oipImg,
  },
  {
    id: "6",
    brand: "Hankook",
    model: "Ventus V12 evo2",
    size: "235/45R17",
    type: "Performance",
    price: 139.99,
    season: "Summer",
    speedRating: "Y",
    loadIndex: "94",
    image: tyre3Img,
  },
  {
    id: "7",
    brand: "Dunlop",
    model: "Sport Maxx RT2",
    size: "225/45R18",
    type: "Performance",
    price: 179.99,
    season: "Summer",
    speedRating: "Y",
    loadIndex: "95",
    image: download2Img,
  },
  {
    id: "8",
    brand: "Yokohama",
    model: "BluEarth-GT AE51",
    size: "195/65R15",
    type: "Touring",
    price: 99.99,
    season: "All-Season",
    speedRating: "H",
    loadIndex: "91",
    image: oip1Img,
  },
  {
    id: "9",
    brand: "Michelin",
    model: "CrossClimate 2",
    size: "205/55R16",
    type: "All-Season",
    price: 159.99,
    season: "All-Season",
    speedRating: "V",
    loadIndex: "94",
    image: oip2Img,
  },
  {
    id: "10",
    brand: "Continental",
    model: "PremiumContact 6",
    size: "225/50R17",
    type: "Touring",
    price: 149.99,
    season: "Summer",
    speedRating: "W",
    loadIndex: "94",
    image: oip3Img,
  },
  {
    id: "11",
    brand: "Bridgestone",
    model: "Blizzak LM005",
    size: "205/60R16",
    type: "Winter",
    price: 139.99,
    season: "Winter",
    speedRating: "H",
    loadIndex: "92",
    image: oipImg,
  },
  {
    id: "12",
    brand: "Pirelli",
    model: "Cinturato P7",
    size: "215/55R17",
    type: "Touring",
    price: 154.99,
    season: "All-Season",
    speedRating: "W",
    loadIndex: "94",
    image: tyre3Img,
  },
];

export function Collection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeason, setSelectedSeason] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const maxCardsToShow = 8;

  const whatsappNumber = "+91-9612154551";
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd8X0pODh4kk-OgVHF_kfYOmKbj9XsXrK1yHPpHuv1QCIcxtg/viewform?usp=publish-editor";

  const filteredTyres = tyres.filter((tyre) => {
    const matchesSearch =
      tyre.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tyre.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tyre.size.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSeason =
      selectedSeason === "all" || tyre.season === selectedSeason;

    const matchesType = selectedType === "all" || tyre.type === selectedType;

    return matchesSearch && matchesSeason && matchesType;
  });

  const displayedTyres = filteredTyres.slice(0, maxCardsToShow);

  const handleBuyNow = (tyre: Tyre) => {
    const message = `Hello, I want to buy the ${tyre.brand} ${tyre.model} (${tyre.size}).`;
    const cleanNumber = whatsappNumber.replace(/[\+\-\s]/g, ''); // Remove +, -, and spaces
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleInquire = (tyre: Tyre) => {
    window.open(googleFormUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-orange-500">Collection</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Browse our extensive range of premium tyres from world-leading brands
          </p>
        </div>

        {/* Filters */}
        <div className="bg-zinc-900/50 rounded-2xl p-6 mb-12 border border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-zinc-400" />
              <Input
                type="text"
                placeholder="Search by brand, model, or size..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zinc-800 border-zinc-700 text-white"
              />
            </div>

            {/* Season Filter */}
            <Select value={selectedSeason} onValueChange={setSelectedSeason}>
              <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                <SelectValue placeholder="All Seasons" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                <SelectItem value="all">All Seasons</SelectItem>
                <SelectItem value="Summer">Summer</SelectItem>
                <SelectItem value="Winter">Winter</SelectItem>
                <SelectItem value="All-Season">All-Season</SelectItem>
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Performance">Performance</SelectItem>
                <SelectItem value="Touring">Touring</SelectItem>
                <SelectItem value="Winter">Winter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
            <Filter className="size-4" />
            <span>
              Showing {displayedTyres.length} of {filteredTyres.length} tyres
            </span>
          </div>
        </div>

        {/* Tyres Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTyres.map((tyre) => (
            <div
              key={tyre.id}
              className="group bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl border border-zinc-700 overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={tyre.image}
                  alt={`${tyre.brand} ${tyre.model}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-3 py-1 bg-orange-500 rounded-full text-sm font-semibold">
                    {tyre.season}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-orange-500">
                      {tyre.brand}
                    </h3>
                    <p className="text-zinc-300">{tyre.model}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="size-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm text-zinc-400">4.8</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Size:</span>
                    <span className="text-white font-semibold">{tyre.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Type:</span>
                    <span className="text-white">{tyre.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Speed Rating:</span>
                    <span className="text-white">{tyre.speedRating}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Load Index:</span>
                    <span className="text-white">{tyre.loadIndex}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-4 border-t border-zinc-700">
                  <Button
                    onClick={() => handleBuyNow(tyre)}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg hover:shadow-orange-500/50"
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handleInquire(tyre)}
                    className="flex-1 border border-zinc-700 bg-zinc-900 text-white hover:border-orange-500 hover:text-orange-500"
                  >
                    Inquire
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTyres.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-zinc-400">
              No tyres found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
