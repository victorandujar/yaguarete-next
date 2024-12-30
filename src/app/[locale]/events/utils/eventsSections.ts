import { EventsContent } from "@/interfaces/Events";
import { ImageStructure } from "@/interfaces/Images";

export const eventsContentSections: EventsContent[] = [
  {
    id: 1,
    image: "/images/events-rituals.png",
    text: "rituals",
  },
  {
    id: 2,
    image: "/images/events-tarot.png",
    text: "tarot",
  },
  {
    id: 3,
    image: "/images/events-food.png",
    text: "food",
  },
  {
    id: 4,
    image: "/images/events-community.png",
    text: "community",
  },
];

export const eventsGalleryImages: ImageStructure[] = [
  { id: 1, src: "/images/events-smoke.png" },
  { id: 2, src: "/images/events-cocktail.png" },
  { id: 3, src: "/images/events-fruit.png" },
  { id: 4, src: "/images/events-brindis.png" },
];
