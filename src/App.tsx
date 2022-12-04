import "./App.css";
import { MenuBar } from "./pages/MenuBar";
import { MichelinPage as RestaurantList } from "./pages/RestaurantList";

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <RestaurantList></RestaurantList>
    </div>
  );
}

export default App;
