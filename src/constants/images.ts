// Source Imports

// Card Section
import RevenueChart from "../../public/assets/images/revenue-chart.png";

// Features Section
import RevenueSignals from "../../public/assets/images/revenue-signals.png";
import TeamKPIs from "../../public/assets/images/team-kpis.png";

/// Galaxy
import Galaxy from "../../public/assets/images/galaxy.png";

// Branding Assets
import Logo from "../../public/assets/logos/logo.png";
import LogoC from "../../public/assets/logos/logo-c.png";

// Dummy Imports
import Logo1 from "../../public/assets/logos/dummies/logoipsum-362.png";
import Logo2 from "../../public/assets/logos/dummies/logoipsum-369.png";
import Logo3 from "../../public/assets/logos/dummies/logoipsum-393.png";
import Logo4 from "../../public/assets/logos/dummies/logoipsum-404.png";
import Logo5 from "../../public/assets/logos/dummies/logoipsum-414.png";
import Logo6 from "../../public/assets/logos/dummies/logoipsum-416.png";

// Declarations
export const IMAGES = {
  RevenueChart,
  RevenueSignals,
  TeamKPIs,
  Galaxy,
} as const;

export const BRAND = {
  Logo,
  LogoC,
} as const;

export const DUMMY = {
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
} as const;

// Exports
export type ImageKey = keyof typeof IMAGES;
export type BrandKey = keyof typeof BRAND;
export type DummyKey = keyof typeof DUMMY;
