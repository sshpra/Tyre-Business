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
  /** Optional DMS coordinates shown on the store page (e.g. 25°40'12.7"N 94°05'44.2"E) */
  coordinatesLabel?: string;
}

export const stores: Store[] = [
  {
    id: "downtown",
    name: "New Gold Star Tyre",
    gst: "13AUQPS712L2Z5",
    shortDescription: "Our flagship location for premium tyres",
    fullDescription: "New Gold Star Tyre has been serving the community with the complete range of premium tyres. This location offers a fully equipped service bay for tyre fitting, balancing, and alignment. Our experienced team provides personalized recommendations and same-day service for most requests.",
    images: [shop1Img, shop2Img, shop4Img],
    address: "Ground Floor, Middle, Bayavu Hill Rd, near Axis Bank, Upper Bayavü Hill",
    city: "Kohima",
    state: "Nagaland",
    zip: "797001",
    phone: "7005996467",
    coordinatesLabel: `25°40'12.7"N 94°05'44.2"E`,
    mapEmbedUrl:
      "https://www.google.com/maps?q=25%C2%B040'12.7%22N+94%C2%B005'44.2%22E&z=17&hl=en&output=embed",
  },
  {
    id: "midtown",
    name: "Tyre Plaza",
    gst: "13AKKPB7198Q2ZH",
    shortDescription: "Your trusted tyre destination",
    fullDescription: "Tyre Plaza caters to customers with an extensive selection of premium passenger and SUV tyres. We focus on quick turnaround times and maintain high standards of quality and customer service. Visit us for expert advice and competitive pricing.",
    images: [shop2Img, shop1Img, shop5Img],
    address: "Ground Floor, Middle, Bayavu Hill Rd, near Axis Bank, Upper Bayavü Hill",
    city: "Kohima",
    state: "Nagaland",
    zip: "797001",
    phone: "6909318281",
    coordinatesLabel: `25°40'12.7"N 94°05'44.2"E`,
    mapEmbedUrl:
      "https://www.google.com/maps?q=25%C2%B040'12.7%22N+94%C2%B005'44.2%22E&z=17&hl=en&output=embed",
  },
  {
    id: "westside",
    name: "New Gold Star Tyres",
    gst: "13AUQPS7121L3Z4",
    shortDescription: "Premium tyres and expert service",
    fullDescription: "This New Gold Star Tyres location offers the full range of our products with specialized services including fitting, balancing, and alignment. Our team is dedicated to helping you find the right tyres for your vehicle and driving needs.",
    images: [shop3Img, shop2Img, shop5Img],
    address: "Ground Floor, Middle, Bayavu Hill Rd, near Axis Bank, Upper Bayavü Hill",
    city: "Kohima",
    state: "Nagaland",
    zip: "797001",
    phone: "6909318805",
    coordinatesLabel: `25°40'12.7"N 94°05'44.2"E`,
    mapEmbedUrl:
      "https://www.google.com/maps?q=25%C2%B040'12.7%22N+94%C2%B005'44.2%22E&z=17&hl=en&output=embed",
  },
  {
    id: "brooklyn",
    name: "New Gold Star Tyres",
    gst: "13AUQPS7121L3Z4",
    shortDescription: "Quality tyres and honest advice",
    fullDescription: "This New Gold Star Tyres location brings our commitment to quality and customer satisfaction. We offer the full range of our tyre inventory with dependable service and expert advice for families, commuters, and businesses.",
    images: [shop4Img, shop1Img, shop3Img],
    address: "Ground Floor, Middle, Bayavu Hill Rd, near Axis Bank, Upper Bayavü Hill",
    city: "Kohima",
    state: "Nagaland",
    zip: "797001",
    phone: "6909318805",
    coordinatesLabel: `25°40'12.7"N 94°05'44.2"E`,
    mapEmbedUrl:
      "https://www.google.com/maps?q=25%C2%B040'12.7%22N+94%C2%B005'44.2%22E&z=17&hl=en&output=embed",
  },
  {
    id: "queens",
    name: "Kohima Tyres",
    gst: "13ATGPT0101J1Z3",
    shortDescription: "Full-service tyre centre",
    fullDescription: "Kohima Tyres serves as a full-service retail store with a wide selection of premium tyres. Our showroom displays the complete product range, and our service bays handle everything from basic tyre changes to wheel repairs. Open for your convenience.",
    images: [shop5Img, shop3Img, shop4Img],
    address: "Ground Floor, Middle, Bayavu Hill Rd, near Axis Bank, Upper Bayavü Hill",
    city: "Kohima",
    state: "Nagaland",
    zip: "797001",
    phone: "6909318959",
    coordinatesLabel: `25°40'12.7"N 94°05'44.2"E`,
    mapEmbedUrl:
      "https://www.google.com/maps?q=25%C2%B040'12.7%22N+94%C2%B005'44.2%22E&z=17&hl=en&output=embed",
  },
];
