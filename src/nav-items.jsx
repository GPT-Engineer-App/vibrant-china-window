import { Home, Flag } from "lucide-react";
import Index from "./pages/Index.jsx";
import China from "./pages/China.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "China",
    to: "/china",
    icon: <Flag className="h-4 w-4" />,
    page: <China />,
  },
];
