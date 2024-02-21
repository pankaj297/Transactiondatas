import React from 'react';
import "../App.css";
import { SidebarData } from './SidebarData';


// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';




const Sidebar = () => {
  return (
    <>
      <div className="Sidebar">
        <div className="profile">
          <img src="img/logo.jpeg" alt="img" />
          <h3 className="Ptitle">Nishyan</h3>

          {/* <label for="course"></label> */}
          <select name="course" id="course">
            <option className="H" value=" MyAccount">
              MyAccount
            </option>
            <hr />
            <option className="H" value="Profile">
              Profile
            </option>
            <option className="H" value="Billing">
              Billing
            </option>
            <option className="H" value="Team">
              Team
            </option>
            <option className="H" value="Subscription">
              Subscription
            </option>
          </select>

          <a href="#">Visit Store</a>
        </div>

        <ul className="SidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="roww"
                id={window.location.pathname == val.link ? "active" : ""}
                onClick={() => {
                  window.location = val.link;
                }}
              >
                {/* {" "} */}
                {/* <div id="icon">{val.}</div> <div id="title">{val.}</div> */}
                <div id="icon">{val.icon}</div>{" "}
                <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>

        <div className="wallet">
          <AccountBalanceWalletOutlinedIcon className="walletIcon" />
          <h4>Available credits</h4>
          <p>222.10</p>
        </div>
      </div>
    </>
  );
  
}

export default Sidebar;
