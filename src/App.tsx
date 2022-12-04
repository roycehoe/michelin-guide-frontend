import { useEffect, useState } from "react";
import "./App.css";
import { MichelinPage } from "./pages/MichelinPage";
import { MichelinSort } from "./pages/MichelinSort";
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
  const [michelinPageData, setMichelinPageData] = useState(
    [] as MichelinDataResponse[]
  );
  const [michelinFilterData, setMichelinFilterData] = useState([
    null,
  ] as MichelinMetadataResponse);

  useEffect(() => {
    const michelinDataResponse = async () => {
      const response = await getMichelinDataResponse(
        DEFAULT_GET_ALL_MICHELIN_DATA_REQUEST
      );
      setMichelinPageData(response as MichelinDataResponse[]);
    };

    michelinDataResponse().catch((error) => console.log(error));

    const michelinMetadataResponse = async () => {
      const response = await getMichelinMetadataResponse("michelin_award");
      setMichelinFilterData(response as MichelinMetadataResponse);
    };

    michelinMetadataResponse().catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <MichelinSort data={michelinFilterData}></MichelinSort>
      <MichelinPage data={michelinPageData}></MichelinPage>
    </div>
  );
}

export default App;
