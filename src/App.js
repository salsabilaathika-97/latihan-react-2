import Navbar from "./components/Navbar";

const  navList = ['our service', 'why us', 'testimonial', 'faq']

const App = () => {
  return (
    <div>
      <Navbar propNav = {navList} />
    </div>
  )
}

export default App;
