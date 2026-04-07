// app/routes/home.tsx
import type { Route } from "./+types/home";
import Hero from "../components/Home/Hero";
import WhatWeApart from "../components/Home/WhatWeApart";
import WorkProcess from "../components/Home/WorkProcess";
import ServiceBrief from "../components/Home/ServiceBrief";
import BuyingServiceGrid from "../components/Shared/Common/BuyingServiceGrid";
import Catalog from "../components/Home/Catalog";
import ProfService from "../components/Home/ProfService";
import ContactCTA from "../components/Home/ContactCTA";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Alliance Sourcing BD | Home" },
    { name: "description", content: "Your trusted partner in apparel sourcing" },
  ];
}

export default function Home() {
  return (
    <main>
      {/* Call all components of Home Page */}
      <Hero />
      <WhatWeApart />
      <WorkProcess />
      <ServiceBrief />
      <BuyingServiceGrid />
      <Catalog />
      <ProfService />
      <ContactCTA />
    </main>
  );
}