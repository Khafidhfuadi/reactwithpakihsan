import React, { Component } from "react";
// import ariqimage from '../img/ariqkage.jpg'; //! file-file yg diambil oleh component class harus berada di folder 'src'

class SiswaRPL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namaDaftar: "Daftar Siswa RPL",
      dataSiswa: [
        { nama: "Ariq", nisn: "12345678", jurusan: "Rekayasa Perangkat Lunak" },
        { nama: "Ariq", nisn: "12345678", jurusan: "Rekayasa Perangkat Lunak" }
      ]
    };
  }

  onHandler = () => {
    //? event
    console.log("ok tombol");
    this.setState({
      namaDaftar: "Daftar Siswa TKJ",
      dataSiswa: [
        {
          nama: "Jusuf",
          nisn: "12345678",
          jurusan: "Teknik Komputer Jaringan"
        },
        { nama: "Jusuf", nisn: "12345678", jurusan: "Teknik Komputer Jaringan" }
      ]
    });
  };
  render() {
    return (
      <div className="Container">
        <button className="form-control btn-success" onClick={this.onHandler}>
          Ganti Daftar
        </button>
        <h4 className="text-center mt-3">{this.state.namaDaftar}</h4>
        {this.state.dataSiswa.map((
          siswa,
          index //! index diambil dari index array
        ) => (
          <div className="card" key={index}>
            {/* <img height="100" width="100" src={ariqimage} alt="logo"/> */}
            <h5 className="card-title">{siswa.nama}</h5>
            <p className="card-text">{siswa.nisn}</p>
            <p className="card-text">{siswa.jurusan}</p>
            <p>siswa ke {index + 1}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default SiswaRPL;
