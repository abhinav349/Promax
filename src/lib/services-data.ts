export type ServiceItem = {
  name: string;
  description: string;
  tag?: "most requested" | "add-on" | "seasonal";
};

export type ServiceCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
};

export const services: ServiceCategory[] = [
  {
    id: "residential",
    title: "Residential Cleaning",
    subtitle: "Every room treated with the same care you'd give it yourself",
    items: [
      {
        name: "Standard Home Clean",
        description:
          "Weekly, bi-weekly or one-time visits covering kitchens, bathrooms, living spaces and bedrooms.",
        tag: "most requested",
      },
      {
        name: "Move-In / Move-Out Clean",
        description:
          "A full reset for empty homes — baseboards, cabinet interiors, appliances, the works.",
      },
      {
        name: "Post-Renovation Clean",
        description:
          "Dust and debris removal after contractors leave, room by room, surface by surface.",
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    subtitle: "Professional spaces that stay presentable, every day",
    items: [
      {
        name: "Office Cleaning",
        description:
          "Daily or scheduled cleaning for workspaces, break rooms and washrooms.",
        tag: "most requested",
      },
      {
        name: "Retail & Storefront",
        description:
          "Opening and closing cleans that keep customer-facing spaces spotless.",
      },
      {
        name: "Property Common Areas",
        description:
          "Lobbies, stairwells and shared spaces for multi-unit buildings.",
      },
    ],
  },
  {
    id: "airbnb",
    title: "Airbnb & Short-Term",
    subtitle: "Guest-ready turnovers that protect your rating",
    items: [
      {
        name: "Turnover Cleaning",
        description:
          "A full reset between bookings, timed to your check-in and check-out windows.",
        tag: "most requested",
      },
      {
        name: "Linen & Restock Service",
        description:
          "Fresh linens, towels and amenities set for every guest, every time.",
        tag: "add-on",
      },
      {
        name: "Photo-Ready Staging",
        description:
          "A final walkthrough so every listing photo looks its absolute best.",
        tag: "add-on",
      },
    ],
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    subtitle: "The corner-to-corner reset your space is overdue for",
    items: [
      {
        name: "Seasonal Deep Clean",
        description:
          "A full top-to-bottom reset — twice a year, or whenever it's time.",
        tag: "seasonal",
      },
      {
        name: "Kitchen Detail",
        description:
          "Inside ovens, behind appliances — grease and grime fully addressed.",
      },
      {
        name: "Bathroom Detail",
        description: "Grout, fixtures and tile brought back to like-new.",
      },
    ],
  },
  {
    id: "maintenance",
    title: "Regular Maintenance",
    subtitle: "A cadence that keeps your property consistently ready",
    items: [
      {
        name: "Weekly Plan",
        description: "Consistent upkeep for busy households and high-traffic offices.",
      },
      {
        name: "Bi-Weekly Plan",
        description: "The most popular cadence for a well-maintained home.",
        tag: "most requested",
      },
      {
        name: "Custom Schedule",
        description: "Built around your calendar, your property and your priorities.",
      },
    ],
  },
  {
    id: "property-management",
    title: "Property Management Services",
    subtitle:
      "Lawn care, snow removal and exterior upkeep — bundled into packages built around your property",
    items: [
      {
        name: "Lawn Mowing",
        description:
          "Scheduled mowing, trimming and edging that keeps grounds tidy all season long.",
        tag: "most requested",
      },
      {
        name: "Snow Plowing",
        description:
          "Reliable driveway, lot and walkway clearing before Nova Scotia's first flakes settle.",
        tag: "seasonal",
      },
      {
        name: "Pressure Washing",
        description:
          "High-pressure cleaning for siding, walkways and other exterior surfaces.",
      },
      {
        name: "Deck Staining",
        description:
          "Pressure washing and prepping, followed by a fresh coat of stain to protect and refresh your deck.",
      },
      {
        name: "Driveway Sealing",
        description:
          "Professional sealcoating that protects your driveway from cracks, stains and weather damage.",
      },
      {
        name: "Property Cleaning",
        description:
          "Pair any exterior plan with interior or common-area cleaning for full-property coverage.",
        tag: "add-on",
      },
    ],
  },
];
