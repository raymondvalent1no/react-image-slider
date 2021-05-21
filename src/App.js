import "./App.css";
import ImageSlider from "./components/ImageSlider";
import { Images } from "./components/Images";

function App() {
  return <ImageSlider slides={Images} />;
}

export default App;
