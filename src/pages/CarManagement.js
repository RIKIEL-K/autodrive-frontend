import React, { useState } from "react";
import Navbar from "../components/Navbar";

const CarManagement = () => {
  const [cars, setCars] = useState([
    { id: 1, name: "Tesla Model X", plate: "ABC-123", vin: "5YJXCDE22HF000001", type: "premium" },
  ]);

  const [selectedCarId, setSelectedCarId] = useState(cars[0]?.id || null);

  const handleDelete = (id) => {
    const updated = cars.filter(car => car.id !== id);
    setCars(updated);
    if (selectedCarId === id) {
      setSelectedCarId(updated[0]?.id || null);
    }
  };

  const getBadgeColor = (type) => {
    switch (type) {
      case 'premium': return 'bg-primary';
      case 'standard': return 'bg-secondary';
      case 'luxe': return 'bg-warning text-dark';
      default: return 'bg-light text-dark';
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid py-5" style={{ backgroundColor: "#f4f9ff", minHeight: "100vh" }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0 rounded-4 mb-4">
              <div className="card-header bg-primary text-white rounded-top-4 px-4 py-3 d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Gestion des voitures</h5>
                {cars.length === 0 && (
                  <a href="/addcar" className="btn btn-light text-primary btn-sm">
                    <i className="fas fa-plus me-1"></i>Ajouter une voiture
                  </a>
                )}
              </div>
              <div className="card-body px-4 py-4">
                <div className="row g-4">
                  {cars.map(car => (
                    <div className="col-md-6" key={car.id}>
                      <div className={`border rounded p-3 shadow-sm ${selectedCarId === car.id ? 'border-primary' : 'bg-white'}`}>
                        <div className="form-check d-flex justify-content-between align-items-center mb-2">
                          <input
                            className="form-check-input me-2"
                            type="radio"
                            name="selectedCar"
                            checked={selectedCarId === car.id}
                            onChange={() => setSelectedCarId(car.id)}
                          />
                          <h6 className="mb-0">
                            {car.name}
                            <span className={`badge ms-2 ${getBadgeColor(car.type)}`}>
                              {car.type.toUpperCase()}
                            </span>
                          </h6>
                          <div className="d-flex gap-2">
                            <i className="fas fa-pencil-alt text-primary cursor-pointer"></i>
                            <i
                              className="fas fa-trash-alt text-danger cursor-pointer"
                              onClick={() => handleDelete(car.id)}
                            ></i>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <small className="text-muted d-block">Plaque</small>
                            <span className="fw-bold">{car.plate}</span>
                          </div>
                          <div>
                            <small className="text-muted d-block">VIN</small>
                            <span className="fw-bold">{car.vin}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {cars.length === 0 && (
                    <div className="text-center text-muted py-3">Aucune voiture enregistrée</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default CarManagement;
