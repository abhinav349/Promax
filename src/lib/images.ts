type CuratedImage = {
  id: string;
  alt: string;
};

function unsplash(id: string, alt: string): CuratedImage {
  return { id, alt };
}

function url(id: string, w: number, q = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const images = {
  heroFallback: unsplash(
    "1600596542815-ffad4c1539a9",
    "Modern white home with pool under a clear blue sky"
  ),
  differenceExterior: unsplash(
    "1613977257363-707ba9348227",
    "Aerial view of a modern villa with a pool, the kind of property ProMax maintains"
  ),
  exteriorTreeDeck: unsplash(
    "1600585154340-be6161a56a0c",
    "Dark modern home with a large tree and outdoor deck"
  ),
  exteriorTreeYard: unsplash(
    "1600607688969-a5bfcd646154",
    "Modern home exterior with mature tree and manicured lawn"
  ),
  exteriorAngular: unsplash(
    "1600047509807-ba8f99d2cdde",
    "Angular modern house exterior at dusk with metal cladding"
  ),
  exteriorMinimalWhite: unsplash(
    "1523217582562-09d0def993a6",
    "Minimal white modern house under a clear sky"
  ),
  kitchenIsland: unsplash(
    "1484154218962-a197022b5858",
    "Bright kitchen with white island, black stools and pendant lighting"
  ),
  bathroomGoldFixtures: unsplash(
    "1584622650111-993a426fbf0a",
    "Glass-walled shower with gold fixtures and plants"
  ),
  bathroomDarkTile: unsplash(
    "1600566752355-35792bedcfea",
    "Dark-tiled bathroom with a freestanding tub"
  ),
  bathroomSmallWhite: unsplash(
    "1552321554-5fefe8c9ef14",
    "Small white bathroom with plants and natural light"
  ),
  bedroomHotelStyle: unsplash(
    "1521783988139-89397d761dce",
    "Elegant hotel-style bedroom with a navy upholstered bed"
  ),
  bedroomWhite: unsplash(
    "1512918728675-ed5a9ecdebfd",
    "Bright white bedroom with patterned rug"
  ),
  livingRoomCozy: unsplash(
    "1600607687939-ce8a6c25118c",
    "Cozy living room with white sofa and wood accents"
  ),
  livingRoomFireplace: unsplash(
    "1560448204-e02f11c3d0e2",
    "Neutral living room with white sofa and fireplace"
  ),
  livingRoomPlantAccent: unsplash(
    "1489171078254-c3365d6e359f",
    "Living room with botanical wallpaper accent and yellow pillow"
  ),
  livingRoomTealPillow: unsplash(
    "1493663284031-b7e3aefcae8e",
    "Living room with grey sofa and teal accent pillows"
  ),
  interiorStairs: unsplash(
    "1502005229762-cf1b2da7c5d6",
    "Modern interior staircase with black railing"
  ),
  vacuumAction: unsplash(
    "1527515637462-cff94eecc1ac",
    "Cordless vacuum cleaning a colorful carpet, mid-motion"
  ),
  glovesHeart: unsplash(
    "1585421514738-01798e348b17",
    "Blue-gloved hands forming a heart shape"
  ),
  windowCleaning: unsplash(
    "1581578731548-c64695cc6952",
    "Gloved hands cleaning a window pane"
  ),
} as const;

export type ImageKey = keyof typeof images;

export function img(key: ImageKey, w: number, q?: number) {
  const entry = images[key];
  return { src: url(entry.id, w, q), alt: entry.alt };
}
