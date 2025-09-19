export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="row">
          <a href="https://www.facebook.com/joao.queiros.1048">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/jwowwg_?igsh=YXUzcTh2b3NkZnFs&utm_source=qr">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://x.com/JotaWork">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-queiros/">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        <div className="row">
          © {new Date().getFullYear()} João Gouveia. All rights reserved
        </div>
      </footer>
    </div>
  );
}
