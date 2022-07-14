import "./App.css";
import React from "react";
import { useState } from "react";
import "aos/dist/aos.css";
import JSONDATA_1 from "./MOCK_DATA_1.json";
import JSONDATA_2 from "./MOCK_DATA_2.json";
import JSONDATA_3 from "./MOCK_DATA_3.json";
import JSONDATA_4 from "./MOCK_DATA_4.json";
import JSONDATA_5 from "./MOCK_DATA_5.json";

function App() {
  const [searchItem, setSearchItem] = useState("");

  return (
    <div className="App">
      <div className="head">Engineering task</div>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchItem(event.target.value);
          }}
        />
      </div>
      {/* <div className="filters">
        <p>filter1</p>
        <p>filter2</p>
        <p>filter3</p>
        <p>filter4</p>
      </div> */}
      <h2>22/33/44 </h2>
      {JSONDATA_1.filter((wrd) => {
        if (searchItem === "") {
          return wrd;
        } else if (
          wrd.first_name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return wrd;
        } else if (
          wrd.last_name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return wrd;
        }
      }).map((deal, key) => {
        return (
          <div
            className="compo"
            key={key}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex-1">
              <div className="flex-2">
                <p className="iidd">{deal.id}</p>
                <div className="items">
                  <h4>DATA</h4>
                  <div>
                    <p className="names">
                      {deal.first_name},<b> {deal.last_name}</b>
                    </p>
                    <p>{deal.gender}</p>
                    <em>
                      <p>{deal.email}</p>
                    </em>
                    <p>{deal.ip_address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <h2>11/22/33 </h2>
      {JSONDATA_2.filter((wrd2) => {
        if (searchItem === "") {
          return wrd2;
        } else if (
          wrd2.first_name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return wrd2;
        } else if (
          wrd2.last_name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return wrd2;
        }
      }).map((deal2, key) => {
        return (
          <div
            className="compo"
            key={key}
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex-1">
              <div className="flex-2">
                <p className="iidd iidd2">{deal2.id}</p>
                <div className="items items2">
                  <h4>DATA</h4>
                  <div>
                    <p className="names">
                      {deal2.first_name},<b> {deal2.last_name}</b>
                    </p>
                    <p>{deal2.gender}</p>
                    <em>
                      <p>{deal2.email}</p>
                    </em>
                    <p>{deal2.ip_address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <h2>9/22/33 </h2>
      {JSONDATA_3.filter((wrd3) => {
        if (searchItem === "") {
          return wrd3;
        } else if (
          wrd3.first_name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return wrd3;
        } else if (
          wrd3.last_name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return wrd3;
        }
      }).map((deal3, key) => {
        return (
          <div
            className="compo"
            key={key}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex-1">
              <div className="flex-2">
                <p className="iidd ">{deal3.id}</p>
                <div className="items">
                  <h4>DATA</h4>
                  <div>
                    <p className="names">
                      {deal3.first_name},<b> {deal3.last_name}</b>
                    </p>
                    <p>{deal3.gender}</p>
                    <em>
                      <p>{deal3.email}</p>
                    </em>
                    <p>{deal3.ip_address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <h2>9/22/33 </h2>
      {JSONDATA_4.filter((wrd4) => {
        if (searchItem === "") {
          return wrd4;
        } else if (
          wrd4.first_name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return wrd4;
        } else if (
          wrd4.last_name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return wrd4;
        }
      }).map((deal4, key) => {
        return (
          <div
            className="compo"
            key={key}
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex-1">
              <div className="flex-2">
                <p className="iidd iidd2">{deal4.id}</p>
                <div className="items items2">
                  <h4>DATA</h4>
                  <div>
                    <p className="names">
                      {deal4.first_name},<b> {deal4.last_name}</b>
                    </p>
                    <p>{deal4.gender}</p>
                    <em>
                      <p>{deal4.email}</p>
                    </em>
                    <p>{deal4.ip_address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <h2>9/22/33 </h2>
      {JSONDATA_5.filter((wrd5) => {
        if (searchItem === "") {
          return wrd5;
        } else if (
          wrd5.first_name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return wrd5;
        } else if (
          wrd5.last_name.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return wrd5;
        }
      }).map((deal5, key) => {
        return (
          <div
            className="compo"
            key={key}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex-1">
              <div className="flex-2">
                <p className="iidd">{deal5.id}</p>
                <div className="items">
                  <h4>DATA</h4>
                  <div>
                    <p className="names">
                      {deal5.first_name},<b> {deal5.last_name}</b>
                    </p>
                    <p>{deal5.gender}</p>
                    <em>
                      <p>{deal5.email}</p>
                    </em>
                    <p>{deal5.ip_address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="head"></div>
    </div>
  );
}

export default App;
