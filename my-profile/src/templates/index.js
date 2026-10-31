// Template registry. To add a new template:
//   1. create src/templates/<name>/ with a component that takes { data }
//   2. add one entry here — the switcher picks it up automatically.
import ModernTemplate from "./modern/ModernTemplate.jsx";
import SidebarTemplate from "./sidebar/SidebarTemplate.jsx";

export const templates = [
  { id: "modern", label: "Modern (Students)", component: ModernTemplate },
  { id: "sidebar", label: "Classic Sidebar", component: SidebarTemplate },
];
