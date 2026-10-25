import React from "react";
import { Link } from "react-router-dom";

const navigation = {
  dashboard: [
    ["Dashboard", "/"],
    ["Buat Laporan", "/report"],
    ["Data Kendaraan", "/vehicles"],
    ["Riwayat Pemeriksaan", "/history"],
    ["Jadwal Servis", "/service"],
    ["Logout", "/login"],
  ],
  report: [
    ["Dashboard", "/"],
    ["Buat Laporan", "/report"],
    ["Logout", "/login"],
  ],
  login: [
    ["Dashboard", "/"],
    ["Buat Laporan", "/report"],
    ["Login", "/login"],
  ],
  vehicles: [
    ["Dashboard", "/"],
    ["Data Kendaraan", "/vehicles"],
    ["Buat Laporan", "/report"],
    ["Logout", "/login"],
  ],
  detail: [
    ["Dashboard", "/"],
    ["Buat Laporan", "/report"],
    ["Logout", "/login"],
  ],
  history: [
    ["Data Kendaraan", "/vehicles"],
    ["Buat Laporan", "/report"],
    ["Detail Laporan", "/detail"],
    ["Riwayat Pemeriksaan", "/history"],
    ["Jadwal Servis", "/service"],
  ],
  service: [
    ["Data Kendaraan", "/vehicles"],
    ["Buat Laporan", "/report"],
    ["Detail Laporan", "/detail"],
    ["Riwayat Pemeriksaan", "/history"],
    ["Jadwal Servis", "/service"],
  ],
  maintenance: [
    ["Data Kendaraan", "/vehicles"],
    ["Buat Laporan", "/report"],
    ["Detail Laporan", "/detail"],
    ["Riwayat Pemeriksaan", "/history"],
    ["Jadwal Servis", "/service"],
    ["Jadwal Perawatan", "/maintenance"],
  ],
};

function Header({ links }) {
  return (
    <header>
      <h1>Sagara Daily Checkup</h1>
      <nav>
        <ul>
          {links.map(([label, to]) => (
            <li key={to}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>Sagara Daily Checkup &copy; 2026</p>
    </footer>
  );
}

export default function PageLayout({ page, children }) {
  return (
    <>
      <Header links={navigation[page]} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
