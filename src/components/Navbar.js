const Navbar = () => {
    return (
      <div style = {{ 
        display: "flex",
        justifyContent: "space-around"
        }}>
        <div>
            <h1>Logo</h1>
        </div>
        <div style = {{ 
            display: "flex"
         }}>
            <p>Our Services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
        </div>
      </div>
    )
  }
  
  export default Navbar;
  