import "./App.css";
import { MichelinPage } from "./pages/MichelinPage";
import { MichelinHeader } from "./pages/MichelinSort";

function App() {
  return (
    <div className="App">
      <MichelinHeader></MichelinHeader>
      <MichelinPage></MichelinPage>
    </div>
  );
}

export default App;
