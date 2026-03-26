export default function Navbar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a href="/" className="brand">
          <span className="brand-mark" />
          <span>Cyzora</span>
        </a>

        <nav className="nav-links">
          <a href="/ovwi">OVWI</a>
          <a href="/clinicflowac">ClinicFlowAC</a>
        </nav>

        <div className="nav-actions">
          <a href="/ovwi" className="btn btn-secondary">OVWI</a>
        </div>
      </div>
    </header>
  );
}
