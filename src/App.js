import Navbar from "./components/Navbar";
import Strength from "./components/Strength";
import Calculator from "./components/Calculator";
import { navList, image, strengthList } from "./const/staticData";
import {useState} from "react";

const App = () => {
  const [showSidebar, setshowSidebar] = useState(false);
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);
  const [arit, setArit] = useState("");
  const [numberOne, setNumberOne] = useState(null);
  const [numberTwo, setNumberTwo] = useState(null);
  
  const handleSidebar = () => {
    setshowSidebar(!showSidebar);
  }

  const handleShowName = (param) => {
    setName(param)
  }

  const handleNumber = (number) => {
    setResult(number)
    if (numberOne == null){
      setNumberOne(number)
    } else {
      setNumberTwo(number)
    }
  }

  const handleAdding = (number) => {
    setArit("+")
  }

  const handleSubstract = (number) =>
  {
    setArit("-")
  }

  const handleEqual = (number) => {
    let equal;
    if (arit === "+"){
      equal = numberOne + numberTwo;
    } else {
      equal = numberOne - numberTwo;
    }

    setResult(equal);
    setNumberOne(null);
    setNumberTwo(null);
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
    handleAdding,
    handleSubstract,
    handleEqual,
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
