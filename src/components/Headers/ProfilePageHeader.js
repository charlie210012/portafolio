import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import bg5 from "assets/img/bg5.jpg";
import ryan from "assets/img/ryan.jpg";

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + bg5 + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={ryan}></img>
          </div>
          <h3 className="title">Carlos Andres Arevalo Cortes</h3>
          <p className="category">Desarrollador web full stack</p>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
