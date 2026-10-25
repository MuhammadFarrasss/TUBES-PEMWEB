import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout.jsx";

export default function Vehicles() {
  return (
    <PageLayout page="vehicles">
      <article>
        <h2>Data Kendaraan</h2>
        <p>Halaman ini menampilkan informasi kendaraan yang terdaftar pada sistem Sagara Daily Checkup.</p>
        <div className="info-box">
          <p><span>Total Kendaraan:</span> 3 unit</p>
          <p><span>Kendaraan Aktif:</span> 2 unit</p>
          <p><span>Dalam Pemeriksaan:</span> 1 unit</p>
        </div>
      </article>
      <article>
        <h2>Daftar Kendaraan Terdaftar</h2>
        <table>
          <thead><tr><th>No</th><th>Nama Kendaraan</th><th>Nomor Kendaraan</th><th>Driver</th><th>Status</th><th>Detail</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Toyota Avanza</td><td>D 1234 ABC</td><td>Ahmad</td><td><span className="status">Aktif</span></td><td><Link to="/detail">Lihat laporan</Link></td></tr>
            <tr><td>2</td><td>Mitsubishi L300</td><td>D 5678 DEF</td><td>Budi</td><td>Aktif</td><td><Link to="/report">Buat laporan</Link></td></tr>
            <tr><td>3</td><td>Daihatsu Gran Max</td><td>D 9012 GHI</td><td>Rizky</td><td>Dalam pemeriksaan</td><td><Link to="/detail">Lihat laporan</Link></td></tr>
          </tbody>
        </table>
      </article>
      <article>
        <h2>Informasi Pemeriksaan</h2>
        <p>Pastikan data kendaraan dan kondisi kendaraan diperiksa secara berkala. Jika ditemukan kerusakan, driver dapat mengirimkan laporan melalui halaman Buat Laporan.</p>
        <p><Link to="/report">Buka halaman Buat Laporan</Link></p>
      </article>
    </PageLayout>
  );
}
