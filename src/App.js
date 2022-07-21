import Navbar from "./components/Navbar";
import Strength from "./components/Strength";
import { navList, image, strengthList } from "./const/staticData";
import {useState} from "react";

const App = () => {
  const [showSidebar, setshowSidebar] = useState(false);
  
  const handleSidebar = () => {
    setshowSidebar(!showSidebar);
  }

  const props = {
    navList,
    image,
    strengthList,
    handleSidebar,
    showSidebar,
  }

  return (
    <div>
      <Navbar {...props} />
      {/* <Strength {...props} /> */}
      {/* <h1 onClick={handleSidebar}>{showSidebar === true ? "x" :"="}</h1> */}
    </div>
  )
}

export default App;
