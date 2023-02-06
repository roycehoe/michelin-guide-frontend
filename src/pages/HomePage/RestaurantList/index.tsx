import { RestaurantCard } from "@/components/RestaurantCard";
import {
  DEFAULT_GET_ALL_MICHELIN_DATA_REQUEST,
  getMichelinDataResponse,
  MichelinDataResponse,
} from "@/services/getMichelinData";
import { useEffect, useState } from "react";

export const MichelinPage = (prop: { data: MichelinDataResponse[] }) => {
  return (
    <div>
      {prop.data.map((data, index) => {
        return (
          <div key={index} className="mt-4">
            <RestaurantCard data={data}></RestaurantCard>
          </div>
        );
      })}
    </div>
  );
};
