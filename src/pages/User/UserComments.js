import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { FaTrash } from "react-icons/fa";

const UserComments = () => {
  const [comments, setComments] = useState([]);

  // Simulation de récupération depuis l’API
  useEffect(() => {
    const mockComments = [
      {
        id: 1,
        driver: "Ali Benamar",
        destination: "Aéroport Pierre-Elliott-Trudeau",
        date: "2025-06-12 09:42",
        text: "Très ponctuel et voiture propre, merci !"
      },
      {
        id: 2,
        driver: "Sophie Tremblay",
        destination: "Université de Montréal",
        date: "2025-06-10 14:20",
        text: "Trajet agréable, chauffeur aimable."
      }
    ];
    setComments(mockComments);
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Confirmer la suppression du commentaire ?");
    if (confirmed) {
      setComments(prev => prev.filter(c => c.id !== id));
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#f4f9ff", minHeight: "100vh" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-header bg-primary text-white rounded-top-4 px-4 py-3">
                <h5 className="mb-0">
                  <i className="fas fa-comments me-2"></i>Commentaires postés
                </h5>
              </div>

              <div className="card-body px-4 py-4">
                {comments.length === 0 ? (
                  <div className="text-center text-muted">Aucun commentaire trouvé.</div>
                ) : (
                  comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="border rounded p-3 mb-3 bg-white position-relative"
                    >
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h6 className="text-primary mb-1">{comment.driver}</h6>
                          <small className="text-muted d-block">
                            Destination : {comment.destination}
                          </small>
                          <small className="text-muted">Posté le : {comment.date}</small>
                        </div>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(comment.id)}
                        >
                          <FaTrash className="me-1" />
                          Supprimer
                        </button>
                      </div>
                      <hr />
                      <p className="mb-0">{comment.text}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComments;
