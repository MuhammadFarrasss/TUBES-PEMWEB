import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout.jsx";

export default function NotFound() {
  return (
    <PageLayout page="dashboard">
      <article>
        <h2>Halaman tidak ditemukan</h2>
        <p><Link to="/">Kembali ke Dashboard</Link></p>
      </article>
    </PageLayout>
  );
}
