/* Header.js */
import React from "react";
import "./Header.css"; // Importa el archivo de estilos para el encabezado

function Header() {
  return (
    <div className="header-container">
      <img className="bg-image" src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=100&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bg image" />
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent"> {/* Agrega la clase bg-transparent para hacer la barra de navegación transparente */}
          <div className="container-fluid">
            <a className="navbar-brand" href="#">My resume</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              {/* Enlaces anclados para redirigir a diferentes secciones */}
              <li className="nav-item">
                <a className="nav-link" href="#languages">
                  Languages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#soft_skills">
                  Soft Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Tech_Skills">
                  Tech Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Contact
                </a>
              </li>
            </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="d-flex justify-content-center align-items-center mt-6"> 
            <div className="card col-12 col-md-6" style={{ maxWidth: "400px" }}> 
                <div className="card-body">
                    <h5 className="card-title">Jaim Martínez</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Web Developer</h6>
                    <p className="card-text">
                        I am pleased to present my latest personal project, a gym simulator platform designed with passion and cutting-edge technology. This project fuses a variety of technologies, including JavaScript (Node.js), SQL, HTML, CSS, TypeScript, Python, and AJAX, among others, to create an interactive and dynamic experience.
                    </p>
                    <p className="card-text">
                        I also implemented several APIs made by me to showcase my abilities in the backend environment. I have implemented the Model-View-Controller (MVC) architecture, which guarantees clean and modular code, as well as an intuitive user experience.
                    </p>
                    <p className="card-text">
                        Additionally, to improve functionality and user convenience, I have incorporated the ability to send emails and make payments through PayPal in a test environment. This project reflects my dedication to software development and my commitment to creating innovative and practical solutions.
                    </p>
                    <p className="card-text">
                        There are a few things you should know. First of all, I want to apologize if the website is a bit slow (it's because the render server is free and also the Azure Server). After registration, there will be a payment process. You can use the test card number 123456789, and the expiration date is 2050-04-24. If you choose the Account method, you can use the number 123456789. Sometimes there may be a timing issue, so if the website keeps loading and there's a mistake, it could be due to the response time. In that case, please try again.
                    </p>
                    <a href="https://costaricafitness.onrender.com" className="card-link">View My Personal Project</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
