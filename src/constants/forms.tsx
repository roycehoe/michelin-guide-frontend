import { MichelinAward } from "@/services/getMichelinData";

interface MenuItem {
  name: string;
  value: MichelinAward;
}

export interface BasicSelectData {
  inputLabel: string;
  menuItem: MenuItem[];
}

export const FILTER_BY_MICHELIN_RATING_SELECTION: BasicSelectData = {
  inputLabel: "Michelin Rating",
  menuItem: [
    {
      name: "One star",
      value: "ONE_STAR",
    },
    {
      name: "Two stars",
      value: "TWO_STARS",
    },
    {
      name: "Three stars",
      value: "THREE_STARS",
    },
    {
      name: "Bib Gourmand",
      value: "BIB_GOURMAND",
    },
    {
      name: "No award",
      value: null,
    },
  ],
};
