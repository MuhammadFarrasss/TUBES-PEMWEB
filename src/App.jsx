import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard.jsx";
import Report from "./features/report/Report.jsx";
import Login from "./features/login/Login.jsx";
import Vehicles from "./features/vehicles/Vehicles.jsx";
import Detail from "./features/reports/Detail.jsx";
import History from "./features/history/History.jsx";
import ServiceSchedule from "./features/service/ServiceSchedule.jsx";
import MaintenanceSchedule from "./features/maintenance/MaintenanceSchedule.jsx";
import NotFound from "./features/not-found/NotFound.jsx";

const pageTitles = {
  "/": "Dashboard",
  "/report": "Buat Laporan",
  "/login": "Login",
  "/vehicles": "Data Kendaraan",
  "/detail": "Detail Laporan",
  "/history": "Riwayat Pemeriksaan",
  "/service": "Jadwal Servis",
  "/maintenance": "Jadwal Perawatan",
};

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `${pageTitles[pathname] ?? "Halaman tidak ditemukan"} - Sagara Daily Checkup`;
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/report" element={<Report />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/history" element={<History />} />
      <Route path="/service" element={<ServiceSchedule />} />
      <Route path="/maintenance" element={<MaintenanceSchedule />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
