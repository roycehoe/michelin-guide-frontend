import axios from "../axios";

const DEFAULT_MICHELIN_FILTERS: MetadataName[] = [
  "price_category",
  "michelin_award",
  "cuisines",
];

export type MetadataName =
  | "coordinates"
  | "area_name"
  | "image"
  | "city"
  | "country"
  | "currency"
  | "currency_symbol"
  | "identifier"
  | "main_image"
  | "michelin_award"
  | "michelin_award_sort"
  | "name"
  | "price_category"
  | "region"
  | "cuisines"
  | "objectID"
  | "description"
  | "postcode"
  | "address"
  | "id";

export type MichelinMetadataResponse =
  | [string | null]
  | [number | null]
  | [null];

export async function getMichelinMetadataResponse(
  metadataName: MetadataName
): Promise<MichelinMetadataResponse | Error> {
  try {
    const response = await axios.get(metadataName);
    return response.data;
  } catch (error) {
    return error as Error;
  }
}
