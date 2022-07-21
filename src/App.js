import Navbar from "./components/Navbar";
import Strength from "./components/Strength";
import Calculator from "./components/Calculator";
import { navList, image, strengthList } from "./const/staticData";
import {useState} from "react";

const App = () => {
  const [showSidebar, setshowSidebar] = useState(false);
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);
  
  const handleSidebar = () => {
    setshowSidebar(!showSidebar);
  }

  const handleShowName = (param) => {
    setName(param)
  }

  const handleNumber = (number) => {
    setResult(number)
  }

  const props = {
    navList,
    image,
    strengthList,
    handleSidebar,
    showSidebar,
    handleShowName,
    name,
    handleNumber,
  }

  return (
    <div>
      {/* <Strength {...props} /> */}
      {/* <h1 onClick={handleSidebar}>{showSidebar === true ? "x" :"="}</h1> */}
      <Calculator {...props}/>
      <div style={{ border: '1px solid black'}}>{result}</div>
    </div>
  )
}

export default App;
