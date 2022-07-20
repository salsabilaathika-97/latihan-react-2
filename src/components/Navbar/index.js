import "./style.css"

const Navbar = (prop) => {
  console.log(prop.propNav);
    return (
      <div className = "navbar-body">
      <div className = "navbar-row">
        <div>
        </div>
        <div className = "nav-list">
            <p>{prop.propNav[0]}</p>
            <p>{prop.propNav[1]}</p>
            <p>{prop.propNav[2]}</p>
            <p>{prop.propNav[3]}</p>
        </div>
      </div>
      </div>
    )
  }
  
  export default Navbar;
  