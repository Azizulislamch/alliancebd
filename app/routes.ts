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

  layout("./layouts/MainLayout.tsx", [
    index("routes/home.tsx"),
    // route("login", "./auth/login.tsx"),
    route("about", "routes/about.tsx"),
    route("buying-house", "routes/buying-house.tsx"),
    route("factory", "routes/factory.tsx")
    
  ]),
] satisfies RouteConfig;
