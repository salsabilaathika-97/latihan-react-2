import "./style.css"

const Navbar = (props) => {
    const {navList, image, handleSidebar, showSidebar} = props;
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
            <h1 onClick={handleSidebar}>{showSidebar === true ? "x" : "="}</h1>
        </div>
        
      </div>
      </div>
    )
  }
  
  export default Navbar;
  