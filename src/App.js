import Navbar from "./components/Navbar";
import Strength from "./components/Strength";
import { navList, image, strengthList } from "./const/staticData";
import {useState} from "react";

const props = {
  navList,
  image,
  strengthList,
}

const App = () => {

  const [showSidebar, setshowSidebar] = useState(false);

  console.log("ini sidebar",showSidebar);

  const handleSidebar = () => {
    console.log("fungsi berjalan");
    setshowSidebar(!showSidebar);
  }

  return (
    <div>
      {/* <Navbar {...props} /> */}
      <Strength {...props} />
      <h1 onClick={handleSidebar}>{showSidebar === true ? "x" :"="}</h1>
    </div>
  )
}

export default App;
