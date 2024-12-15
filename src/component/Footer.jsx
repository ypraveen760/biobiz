import React from "react";

const Footer = () => {
  return (
    <footer className="footer  bg-green-100 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Quick Links</h6>
        <a className="link link-hover">BioBiz Consulting</a>
        <a className="link link-hover">India Updates</a>
        <a className="link link-hover">Opportunity</a>
        <a className="link link-hover">Bring</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Innovation Insights</a>
        <a className="link link-hover">Insights</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>

          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M22.5 2L1.5 12l4.5 1.5L9 20.5 12 17.5l5.5 2 5-17.5zm-10.6 12.9l-2.2 2.1-1-3.7 9.6-5.4-6.4 7z"></path>
            </svg>
          </a>

          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.05.498 4.012 1.464 5.8L0 24l6.336-1.427A12.012 12.012 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.293 17.293c-.26.26-.549.491-.866.69a7.018 7.018 0 0 1-3.293.962h-.002a7.18 7.18 0 0 1-6.09-3.403 6.98 6.98 0 0 1-1.32-4.293c0-.351.043-.699.122-1.041l.003-.001a7.035 7.035 0 0 1 6.55-5.614h.002c1.798.001 3.505.7 4.838 2.033 1.334 1.333 2.032 3.04 2.033 4.838v.003c-.002 1.526-.613 2.938-1.707 4.033z"></path>
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M4.98 3.5c0-1.38 1.11-2.5 2.49-2.5s2.49 1.12 2.49 2.5c0 1.38-1.11 2.5-2.49 2.5S4.98 4.88 4.98 3.5zM3 7h6v14H3V7zm7 0h5.25v2.1h.1c.73-1.38 2.52-2.1 4.16-2.1 4.43 0 5.48 2.92 5.48 6.73V21H18v-6.68c0-2.56-.05-5.85-3.56-5.85-3.56 0-4.1 2.78-4.1 5.64V21H10V7z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
