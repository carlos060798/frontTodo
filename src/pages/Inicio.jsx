import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="mt-5">
      <div className="bg-primary text-white text-center py-5 mt-3rem">
        <FontAwesomeIcon icon={faList} size="4x" className="mb-3" />
        <h1 className="text-xl font-bold">TaskManager</h1>
        <p className="text-xl mt-4">Mantente organizado y productivo</p>
        <Link to="/Registro" className="mt-4">
          <Button variant="light" className="mt-4">Empezar</Button>
        </Link>
        <div className="text-white text-center py-3 mt-8">
          <p className="font-semibold text-xl mb-0">Task Manager &copy; 2023</p>
        </div>
      </div> 
    </div>
  );
};

export default Home;