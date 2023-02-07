interface BasicMenuItem {
  name: string;
  value: number | string | null;
}

export interface BasicSelectData {
  inputLabel: string;
  menuItem: BasicMenuItem[];
}

interface FilterSelection extends BasicSelectData {
  param: string;
}

export const FILTER_BY_MICHELIN_RATING_SELECTION: FilterSelection = {
  param: "michelin_award",
  inputLabel: "Rating",
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

export const FILTER_BY_PRICE_SELECTION: FilterSelection = {
  param: "price_category",
  inputLabel: "Price",
  menuItem: [
    {
      name: "$",
      value: 1,
    },
    {
      name: "$$",
      value: 2,
    },
    {
      name: "$$$",
      value: 3,
    },
    {
      name: "$$$$",
      value: 4,
    },
  ],
};

export const SORT_BY_PRICE_SELECTION: BasicSelectData = {
  inputLabel: "Sort",
  menuItem: [
    {
      name: "Michelin Award",
      value: "michelin_award_sort",
    },
    {
      name: "Price",
      value: "price_category",
    },
  ],
};
