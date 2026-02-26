export interface GalleryImage {
  src: string;
  caption: string;
}

export interface GallerySection {
  title: string;
  key: string;
  images: GalleryImage[];
}

export const gallerySections: GallerySection[] = [
  {
    title: "The Grounds",
    key: "grounds",
    images: [
      { src: "/images/gallery/grounds/morning_sunrise_landscape.jpg", caption: "Morning sunrise over the land" },
      { src: "/images/gallery/grounds/sunny_day_vibrant_greenery.jpg", caption: "Summer wildflowers on the hillside" },
      { src: "/images/gallery/grounds/rainbow_over_trees.jpg", caption: "Rainbow over the trees" },
      { src: "/images/gallery/grounds/outdoor_campfire.jpg", caption: "Campfire gathering" },
      { src: "/images/gallery/grounds/outdoor_sitting_area.jpg", caption: "Outdoor sitting area" },
      { src: "/images/gallery/grounds/outdoor_dining2.jpeg", caption: "Outdoor dining on the land" },
      { src: "/images/gallery/grounds/morning_light_newly_planted.jpg", caption: "Foxgloves in the meadow" },
      { src: "/images/gallery/grounds/sunset.jpg", caption: "Sunset over the land" },
      { src: "/images/gallery/grounds/forest_path.jpeg", caption: "Forest path through the property" },
      { src: "/images/gallery/grounds/view.jpeg", caption: "Views from the land" },
      { src: "/images/gallery/grounds/view2.jpg", caption: "Views from the property" },
      { src: "/images/gallery/grounds/view3.jpg", caption: "Views across the island" },
      { src: "/images/gallery/grounds/cat.jpeg", caption: "One of our local cats" },
    ],
  },
  {
    title: "Our Farm",
    key: "farm",
    images: [
      { src: "/images/gallery/farm/garden_flowers.jpg", caption: "Vibrant flowers from our gardens" },
      { src: "/images/gallery/farm/garden_harvest1.jpg", caption: "Garden harvest" },
      { src: "/images/gallery/farm/garden_harvest2.jpg", caption: "Garden harvest" },
      { src: "/images/gallery/farm/farm0.jpg", caption: "The farm" },
      { src: "/images/gallery/farm/farm2a.jpg", caption: "Growing season" },
      { src: "/images/gallery/farm/farm3.jpg", caption: "Farm garden beds" },
      { src: "/images/gallery/farm/farm4.jpg", caption: "Farm produce" },
      { src: "/images/gallery/farm/farm5.jpg", caption: "Growing together" },
      { src: "/images/gallery/farm/farm6.jpg", caption: "Farm work" },
      { src: "/images/gallery/farm/farm7.jpg", caption: "Harvest season" },
      { src: "/images/gallery/farm/farm8b.jpg", caption: "Farm in bloom" },
      { src: "/images/gallery/farm/farm9.jpeg", caption: "The farm" },
    ],
  },
  {
    title: "Our Spaces",
    key: "spaces",
    images: [
      { src: "/images/gallery/spaces/tent_house_interior.jpg", caption: "Tent house interior" },
      { src: "/images/gallery/spaces/entelekitchen.jpg", caption: "The kitchen" },
      { src: "/images/gallery/spaces/entelekitchen2.jpg", caption: "Kitchen and gathering space" },
      { src: "/images/gallery/spaces/entelekitchen3.jpg", caption: "The kitchen at Entelechy" },
      { src: "/images/gallery/spaces/outdoor_bath.jpeg", caption: "Outdoor bath facilities" },
      { src: "/images/gallery/spaces/outhouse.jpg", caption: "Outhouse" },
      { src: "/images/gallery/spaces/outhouse2.jpg", caption: "Outhouse" },
      { src: "/images/gallery/spaces/outhouse3.jpg", caption: "Outhouse" },
    ],
  },
  {
    title: "On Salt Spring",
    key: "stock",
    images: [
      { src: "/images/gallery/stock/misty_forest_morning_light_rays.jpg", caption: "Misty morning light through the forest" },
      { src: "/images/gallery/stock/dark_oldgrowth_ferns_light_shafts.jpg", caption: "Old-growth forest with ferns" },
      { src: "/images/gallery/stock/oldgrowth_moss_lichen_forest.jpg", caption: "Moss and lichen-draped old-growth trees" },
      { src: "/images/gallery/stock/conifer_forest_mossy_ground_mist.jpg", caption: "Conifer forest in the morning mist" },
      { src: "/images/gallery/stock/rocky_shore_cove_through_trees.jpg", caption: "Rocky shoreline cove through the trees" },
      { src: "/images/gallery/stock/ganges_harbour_sailboats_overcast.jpg", caption: "Ganges Harbour" },
      { src: "/images/gallery/stock/ganges_saturday_market.jpg", caption: "Ganges Saturday Market" },
      { src: "/images/gallery/stock/saltspring_island_fire_hall.jpg", caption: "Salt Spring Island Fire Hall" },
    ],
  },
];
