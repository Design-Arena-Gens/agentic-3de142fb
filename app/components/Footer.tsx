export default function Footer() {
  return (
    <footer className="mt-20 border-t border-softGray/60 bg-white/60">
      <div className="container-section py-10 grid md:grid-cols-2 gap-6 items-center">
        <p className="p">© {new Date().getFullYear()} Aurora Salon. All rights reserved.</p>
        <nav aria-label="Social media" className="flex md:justify-end gap-4">
          <a className="nav-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
          <a className="nav-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
          <a className="nav-link" href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">Pinterest</a>
        </nav>
      </div>
    </footer>
  );
}
