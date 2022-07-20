import Navbar from "./components/Navbar";

const  navList = ['our service', 'why us', 'testimonial', 'faq']
const image = 'Logo';

const App = () => {
  return (
    <div>
      <Navbar propNav = {navList} propImage = {image} />
    </div>
  )
}

export default App;
