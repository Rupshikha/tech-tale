import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PanToolIcon from "@mui/icons-material/PanTool";

export default function IntroPage() {
  return (
    <Fragment>
      <Container
        className=" d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="ipContainer">
          <div className="wlContainer">
            <h1>
                 <PanToolIcon fontSize="large" /> Welcome to TechTale
            </h1>
            <h4>Where You can share Tech Blogs!</h4>
         </div> 

          <div>
             <Link to="signup">
              <Button className="button"> Get Started </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}
