import { useFetch } from "@/hooks/use-fetch";
import {
  MetadataName,
  MichelinMetadataResponse,
} from "@/services/getMichelinMetadata";

export const useMenuBar = () => {
  async function getSortData(menuBarMenu: MetadataName) {
    const [loading, error, data] = useFetch(menuBarMenu, "GET");
    return data as MichelinMetadataResponse;
  }

  return { getSortData };
};
