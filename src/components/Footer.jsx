import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p> Córdoba, Argentina</p>
          <p> gisesavy90@gmail.com</p>
          <p> +54 3467 418018</p>
        </div>

        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://wa.me/543467418018" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} | Gisela Soledad Savy</p>
      </div>
    </footer>
  );
}

export default Footer;