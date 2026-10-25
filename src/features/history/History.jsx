import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout.jsx";

export default function History() {
  return (
    <PageLayout page="history">
      <article>
        <h2>Riwayat Pemeriksaan Kendaraan</h2>
        <p>Informasi riwayat pemeriksaan kondisi kendaraan.</p>
        <div className="info-box">
          <p><strong>Total Pemeriksaan:</strong> 3 kali</p>
          <p><strong>Kendaraan:</strong> Toyota Avanza</p>
          <p><strong>Nomor Kendaraan:</strong> D 1234 ABC</p>
        </div>
      </article>
      <article>
        <h2>Daftar Riwayat Pemeriksaan</h2>
        <table>
          <thead><tr><th>No</th><th>Tanggal</th><th>Kendaraan</th><th>Hasil Pemeriksaan</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>01 Oktober 2026</td><td>Toyota Avanza</td><td>Ban bocor</td><td>Perlu perbaikan</td></tr>
            <tr><td>2</td><td>28 September 2026</td><td>Toyota Avanza</td><td>Rem berbunyi</td><td>Dalam pemeriksaan</td></tr>
            <tr><td>3</td><td>20 September 2026</td><td>Mitsubishi L300</td><td>Kondisi kendaraan normal</td><td>Selesai</td></tr>
          </tbody>
        </table>
      </article>
      <article>
        <h2>Catatan Pemeriksaan</h2>
        <p>Pemeriksaan kendaraan dilakukan untuk memastikan kendaraan dalam kondisi aman sebelum digunakan. Kerusakan yang ditemukan perlu segera dilaporkan agar dapat ditindaklanjuti.</p>
        <Link to="/report">Buat Laporan Kerusakan</Link>
      </article>
    </PageLayout>
  );
}
