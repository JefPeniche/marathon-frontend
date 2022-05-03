import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

class Home extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <main ref="main">
          <img
            className="position-absolute col-4"
            alt="..."
            src={require("assets/img/svg/undraw_finish_line_katerina_limpitsouni_xy20.svg")}
          />
          <img
            className="position-absolute col-3 bottom-0 right-0"
            alt="..."
            src={require("assets/img/svg/undraw_runner_start_x-0-uu.svg")}
          />
          <section className="section section-shaped" style={{'height': '100vh'}}>
            <div className="shape shape-style-1 bg-gradient-primary">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center text-center">
                <Col lg="9">
                  <p className="h1 text-white">Bienvenido al</p>
                 <h1 className="display-1 text-white mt-5 font-weight-bolder" style={{'fontSize': '60px'}}>Maratón de conocimientos</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                <nav class="nav flex-column align-items-center mt-7">
                  <a class="nav-link text-white font-weight-bold display-4" href="/">Iniciar nueva partida</a>
                  <a class="nav-link text-white font-weight-bold display-4" href="/">Ver perfil</a>
                  <a class="nav-link text-white font-weight-bold display-4" href="/login">Cerrar sesión</a>
                </nav>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Home;
