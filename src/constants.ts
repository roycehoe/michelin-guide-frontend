import { MichelinStars } from "./services/getMichelinData";

export const BIB_GOURMAND_IMAGE =
  "https://guide.michelin.com/assets/images/icons/bib-gourmand-1cdd0611ba6b620ab4815bed020274dd.svg";
export const MICHELIN_STAR_IMAGE =
  "https://guide.michelin.com/assets/images/icons/1star-1f2c04d7e6738e8a3312c9cda4b64fd0.svg";

export const MICHELIN_AWARD_MAP: Record<MichelinStars, number> = {
  THREE_STARS: 3,
  TWO_STARS: 2,
  ONE_STAR: 1,
};
