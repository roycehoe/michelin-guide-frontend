import { RestaurantCard } from "@/components/RestaurantCard";
import {
  DEFAULT_GET_ALL_MICHELIN_DATA_REQUEST,
  getMichelinDataResponse,
  MichelinDataResponse,
} from "@/services/getMichelinData";
import { useEffect, useState } from "react";

export const MichelinPage = (prop) => {
  const [restaurants, setRestaurants] = useState([] as MichelinDataResponse[]);

  useEffect(() => {
    const michelinDataResponse = async () => {
      const response = await getMichelinDataResponse(
        DEFAULT_GET_ALL_MICHELIN_DATA_REQUEST
      );
      setRestaurants(response as MichelinDataResponse[]);
    };

    michelinDataResponse().catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {restaurants.map((data, index) => {
        return (
          <div key={index} className="mt-4">
            <RestaurantCard data={data}></RestaurantCard>
          </div>
        );
      })}
    </div>
  );
};
