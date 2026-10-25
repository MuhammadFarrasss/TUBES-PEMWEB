import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout.jsx";

export default function Detail() {
  return (
    <PageLayout page="detail">
      <article>
        <h2>Detail Laporan Kerusakan</h2>
        <div className="info-box">
          <p><span>Tanggal:</span> 01 Oktober 2026</p>
          <p><span>Kendaraan:</span> Toyota Avanza</p>
          <p><span>Nomor Kendaraan:</span> D 1234 ABC</p>
          <p><span>Jenis Kerusakan:</span> Ban bocor</p>
          <p><span>Status:</span> <span className="status">Menunggu</span></p>
        </div>
        <h3>Deskripsi Kerusakan</h3>
        <p>Ban kendaraan mengalami kebocoran saat digunakan. Kendaraan perlu dilakukan pemeriksaan oleh teknisi.</p>
        <h3>Riwayat Laporan</h3>
        <table>
          <thead><tr><th>Tanggal</th><th>Status</th><th>Keterangan</th></tr></thead>
          <tbody>
            <tr><td>01 Oktober 2026</td><td>Menunggu</td><td>Laporan dibuat oleh driver</td></tr>
            <tr><td>02 Oktober 2026</td><td>Diproses</td><td>Menunggu pemeriksaan teknisi</td></tr>
          </tbody>
        </table>
        <p><Link to="/">Kembali ke Dashboard</Link></p>
      </article>
    </PageLayout>
  );
}
