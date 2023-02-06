import {
  MetadataName,
  MichelinMetadataResponse,
} from "@/services/getMichelinMetadata";

export const useMenuBar = () => {
  async function getSortData(menuBarMenu: MetadataName) {
    const [loading, error, data] = useFetch(menuBarMenu, "GET");
    console.log({ loading });
    console.log({ error });
    console.log({ data });
    return data as MichelinMetadataResponse;
  }

  return { getSortData };
};
