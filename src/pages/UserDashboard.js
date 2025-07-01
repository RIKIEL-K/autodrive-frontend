import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/main.css';
import '../assets/css/custom.css';
import Navbar from '../components/Navbar';

const UserDashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="container-fluid py-4 px-5" style={{ backgroundColor: '#f4f9ff' }}>
        
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="text-primary fw-bold">Tableau de bord</h4>
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-light position-relative">
              
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
                <span className="visually-hidden">notifications non lues</span>
              </span>
            </button>
            <button className="btn btn-outline-primary" onClick={() => navigate(`/account-settings/${id}`)}>
              Paramètres
            </button>
          </div>
        </div>

        
        <div className="row gy-4 justify-content-between">
          
          <div className="col-md-4 col-xl-3">
            <div className="card shadow text-center border-0">
              <div className="card-body py-4">
                <h5 className="card-title text-primary">Mon Profil</h5>
                <p className="card-text">Gérer vos informations personnelles.</p>
                <button className="btn btn-outline-primary btn-sm" onClick={() => navigate(`/account-settings/${id}`)}>Accéder</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3">
            <div className="card shadow text-center border-0">
              <div className="card-body py-4">
                <h5 className="card-title text-primary">Commentaires</h5>
                <p className="card-text">Voir et gérer vos commentaires.</p>
                <button className="btn btn-outline-primary btn-sm" onClick={() => navigate(`/comments`)}>Accéder</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3">
            <div className="card shadow text-center border-0">
              <div className="card-body py-4">
                <h5 className="card-title text-primary">Transactions</h5>
                <p className="card-text">Consulter l’historique de vos courses.</p>
                <button className="btn btn-outline-primary btn-sm" onClick={() => navigate(`/user-transaction-list/${id}`)}>Voir l’historique</button>
              </div>
            </div>
          </div>

         
          <div className="col-md-4 col-xl-3">
            <div className="card shadow text-center border-0">
              <div className="card-body py-4">
                <h5 className="card-title text-primary">Nouvelle course</h5>
                <p className="card-text">Commander un nouveau trajet.</p>
                <button className="btn btn-outline-primary btn-sm" onClick={() => navigate(`/course-request/${id}`)}>Commander</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3">
            <div className="card shadow text-center border-0">
              <div className="card-body py-4">
                <h5 className="card-title text-primary">Service Client</h5>
                <p className="card-text">Discuter avec un conseiller en cas de problème.</p>
                <button className="btn btn-outline-primary btn-sm" onClick={() => navigate('/support')}>Contacter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
