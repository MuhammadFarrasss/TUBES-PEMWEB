import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout.jsx";

export default function Report() {
  const navigate = useNavigate();

  return (
    <PageLayout page="report">
      <article>
        <h2>Buat Laporan Kerusakan</h2>
        <div className="info-box">
          <p>Isi data kendaraan dan kerusakan yang ditemukan.</p>
        </div>
        <form onSubmit={(event) => { event.preventDefault(); navigate("/"); }}>
          <label htmlFor="vehicle">Merek Kendaraan</label>
          <input type="text" id="vehicle" name="vehicle" />
          <label htmlFor="plate">Nomor Kendaraan</label>
          <input type="text" id="plate" name="plate" />
          <label htmlFor="issue">Jenis Kerusakan</label>
          <select id="issue" name="issue">
            <option value="">-- Pilih Kerusakan --</option>
            <option value="ban">Ban</option>
            <option value="rem">Rem</option>
            <option value="mesin">Mesin</option>
            <option value="lampu">Lampu</option>
            <option value="lainnya">Lainnya</option>
          </select>
          <label htmlFor="description">Deskripsi Kerusakan</label>
          <textarea id="description" name="description" rows="5" />
          <label htmlFor="photo">Foto Kerusakan</label>
          <input type="file" id="photo" name="photo" />
          <button type="submit">Kirim Laporan</button>
        </form>
      </article>
    </PageLayout>
  );
}
