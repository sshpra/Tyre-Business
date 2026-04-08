import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Collection } from "./components/Collection";
import { Contact } from "./components/Contact";
import { StoreDetail } from "./components/StoreDetail";
import { OurStores } from "./components/OurStores";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "collection", Component: Collection },
      { path: "stores", Component: OurStores },
      { path: "contact", Component: Contact },
      { path: "stores/:storeId", Component: StoreDetail },
    ],
  },
]);
