import { MenuBar } from "@/pages/HomePage/MenuBar";
import { MichelinPage as RestaurantList } from "@/pages/HomePage/RestaurantList";

function HomePage() {
  return (
    <div className="HomePage">
      <MenuBar />
      <RestaurantList />
    </div>
  );
}

export default HomePage;
