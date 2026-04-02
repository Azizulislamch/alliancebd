// import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;

import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [

  // Main Layout (Navbar + Footer)
  layout("./layouts/MainLayout.tsx", [

    // Home Page → "/"
    index("routes/home.tsx"),

    // route("login", "./auth/login.tsx"),

    // About Page → "/about"
    route("about", "routes/about.tsx"),

    // Buying House Page → "/buying-house"
    route("buying-house", "routes/buying-house.tsx"),

    // Factory Page → "/factory"
    route("factory", "routes/factory.tsx")
    
  ]),
] satisfies RouteConfig;
