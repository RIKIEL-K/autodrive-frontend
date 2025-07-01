import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";

const CourseEnCours = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [remainingTime, setRemainingTime] = useState(300);
  const [messages, setMessages] = useState([
    { sender: "client", content: "Bonjour, vous arrivez bientôt ?" },
    { sender: "taxi", content: "Oui, j'arrive dans quelques minutes." }
  ]);
  const [input, setInput] = useState("");

  const conducteur = {
    nom: "Jean Lafleur",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    plaque: "TAXI-321-MTL",
    vehicule: "Toyota Camry 2023"
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const sendMessage = (text) => {
    if (text.trim()) {
      setMessages([...messages, { sender: "taxi", content: text }]);
    }
  };

  const handleSend = () => {
    sendMessage(input);
    setInput("");
  };

  const handlePassagerABord = () => {
    navigate(`/arrivee-course/${id}`);
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid py-4" style={{ backgroundColor: "#f4f9ff", minHeight: "100vh" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-primary">Course en cours #{id}</h4>
          <button className="btn btn-sm btn-outline-primary" onClick={() => navigate(-1)}>Retour</button>
        </div>

        <div className="row g-4">
          {/* Colonne gauche : messagerie */}
          <div className="col-lg-8">
            <div className="card shadow border-0 rounded-4">
              <div className="card-body">
                <h6 className="text-primary mb-3">Temps restant : {Math.floor(remainingTime / 60)}m {remainingTime % 60}s</h6>
                <h6 className="text-primary mb-4">Distance estimée : 6.2 km</h6>

                <h6 className="text-primary"> Messagerie</h6>
                <div className="bg-light rounded p-3 mb-3" style={{ maxHeight: "250px", overflowY: "auto" }}>
                  {messages.map((msg, i) => (
                    <div key={i} className={`mb-2 ${msg.sender === "taxi" ? "text-end" : "text-start"}`}>
                      <span className={`badge ${msg.sender === "taxi" ? "bg-primary" : "bg-secondary"}`}>
                        {msg.content}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="d-flex gap-2">
                  <input
                    className="form-control"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Votre message..."
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  />
                  <button className="btn btn-primary" onClick={handleSend}>Envoyer</button>
                </div>

                <div className="mt-3 d-flex gap-2">
                  <button className="btn btn-outline-secondary" onClick={() => sendMessage("Je suis à proximité.")}>Je suis à proximité</button>
                  <button className="btn btn-outline-secondary" onClick={() => sendMessage("Je suis arrivé.")}>Je suis arrivé</button>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4">
            <div className="card shadow border-0 rounded-4">
              <div className="card-header bg-primary text-white rounded-top-4">
                <h6 className="mb-0"><i className="fas fa-user me-2"></i>Chauffeur</h6>
              </div>
              <div className="card-body text-center">
                <img src={conducteur.photo} alt="Chauffeur" className="rounded-circle mb-3" width="100" />
                <h5 className="text-primary">{conducteur.nom}</h5>
                <p className="mb-1"><strong>Véhicule :</strong> {conducteur.vehicule}</p>
                <p className="mb-3"><strong>Plaque :</strong> {conducteur.plaque}</p>

                <button className="btn btn-success w-100" onClick={handlePassagerABord}>
                  Passager à bord
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEnCours;
