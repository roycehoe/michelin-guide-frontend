import { getMichelinMetadataResponse, MetadataName } from "@/services/getMichelinMetadata";

export const useMenuBar = () => {
    async function getSortData(menuBarMenu: MetadataName) {
        const response = await getMichelinMetadataResponse(menuBarMenu);
        return response;
      }
    
    return {getSortData}
}