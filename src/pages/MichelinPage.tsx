import { MichelinCard } from "@/components/MichelinCard";
import {
  DEFAULT_GET_ALL_MICHELIN_DATA_REQUEST,
  getMichelinDataResponse,
  MichelinDataResponse,
} from "@/services/getMichelinData";
import { useEffect, useState } from "react";

export const MichelinPage = () => {
  const [michelinData, setMichelinData] = useState(
    [] as MichelinDataResponse[]
  );

  useEffect(() => {
    const michelinDataResponse = async () => {
      const response = await getMichelinDataResponse(
        DEFAULT_GET_ALL_MICHELIN_DATA_REQUEST
      );
      setMichelinData(response as MichelinDataResponse[]);
    };

    michelinDataResponse().catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {michelinData.map((data) => {
        return (
          <div className="mt-4">
            <MichelinCard data={data}></MichelinCard>
          </div>
        );
      })}
    </div>
  );
};
