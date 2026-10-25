import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout.jsx";

export default function Dashboard() {
  return (
    <PageLayout page="dashboard">
      <article>
        <h2>Dashboard Driver</h2>
        <div className="info-box">
          <p><span>Nama Driver:</span> Ahmad</p>
          <p><span>Kendaraan:</span> Toyota Avanza</p>
          <p><span>Nomor Kendaraan:</span> D 1234 ABC</p>
        </div>
      </article>
      <article>
        <h2>Daftar Laporan Kerusakan</h2>
        <table>
          <thead>
            <tr>
              <th>No</th><th>Tanggal</th><th>Kendaraan</th><th>Kerusakan</th><th>Status</th><th>Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td><td>01 Oktober 2026</td><td>Toyota Avanza</td><td>Ban bocor</td>
              <td><span className="status">Menunggu</span></td><td><Link to="/detail">Lihat</Link></td>
            </tr>
            <tr>
              <td>2</td><td>28 September 2026</td><td>Toyota Avanza</td><td>Rem berbunyi</td>
              <td><span className="status">Diproses</span></td><td><Link to="/detail">Lihat</Link></td>
            </tr>
          </tbody>
        </table>
      </article>
    </PageLayout>
  );
}
