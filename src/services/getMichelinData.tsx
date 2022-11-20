import axios from "../axios";

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
  michelin_award: string;
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
): Promise<[MichelinDataResponse] | Error> {
  try {
    const response = await axios.post("", request);
    return response.data;
  } catch (error) {
    return error as Error;
  }
}
