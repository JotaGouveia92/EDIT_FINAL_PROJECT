export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="row">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="row">
          © {new Date().getFullYear()} João Gouveia. All rights reserved
        </div>
      </footer>
    </div>
  );
}
