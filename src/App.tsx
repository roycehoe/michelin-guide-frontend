import { useEffect, useState } from "react";
import "./App.css";
import { MenuBar } from "./pages/MenuBar";
import { MichelinPage as RestaurantList } from "./pages/RestaurantList";
import {
  DEFAULT_GET_ALL_MICHELIN_DATA_REQUEST,
  getMichelinDataResponse,
  MichelinDataResponse,
} from "./services/getMichelinData";
import {
  getMichelinMetadataResponse,
  MichelinMetadataResponse,
} from "./services/getMichelinMetadata";

function App() {
  const [restaurantList, setRestaurantList] = useState(
    [] as MichelinDataResponse[]
  );
  const [menuBar, setMenuBar] = useState([null] as MichelinMetadataResponse);

  useEffect(() => {
    const michelinDataResponse = async () => {
      const response = await getMichelinDataResponse(
        DEFAULT_GET_ALL_MICHELIN_DATA_REQUEST
      );
      setRestaurantList(response as MichelinDataResponse[]);
    };

    michelinDataResponse().catch((error) => console.log(error));

    const michelinMetadataResponse = async () => {
      const response = await getMichelinMetadataResponse("michelin_award");
      setMenuBar(response as MichelinMetadataResponse);
    };

    michelinMetadataResponse().catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <MenuBar data={menuBar}></MenuBar>
      <RestaurantList data={restaurantList}></RestaurantList>
    </div>
  );
}

export default App;
