import { MichelinPage as RestaurantList } from "@/pages/HomePage/RestaurantList";
import {
  getMichelinDataResponse,
  MichelinDataResponse,
} from "@/services/getMichelinData";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { MenuBar } from "./MenuBar";

function HomePage() {
  const [restaurants, setRestaurants] = useState([] as MichelinDataResponse[]);

  useEffect(() => {
    const michelinDataResponse = async () => {
      const response = await getMichelinDataResponse();
      setRestaurants(response as MichelinDataResponse[]);
    };

    michelinDataResponse().catch((error) => console.log(error));
  }, []);

  return restaurants.length ? (
    <div className="HomePage">
      <MenuBar setRestaurants={setRestaurants} />
      <RestaurantList data={restaurants} />
    </div>
  ) : (
    <div className="HomePage">
      <CircularProgress></CircularProgress>;
    </div>
  );
}

export default HomePage;
