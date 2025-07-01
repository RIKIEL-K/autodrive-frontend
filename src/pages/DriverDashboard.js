import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/main.css';
import '../assets/css/custom.css';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import axios from 'axios';

const DriverDashboard = () => {
  const [enLigne, setEnLigne] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const updateDriverStatus = async (status, coords = null) => {
    try {
      const body = {
        enLigne: status,
        latitude: coords?.lat || null,
        longitude: coords?.lng || null
      };

      await axios.put(`/api/drivers/en-ligne/${id}`, body);
    } catch (err) {
      console.error("Erreur backend :", err);
      alert("Erreur de mise à jour du statut en ligne.");
    }
  };

  const toggleStatus = () => {
    const newStatus = !enLigne;
    setEnLigne(newStatus);

    if (newStatus) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const coords = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          };
          await updateDriverStatus(true, coords);
          setLoading(false);
          navigate(`/list-course-disponible/${id}`, { state: { position: coords } });
        },
        (err) => {
          console.error("Erreur de géolocalisation :", err);
          alert("Veuillez autoriser la géolocalisation pour passer en ligne.");
          setEnLigne(false);
          setLoading(false);
        },
        { enableHighAccuracy: true }
      );
    } else {
      updateDriverStatus(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div>
      <Navbar />
      <div className="container-fluid py-4 px-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="enLigneSwitch"
              checked={enLigne}
              onChange={toggleStatus}
              disabled={loading}
            />
            <label className="form-check-label fw-bold text-primary" htmlFor="enLigneSwitch">
              {enLigne ? 'En ligne' : 'Hors ligne'}
            </label>
          </div>

          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-outline-primary" onClick={() => navigate('/parametres')}>
              Paramètres
            </button>
            <button className="btn btn-light position-relative">
              <i className="bi bi-bell fs-5 text-primary"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
                <span className="visually-hidden">notifications non lues</span>
              </span>
            </button>
          </div>
        </div>

        <div className="row justify-content-between">
          <DashboardCard title="Commandes" text="Vos commandes actives et historiques." onClick={() => navigate('/commandes')} />
          <DashboardCard title="Facturation" text="Suivez vos paiements et revenus." onClick={() => navigate('/facturation')} />
          <DashboardCard title="Voiture" text="Informations sur votre véhicule." onClick={() => navigate('/car')} />
          <DashboardCard title="Contact" text="Messagerie avec vos clients et l’équipe." onClick={() => navigate('/contact')} />
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, text, onClick }) => (
  <div className="col-md-3">
    <div className="card shadow text-center border-0">
      <div className="card-body py-4">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-outline-primary btn-sm" onClick={onClick}>Voir</button>
      </div>
    </div>
  </div>
);

export default DriverDashboard;
