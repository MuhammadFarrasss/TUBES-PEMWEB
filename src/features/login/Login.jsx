import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout.jsx";

export default function Login() {
  const navigate = useNavigate();

  return (
    <PageLayout page="login">
      <article>
        <h2>Login Driver</h2>
        <div className="info-box">
          <p>Silakan masukkan akun untuk mengakses sistem.</p>
        </div>
        <form onSubmit={(event) => { event.preventDefault(); navigate("/"); }}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Login</button>
        </form>
      </article>
    </PageLayout>
  );
}
