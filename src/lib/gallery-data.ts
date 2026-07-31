import type { ImageKey } from "@/lib/images";

export type GalleryItem = {
  image: ImageKey;
  category: "Residential" | "Commercial" | "Airbnb" | "Detail";
  tall?: boolean;
};

export const galleryItems: GalleryItem[] = [
  { image: "exteriorTreeDeck", category: "Residential", tall: true },
  { image: "kitchenIsland", category: "Residential" },
  { image: "bathroomGoldFixtures", category: "Detail" },
  { image: "livingRoomFireplace", category: "Commercial" },
  { image: "bedroomHotelStyle", category: "Airbnb", tall: true },
  { image: "exteriorAngular", category: "Residential" },
  { image: "vacuumAction", category: "Detail" },
  { image: "livingRoomPlantAccent", category: "Commercial", tall: true },
  { image: "bathroomDarkTile", category: "Detail" },
  { image: "exteriorTreeYard", category: "Residential" },
  { image: "differenceExterior", category: "Airbnb", tall: true },
  { image: "livingRoomCozy", category: "Commercial" },
  { image: "windowCleaning", category: "Detail" },
  { image: "bedroomWhite", category: "Airbnb" },
  { image: "interiorStairs", category: "Residential", tall: true },
  { image: "bathroomSmallWhite", category: "Detail" },
  { image: "livingRoomTealPillow", category: "Commercial" },
  { image: "exteriorMinimalWhite", category: "Residential" },
];
