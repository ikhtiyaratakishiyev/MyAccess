import "./style.scss";
import navLogo from "../../assets/nav-logo.png";
import mobileIcon from '../../assets/mobile.svg'
import webIcon from '../../assets/web.svg'
import { CiUser } from "react-icons/ci"; 
import { MdAppRegistration } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
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
        <button className="button" ><CiUser />  Giriş</button>
        <button className="button"> <MdAppRegistration />Qeydiyyat</button>
        <div className="icon"><GiHamburgerMenu /></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
