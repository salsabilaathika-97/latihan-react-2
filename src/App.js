import Navbar from "./components/Navbar";
import Strength from "./components/Strength";

const  navList = ['our service', 'why us', 'testimonial', 'faq']
const image = 'Logo';
const strengthList = ["Sewa Mobil Dengan Supir di Bali 12 Jam", "Sewa Mobil Lepas Kunci di Bali 24 Jam", "Sewa Mobil Jangka Panjang Bulanan", "Gratis Antar - Jemput Mobil di Bandara", "Layanan Airport Transfer / Drop In Out"]

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
