import React, { Component } from "react";
import Siswa from './Components/Home/Siswa';
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
        <Siswa nama={"khafidh"} nisn="7463247236" jurusan={"RPL"} />
        <Siswa nama={"khafidh"} nisn="7463247236" jurusan={"RPL"} />
        <Siswa nama={"khafidh"} nisn="7463247236" jurusan={"RPL"} />
        </div>
  )
}
}

export default Home;
