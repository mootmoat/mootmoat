import type { DocsSidebarNavData } from "../types/configDataTypes";

/**
 * Combined sidebar navigation data for the English locale
 */
const sidebarNavData: DocsSidebarNavData = {
  tabs: [
    {
      id: "main",
      title: "MootMoat V17",
      description: "Core Implementation Guides",
      icon: "tabler/file-text",
      sections: [
        {
          id: "core",
          title: "Core Documents",
        },
        {
          id: "implementation",
          title: "Implementation Study Guides",
        },
        {
          id: "specs",
          title: "Specifications & Roadmap",
        },
      ],
    },
  ],
};

export default sidebarNavData;
