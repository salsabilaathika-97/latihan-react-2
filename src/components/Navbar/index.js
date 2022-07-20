import "./style.css"

const Navbar = (props) => {
    const {propNav, propImage} = props;
    return (
      <div className = "navbar-body">
      <div className = "navbar-row">
        <div>
          <h1>{propImage}</h1>
        </div>
        <div className = "nav-list">
            <p>{propNav[0]}</p>
            <p>{propNav[1]}</p>
            <p>{propNav[2]}</p>
            <p>{propNav[3]}</p>
        </div>
      </div>
      </div>
    )
  }
  
  export default Navbar;
  