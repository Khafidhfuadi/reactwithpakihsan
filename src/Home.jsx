import React, { Component } from "react";
// import Hello from "/hello";
// import LogoImage from "./img/logo.png";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h4 className="text-center">
          Daftar Siswa <br /> SMK MADINATUL QURAN
        </h4>
        {/* <img className="d-block mx-auto" src="{LogoImage}" alt="logo.jpg" /> */}
        <table>
          <thead>
            <h5>SISWA KELAS XII</h5>
            <tr>
              <th>Nama</th>
              <td>:</td>
              <td>Khafidh</td>
            </tr>
            <tr>
              <th>NISN</th>
              <td>:</td>
              <td>32236327</td>
            </tr>
            <tr>
              <th>Jurusan</th>
              <td>:</td>
              <td>RPL</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Home;
