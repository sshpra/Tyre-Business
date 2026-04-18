import shop1Img from "../../assets/shops/shop1.png";
import shop2Img from "../../assets/shops/shop2.png";
import shop3Img from "../../assets/shops/shop3.png";
import shop4Img from "../../assets/shops/shop4.png";
import shop5Img from "../../assets/shops/shop5.png";

export interface Store {
  id: string;
  name: string;
  gst: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  mapEmbedUrl: string;
  /** Optional DMS coordinates shown on the store page */
  coordinatesLabel?: string;
  /** Unique story paragraph for the landing page */
  story: string;
  /** Why choose this store — list of reasons */
  whyChooseUs: { title: string; description: string }[];
}

export const stores: Store[] = [
  {
    id: "downtown",
    name: "New Gold Star Tyre",
    gst: "13AUQPS712L2Z5",
    shortDescription: "Our flagship location for premium tyres",
    fullDescription:
      "New Gold Star Tyre has been serving the community with the complete range of premium tyres. This location offers a fully equipped service bay for tyre fitting, balancing, and alignment. Our experienced team provides personalized recommendations and same-day service for most requests.",
    images: [shop1Img, shop2Img, shop4Img],
    address:
      "Ground Floor, Middle, Bayavu Hill Rd, near Axis Bank, Upper Bayavü Hill",
    city: "Kohima",
    state: "Nagaland",
    zip: "797001",
    phone: "7005996467",
    coordinatesLabel: `25°40'12.7"N 94°05'44.2"E`,
    mapEmbedUrl:
      "https://www.google.com/maps?q=25%C2%B040'12.7%22N+94%C2%B005'44.2%22E&z=17&hl=en&output=embed",
    story:
      "Established as our very first outlet, New Gold Star Tyre is where it all began. Over the years this flagship store has earned the trust of thousands of drivers across Kohima. We started with a small inventory and a big dream — to give every vehicle on the road the safest, highest-performing tyres available. Today our downtown showroom stocks an extensive catalogue from brands like Michelin, Bridgestone, Continental, and Yokohama. Walk in and you'll be greeted by a team that genuinely cares about your safety and budget.",
    whyChooseUs: [
      {
        title: "Flagship Experience",
        description:
          "As our original store, we bring the deepest expertise and the widest selection under one roof.",
      },
      {
        title: "Same-Day Fitting",
        description:
          "Most tyre changes are completed within an hour so you can get back on the road fast.",
      },
      {
        title: "Certified Technicians",
        description:
          "Our team holds manufacturer certifications ensuring every job meets factory standards.",
      },
      {
        title: "Competitive Pricing",
        description:
          "We match or beat prices on every major brand — quality shouldn't cost more.",
      },
    ],
  },
  {
    id: "midtown",
    name: "Tyre Plaza",
    gst: "13AKKPB7198Q2ZH",
    shortDescription: "Your trusted tyre destination",
    fullDescription:
      "Tyre Plaza caters to customers with an extensive selection of premium passenger and SUV tyres. We focus on quick turnaround times and maintain high standards of quality and customer service. Visit us for expert advice and competitive pricing.",
    images: [shop2Img, shop1Img, shop5Img],
    address:
      "Ground Floor, Middle, Bayavu Hill Rd, near Axis Bank, Upper Bayavü Hill",
    city: "Kohima",
    state: "Nagaland",
    zip: "797001",
    phone: "6909318281",
    coordinatesLabel: `25°40'12.7"N 94°05'44.2"E`,
    mapEmbedUrl:
      "https://www.google.com/maps?q=25%C2%B040'12.7%22N+94%C2%B005'44.2%22E&z=17&hl=en&output=embed",
    story:
      "Tyre Plaza was born out of a simple idea — make premium tyres accessible without the premium wait. Situated at a convenient midtown location, this store is designed for busy drivers who value both quality and speed. Our streamlined service bays and dedicated SUV section mean you spend less time waiting and more time driving. We carry a curated selection focused on the best-selling passenger and SUV fitments, ensuring we always have the right tyre in stock when you need it.",
    whyChooseUs: [
      {
        title: "Quick Turnaround",
        description:
          "Optimised service bays mean most jobs are done in under 45 minutes.",
      },
      {
        title: "SUV Specialists",
        description:
          "A dedicated SUV tyre section with expert fitting for larger vehicles.",
      },
      {
        title: "Transparent Pricing",
        description:
          "No hidden charges — the price you see is the price you pay.",
      },
      {
        title: "After-Sales Support",
        description:
          "Free pressure checks and rotation reminders for every purchase.",
      },
    ],
  },
  {
    id: "brooklyn",
    name: "New Gold Star Tyres",
    gst: "13AUQPS7121L3Z4",
    shortDescription: "Quality tyres and honest advice",
    fullDescription:
      "This New Gold Star Tyres location brings our commitment to quality and customer satisfaction. We offer the full range of our tyre inventory with dependable service and expert advice for families, commuters, and businesses.",
    images: [shop4Img, shop1Img, shop3Img],
    address:
      "Ground Floor, Middle, Bayavu Hill Rd, near Axis Bank, Upper Bayavü Hill",
    city: "Kohima",
    state: "Nagaland",
    zip: "797001",
    phone: "6909318805",
    coordinatesLabel: `25°40'12.7"N 94°05'44.2"E`,
    mapEmbedUrl:
      "https://www.google.com/maps?q=25%C2%B040'12.7%22N+94%C2%B005'44.2%22E&z=17&hl=en&output=embed",
    story:
      "Built to serve families, daily commuters, and local businesses alike, this store is all about honest advice and reliable service. We understand that choosing the right tyre can be overwhelming, so our team takes the time to listen, explain, and recommend options that fit both your driving style and your budget. From budget-friendly all-season tyres to premium performance rubber, we keep it real — no overselling, just the right tyre for your needs.",
    whyChooseUs: [
      {
        title: "Family-Friendly Service",
        description:
          "Patient, no-pressure advice so every customer leaves confident in their choice.",
      },
      {
        title: "Wide Inventory",
        description:
          "From budget to premium — we stock options for every price point.",
      },
      {
        title: "Fleet Solutions",
        description:
          "Special rates and scheduling for businesses with multiple vehicles.",
      },
      {
        title: "Warranty Support",
        description:
          "Hassle-free warranty claims processed directly through our store.",
      },
    ],
  },
  {
    id: "queens",
    name: "Kohima Tyres",
    gst: "13ATGPT0101J1Z3",
    shortDescription: "Full-service tyre centre",
    fullDescription:
      "Kohima Tyres serves as a full-service retail store with a wide selection of premium tyres. Our showroom displays the complete product range, and our service bays handle everything from basic tyre changes to wheel repairs. Open for your convenience.",
    images: [shop5Img, shop3Img, shop4Img],
    address:
      "Ground Floor, Middle, Bayavu Hill Rd, near Axis Bank, Upper Bayavü Hill",
    city: "Kohima",
    state: "Nagaland",
    zip: "797001",
    phone: "6909318959",
    coordinatesLabel: "25.683825°N, 94.104774°E",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=25.683825,94.104774&z=17&hl=en&output=embed",
    story:
      "Kohima Tyres is our full-service flagship — think of it as a one-stop tyre destination. Beyond sales, we operate a complete service centre capable of handling wheel balancing, alignment, puncture repairs, and even alloy wheel refurbishment. The spacious showroom lets you see and touch every product before you buy, and our transparent service area means you can watch our technicians at work. If you're looking for a store that does it all, Kohima Tyres is the place.",
    whyChooseUs: [
      {
        title: "Complete Service Centre",
        description:
          "Sales, fitting, balancing, alignment, and repairs — all under one roof.",
      },
      {
        title: "Walk-In Showroom",
        description:
          "See and compare tyres in person before making a decision.",
      },
      {
        title: "Alloy Wheel Repairs",
        description:
          "Kerb damage? We restore alloys to near-factory condition.",
      },
      {
        title: "Extended Hours",
        description:
          "Open early and late for your convenience, including weekends.",
      },
    ],
  },
];
