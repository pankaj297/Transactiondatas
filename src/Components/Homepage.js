import React, {useState} from "react";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import menu from "./Menu";
import Tran from "./Tran";
import Footer from "./footer";
import styled from "@emotion/styled";




const uniqueList = [
  ...new Set(menu.map((curElem) => {
    return curElem.number;
  }))
];

console.log(uniqueList);


const Homepage = () => {

const [currentPage, setCurrentPage] = useState(1);
  const [menuitem, setMenuitem] = useState(menu);
  // const [numlist, setNumList] = useState(uniqueList);
const [numlist, setNumList] = useState([
  ...new Set(menu.map((curElem) => curElem.number)),
]);


  const filterItems = (cate) => {
    
    const updatedList = menu.filter((CElement) => {
      return CElement.number === cate;
    });

    setMenuitem(updatedList);
  };

  

      

  return (
    <>
      <div className="navcard">
        <div className="nav">
          <nav className="navbar bg-body-tertiary ">
            <div className="container-fluid">
              <a className="navbar-brand text-dark">Payments</a>
              <p className="how">
                <HelpOutlineOutlinedIcon />
              </p>
              <p className="how1">How it works</p>
              <form className="d-flex search" role="search">
                <input
                  type="search"
                  placeholder="Search features, tutorials, etc."
                  aria-label="Search"
                />
              </form>
              <div className="sideLogo">
                <button className="sideLogo1">
                  <GppGoodOutlinedIcon />
                </button>
                <button className="sideLogo2">
                  <ArrowDropDownOutlinedIcon />
                </button>
              </div>
            </div>
          </nav>
        </div>
        <hr className="hr" />
      </div>
      {/* -----gachap bet-- */}
      {/* navbar-dark bg-dark */}
      <section className="scrol">
        <div className="snav">
          <nav className="navbar ">
            <div className="container-fluid">
              <a className="Over navbar-brand" href="#">
                Overview
              </a>
              <div className="">
                <button
                  className="btn  navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDarkDropdown"
                  aria-controls="navbarNavDarkDropdown"
                  aria-expanded="false"
                  aria-label="Toggle  navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="" id="navbarNavDarkDropdown">
                  <ul className="ul navbar-nav">
                    <li className="nav-item dropdown">
                      <button
                        className="btn btnshort dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Last Month
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            My Account
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a className="dropdown-item" href="#">
                            Profile
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Billing
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Team
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Subscription
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Online orders</h5>
                <p className="card-text text-dark">231</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Amount received</h5>
                <p className="card-text text-dark">₹23,92,312.19</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="thismonth">Tarnsactions | This Month</h3>
        <div className="Tran">
          <div className="TranNav">
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <form className="d-flex transearch" role="search">
                  <input
                    className="form-control me-2 fw-bold"
                    type="search"
                    placeholder="Search by order ID..."
                    aria-label="Search"
                  />

                  <div className="dropdown drop0">
                    <a
                      className="btn btnshort rounded flex-column  dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Short
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                    <button className="downloadbtn">
                      <FileDownloadOutlinedIcon />
                    </button>
                  </div>
                </form>
              </div>
            </nav>
          </div>
          <div className="hhh  hstack">
            <div className="id1 p-2">Order ID</div>
            <div className="id2 p-1">Order date</div>
            <div className="id3 p-1">Order amount</div>
            <div className="id4 p-1">Transaction fees</div>
          </div>

          <Tran menudata={menuitem} />
          <Footer
            filterItems={filterItems}
            numlist={numlist}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </>
  );

  // <div>
  //   {/* <p className='pp'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorem quis officiis. Laudantium quod quam minima commodi consectetur incidunt ipsam molestiae nesciunt fugiat, repellat atque nulla dolorum dolorem quos cupiditate.</p> */}

  // </div>
};

export default Homepage;
