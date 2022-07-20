import "./style.css"

const Navbar = (props) => {
    const {navList, image} = props;
    return (
      <div className = "navbar-body">
      <div className = "navbar-row">
        <div>
          <h1>{image}</h1>
        </div>
        <div className = "nav-list">
            {
              navList.map((item) => (
                <p>{item}</p>
              ))
            }
        </div>
      </div>
      </div>
    )
  }
  
  export default Navbar;
  