import React, { useState } from "react";
import Navbar from "../components/Navbar";

const AddCar = () => {
  const [formData, setFormData] = useState({
    vin: "",
    plate: "",
    year: "",
    brand: "",
    model: "",
    color: "",
    type: "standard", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Voiture ajoutée :", formData);
    
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid py-5" style={{ backgroundColor: "#f4f9ff", minHeight: "100vh" }}>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg rounded-4 border-0">
              <div className="card-header bg-primary text-white text-center rounded-top-4 py-4">
                <h5 className="mb-0">Ajouter une voiture</h5>
              </div>
              <div className="card-body px-4 py-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="vin" className="form-label">NIV (VIN)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="vin"
                      name="vin"
                      value={formData.vin}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="plate" className="form-label">Numéro de plaque</label>
                    <input
                      type="text"
                      className="form-control"
                      id="plate"
                      name="plate"
                      value={formData.plate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="year" className="form-label">Année</label>
                    <input
                      type="number"
                      className="form-control"
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="brand" className="form-label">Marque</label>
                    <input
                      type="text"
                      className="form-control"
                      id="brand"
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="model" className="form-label">Modèle</label>
                    <input
                      type="text"
                      className="form-control"
                      id="model"
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="color" className="form-label">Couleur</label>
                    <input
                      type="text"
                      className="form-control"
                      id="color"
                      name="color"
                      value={formData.color}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="type" className="form-label">Type</label>
                    <select
                      className="form-select"
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                    >
                      <option value="standard">Standard</option>
                      <option value="premium">Premium</option>
                      <option value="luxe">Luxe</option>
                    </select>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      <i className="fas fa-plus-circle me-2"></i>Ajouter la voiture
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="text-center mt-4">
              <a href="/voitures" className="text-primary text-decoration-none">
                <i className="fas fa-arrow-left me-2"></i>Retour à la liste des voitures
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
