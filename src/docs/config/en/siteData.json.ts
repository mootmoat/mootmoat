import type { DocsSiteData } from "../types/configDataTypes";

const docsSiteData: DocsSiteData = {
  title: "MootMoat V17",
  description: "MootMoat implementation resources and knowledge gap specifications by Erik Norris.",
  navSocials: [],
  footerSocials: [
    {
      social: "GitHub",
      link: "https://github.com/mootmoat",
      icon: "tabler/brand-github",
    },
  ],
  defaultImage: {
    src: "/assets/mootmoat_v17.png",
    alt: "MootMoat V17 Logo",
  },
  author: {
    name: "Erik Norris",
    email: "erik@mechanistic.com",
    twitter: "eriknorris",
  },
};

export default docsSiteData;
