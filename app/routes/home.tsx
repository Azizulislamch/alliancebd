// app/routes/home.tsx
import type { Route } from "./+types/home";
import Hero from "../components/Home/Hero";
import WhatWeApart from "../components/Home/WhatWeApart";

export function meta({}: Route.MetaArgs) {
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
      <WhatWeApart/>
    </main>
  );
}