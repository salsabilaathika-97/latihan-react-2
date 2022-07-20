import Navbar from "./components/Navbar";

const  navList = ['our service', 'why us', 'testimonial', 'faq']
const image = 'Logo';

const props = {
  navList,
  image,
}

const App = () => {
  return (
    <div>
      <Navbar {...props} />
    </div>
  )
}

export default App;
