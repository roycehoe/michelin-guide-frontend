import axios from "../axios";

export const DEFAULT_GET_ALL_MICHELIN_DATA_REQUEST = {
  filter: {},
  sort: [["michelin_award_sort", -1]],
  limit: 0,
} as MichelinDataRequest;

enum SortOrder {
  ASCENDING = 1,
  DESCENDING = -1,
}

interface MichelinDataRequest {
  filter: any;
  sort: [[string, SortOrder]];
}

interface Coordinates {
  lat: number;
  lng: number;
}

export type MichelinStars = "THREE_STARS" | "TWO_STARS" | "ONE_STAR";
export type MichelinAward = MichelinStars | "BIB_GOURMAND" | null;

export interface MichelinDataResponse {
  coordinates: Coordinates;
  area_name: string;
  image: string;
  city: string;
  country: string;
  currency: string;
  currency_symbol: string;
  identifier: string;
  main_image: string;
  michelin_award: MichelinAward;
  michelin_award_sort: number;
  name: string;
  price_category: number;
  region: string;
  cuisines: string[];
  objectID: string;
  description: string;
  postcode: string;
  address: string;
  _id: string;
}

export async function getMichelinDataResponse(
  request: MichelinDataRequest
): Promise<MichelinDataResponse[] | Error> {
  try {
    const response = await axios.post("", request);
    return response.data as MichelinDataResponse[];
  } catch (error) {
    return error as Error;
  }
}
