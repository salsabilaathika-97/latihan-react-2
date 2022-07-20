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
            <p>{navList[0]}</p>
            <p>{navList[1]}</p>
            <p>{navList[2]}</p>
            <p>{navList[3]}</p>
        </div>
      </div>
      </div>
    )
  }
  
  export default Navbar;
  