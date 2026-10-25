import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout.jsx";

export default function ServiceSchedule() {
  return (
    <PageLayout page="service">
      <article>
        <h2>Jadwal Servis Kendaraan</h2>
        <p>Halaman ini menampilkan jadwal perawatan dan servis kendaraan untuk menjaga kondisi kendaraan tetap optimal.</p>
        <div className="info-box">
          <p><strong>Total Jadwal:</strong> 3 jadwal</p>
          <p><strong>Jadwal Mendatang:</strong> 2 jadwal</p>
          <p><strong>Servis Selesai:</strong> 1 jadwal</p>
        </div>
      </article>
      <article>
        <h2>Daftar Jadwal Servis</h2>
        <table>
          <thead><tr><th>No</th><th>Tanggal Servis</th><th>Kendaraan</th><th>Jenis Servis</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>30 Oktober 2026</td><td>Toyota Avanza</td><td>Pemeriksaan rem</td><td>Terjadwal</td></tr>
            <tr><td>2</td><td>05 November 2026</td><td>Mitsubishi L300</td><td>Ganti oli mesin</td><td>Terjadwal</td></tr>
            <tr><td>3</td><td>15 Oktober 2026</td><td>Daihatsu Gran Max</td><td>Pemeriksaan rutin</td><td>Selesai</td></tr>
          </tbody>
        </table>
      </article>
      <article>
        <h2>Informasi Perawatan</h2>
        <p>Lakukan servis kendaraan sesuai jadwal yang ditentukan. Jika ditemukan kerusakan sebelum jadwal servis, segera buat laporan agar dapat ditangani.</p>
        <Link to="/report">Buat Laporan Kerusakan</Link>
      </article>
    </PageLayout>
  );
}
