import { Routes, Route } from "react-router";
import { SiteRoutes } from "common";
import { Home, About, Contact } from "./Pages";

function Router() {
  return (
    <Routes>
      <Route path={SiteRoutes.base} element={<Home />} />
      <Route path={SiteRoutes.home} element={<Home />} />
      <Route path={SiteRoutes.about} element={<About />} />
      <Route path={SiteRoutes.contact} element={<Contact />} />
    </Routes>
  );
}

export { Router };
