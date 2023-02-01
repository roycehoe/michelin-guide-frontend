import { MenuBar } from "@/pages/MenuBar";
import { MichelinPage as RestaurantList } from "@/pages/RestaurantList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <RestaurantList />
    </div>
  );
}

export default App;
