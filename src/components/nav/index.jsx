import "./style.scss";
import navLogo from "../../assets/nav-logo.png";
import mobileIcon from '../../assets/mobile.svg'
import webIcon from '../../assets/web.svg'
import userIcon from '../../assets/userIcon.png'
import registration from '../../assets/registration.png'
const Nav = () => {
  return (
    <nav>
      <div className="navLogo">
        <img src={navLogo} alt="" />
        <select>
          <option value="AZ">AZ</option>
          <option value="ENG">ENG</option>
          <option value="RU">RU</option>
        </select>
      </div>

      <div className="navScreenModes">
        <div className="screenModeWrapper">
          <img src={mobileIcon} alt="" />
        </div>

        <span></span>

        <div className="screenModeWrapper">
          <img src={webIcon} alt="" />
        </div>
      </div>

      <div className="navButtons">
        <button> <img src={userIcon} alt="" />Giriş</button>
        <button> <img src={registration} alt="" />Qeydiyyat</button>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
