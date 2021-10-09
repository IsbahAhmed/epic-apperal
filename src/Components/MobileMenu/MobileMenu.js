
import { NavLink } from "react-router-dom";
import "./MobileMenu.css";

const MobileMenu = ({show = ""}) => {
    var subNavHandler = (e)=>{
        var classname = e.target.children[0].classList[1];
        if(classname === "fa-plus"){
            e.target.children[0].classList.remove("fa-plus")
            e.target.children[0].classList.add("fa-minus")
        }
        else{
            e.target.children[0].classList.remove("fa-minus")
            e.target.children[0].classList.add("fa-plus")
        }
        var parent = e.target.parentNode.parentNode;
        parent.classList.toggle("subnav-open")
    }
  return (
    <div className={`mobile-menu shadow ${show}`}>
      <div className="mobile-menu-link bx">
        <NavLink to="/" className="">
          <h4>HOME</h4>
        </NavLink>
      </div>
      <div className="mobile-menu-link bx">
        <div className="sub-nav ">
          <NavLink to="/shop">
            <h4>shop</h4>
          </NavLink>
          <div className="drp-ico" onClick={subNavHandler}>
            <i className="fas fa-plus"></i>
          </div>
        </div>
        <div className="subnav-menu">
                    <div className="subnav-menu-child">
                    <div className="sub-nav bx">
            <NavLink to="/">
              <h5>All Products</h5>
            </NavLink>
            <div className="drp-ico" onClick={subNavHandler}>
              <i className="fas fa-plus"></i>
            </div>
          </div>
          <div className="sub-nav-menu-2">
          <NavLink to="/">
              <h5>Men Wear</h5>
            </NavLink>
            <NavLink to="/">
              <h5>Men Wear</h5>
            </NavLink>
            <NavLink to="/">
              <h5>Men Wear</h5>
            </NavLink>
          </div>
                    </div>
                    <div className="subnav-menu-child">
                    <div className="sub-nav bx">
            <NavLink to="/">
              <h5>New Products</h5>
            </NavLink>
            <div className="drp-ico" onClick={subNavHandler}>
              <i className="fas fa-plus"></i>
            </div>
          </div>
          <div className="sub-nav-menu-2">
          <NavLink to="/">
              <h5>Men Wear</h5>
            </NavLink>
            <NavLink to="/">
              <h5>Men Wear</h5>
            </NavLink>
            <NavLink to="/">
              <h5>Men Wear</h5>
            </NavLink>
          </div>
                    </div>
        </div>
      </div>
      {/* <div className="mobile-menu-link bx">
        <NavLink to="/auth" className="">
          <h4>My Account</h4>
        </NavLink>
      </div> */}
      <div className="mobile-menu-link bx">
        <NavLink to="/wishlist" className="">
          <h4>My Wishlist</h4>
        </NavLink>
      </div>
      <div className="mobile-menu-link bx">
        <NavLink to="/about" className="">
          <h4>about</h4>
        </NavLink>
      </div>
      <div className="mobile-menu-link">
        <NavLink to="/contact" className="">
          <h4>contact</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
