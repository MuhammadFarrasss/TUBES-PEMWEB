import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout.jsx";

export default function MaintenanceSchedule() {
  return (
    <PageLayout page="maintenance">
      <article>
        <h2>Jadwal Perawatan Kendaraan</h2>
        <p>Halaman ini digunakan untuk melihat jadwal perawatan rutin kendaraan agar tetap aman dan layak digunakan.</p>
      </article>
      <article>
        <h2>Checklist Perawatan</h2>
        <table>
          <thead><tr><th>No</th><th>Komponen</th><th>Kendaraan</th><th>Jadwal Perawatan</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Oli Mesin</td><td>Toyota Avanza</td><td>30 Oktober 2026</td><td>Belum dilakukan</td></tr>
            <tr><td>2</td><td>Rem</td><td>Mitsubishi L300</td><td>5 November 2026</td><td>Terjadwal</td></tr>
            <tr><td>3</td><td>Ban</td><td>Daihatsu Gran Max</td><td>10 November 2026</td><td>Terjadwal</td></tr>
            <tr><td>4</td><td>Aki</td><td>Toyota Avanza</td><td>15 November 2026</td><td>Terjadwal</td></tr>
          </tbody>
        </table>
      </article>
      <article>
        <h2>Tips Perawatan Kendaraan</h2>
        <ul>
          <li>Periksa oli mesin secara berkala.</li>
          <li>Pastikan tekanan ban sesuai standar.</li>
          <li>Periksa fungsi rem sebelum kendaraan digunakan.</li>
          <li>Periksa kondisi aki dan lampu kendaraan.</li>
        </ul>
        <p>Jika ditemukan kerusakan, segera <Link to="/report">buat laporan kerusakan</Link>.</p>
      </article>
    </PageLayout>
  );
}
