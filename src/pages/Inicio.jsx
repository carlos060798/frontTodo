import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className=" py-5">
      <div className="container text-center text-light">
        <h1 className="display-4 fw-bold mb-4">Bienvenido a TaskManager</h1>
        <p className="lead mb-4">
          Organiza tus tareas de manera efectiva y aumenta tu productividad.
        </p>
        <p className="lead">
          ¡Regístrate ahora y comienza a gestionar tus tareas!
        </p>
        <div className="mt-5">
          <Link to="/Registro" className="btn btn-outline-primary me-2">
            Regístrate
          </Link>
          <Link to="/login" className="btn btn-outline-primary">
            Inicia sesión
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
