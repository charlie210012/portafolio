/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Carlos Andres Arevalo Cortes
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Desarrollador por{" "}
            <a
              href=""
              target="_blank"
            >
              CA<sup>2</sup>C
            </a>
            . GITHUB{" "}
            <a
              href=""
              target="_blank"
            >
              Charlie210012
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
