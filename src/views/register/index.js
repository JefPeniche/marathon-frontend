import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import { ReCAPTCHA } from "react-google-recaptcha";

const Register = () => {
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  return (
    <>
      <main>
        <section className="section section-shaped" style={{'height': '100vh'}}>
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-2">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-5">
                    <div className="text-muted text-center mb-3">
                      <small>Registrate con</small>
                    </div>
                    <div className="text-center">
                      <Button
                        className="btn-neutral btn-icon ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={require("assets/img/icons/common/google.svg")}
                          />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>O registrate con tu correo</small>
                    </div>
                    <Form role="form">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Nombre completo" type="text" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Correo electrónico" type="email" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Contraseña"
                            type="password"
                            autoComplete="off"
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Repetir contraseña"
                            type="password"
                            autoComplete="off"
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                         <ReCAPTCHA
                        sitekey="6LfZyZofAAAAAJj6ZllMcfo3rnqxbnvuglBjvki0"
                        onChange={onChange}
                      />
                      </FormGroup>
                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="primary"
                          type="button"
                        >
                          <a
                            className="text-white"
                            href="/"
                          > REGISTRARSE</a>
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <Row className="mt-3">
                  <Col xs="8">
                    <small>¿Ya tienes una cuenta?</small>
                    <a
                      className="text-light ml-2"
                      href="/login"
                    >
                      <small>Inicia sesión</small>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Register;
