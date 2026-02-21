export interface GalleryImage {
  src: string;
  caption: string;
}

export const saltSpringImages: GalleryImage[] = [
  { src: "/images/stock/misty_forest_morning_light_rays.jpg", caption: "Misty morning light through the forest" },
  { src: "/images/stock/dark_oldgrowth_ferns_light_shafts.jpg", caption: "Old-growth forest with ferns" },
  { src: "/images/stock/oldgrowth_moss_lichen_forest.jpg", caption: "Moss and lichen-draped old-growth trees" },
  { src: "/images/stock/conifer_forest_mossy_ground_mist.jpg", caption: "Conifer forest in the morning mist" },
  { src: "/images/stock/rocky_shore_cove_through_trees.jpg", caption: "Rocky shoreline cove through the trees" },
  { src: "/images/stock/ganges_harbour_sailboats_overcast.jpg", caption: "Ganges Harbour" },
  { src: "/images/stock/ganges_saturday_market.jpg", caption: "Ganges Saturday Market" },
  { src: "/images/stock/saltspring_island_fire_hall.jpg", caption: "Salt Spring Island Fire Hall" },
];

export const groundsImages: GalleryImage[] = [
  { src: "/images/gallery/morning_sunrise_landscape.jpg", caption: "Morning sunrise over the land" },
  { src: "/images/gallery/fire_circle_benches_dusk.jpg", caption: "Fire circle at dusk" },
  { src: "/images/gallery/sunny_mossy_forest_clearing.jpg", caption: "Sunny mossy clearing in the forest" },
  { src: "/images/gallery/sunset_hilltop_forest_vista.jpg", caption: "Sunset from the hilltop vista" },
  { src: "/images/gallery/arbutus_rocks_overcast_outlook.jpg", caption: "Arbutus trees and mossy rock outlook" },
  { src: "/images/gallery/forest_sunset_canopy.jpg", caption: "Sunset through the forest canopy" },
  { src: "/images/gallery/tent_interior_forest_view.jpg", caption: "View from inside the tent accommodation" },
  { src: "/images/gallery/tent_house_interior.jpg", caption: "Tent house interior" },
  { src: "/images/gallery/forest_path_arbutus_tent_platform.jpg", caption: "Forest path to the tent platform" },
  { src: "/images/gallery/outdoor_sitting_area.jpg", caption: "Outdoor sitting area" },
  { src: "/images/gallery/outdoor_campfire.jpg", caption: "Campfire gathering" },
  { src: "/images/gallery/garden_late-season.jpg", caption: "The kitchen garden in late season" },
  { src: "/images/gallery/garden_harvest1.jpg", caption: "Garden harvest" },
  { src: "/images/gallery/morning_light_newly_planted.jpg", caption: "Foxgloves in the meadow" },
  { src: "/images/gallery/sunny_day_vibrant_greenery.jpg", caption: "Summer wildflowers on the hillside" },
  { src: "/images/gallery/rainbow_over_trees.jpg", caption: "Rainbow over the trees" },
];

// Used on the home page
export const homePageGallery = groundsImages.slice(0, 5);

// Legacy export for any existing references
export const galleryImages = [...groundsImages, ...saltSpringImages];
