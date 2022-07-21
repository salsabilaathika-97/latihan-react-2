import Navbar from "./components/Navbar";
import Strength from "./components/Strength";
import { navList, image, strengthList } from "./const/staticData";


const props = {
  navList,
  image,
  strengthList,
}

const App = () => {
  return (
    <div>
      {/* <Navbar {...props} /> */}
      <Strength {...props} />
    </div>
  )
}

export default App;
