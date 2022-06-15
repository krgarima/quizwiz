import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="siteInfo">
        <p>Copyright © 2022 Quizzy</p>
        <p className="footer--icons">
          <span>
            <a href="https://github.com/krgarima">
              <i className="fab fa-2x fa-github"></i>
            </a>
          </span>
          <span>
            <a href="https://twitter.com/GarimaK29063577">
              <i className="fab fa-2x fa-twitter"></i>
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/garima-469878175">
              <i className="fab fa-2x fa-linkedin"></i>
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
}
