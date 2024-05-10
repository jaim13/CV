import styles from "./Me.module.css"; // Importa los estilos CSS

export default function Me() {
  return (
    <div className="header-content d-flex justify-content-center align-items-center mt-6">
      <div className={`card text-bg-dark mb-3 col-12 col-md-6 ${styles['header-container']}`}>
        <div className={`header card-body ${styles['Me_card-body']}`}>
          <img src="imgs/profile.jpeg" className={`${styles['card-img-top']} card-img-top`} alt="profile" />
          <h2 className="card-title">Web Developer</h2>
          <h3 className="card-subtitle">Jaim Martínez</h3>
          {/* Aplica el estilo en línea para darle el color de fuente blanco */}
          <p className="card-text" style={{ color: 'white' }}>
            Welcome to my portfolio! As a passionate web developer. I`ve been building interactive websites to crafting robust web applications, I strive to create engaging digital experiences. Explore my portfolio to see some of my latest project and get in touch if you're interested in collaborating.
          </p>
        </div>
      </div>
    </div>
  );
}
