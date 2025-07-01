import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const OrdersPage = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const filteredOrders = orders.filter(order =>
    order.client.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setTimeout(() => {
      setOrders([
        { id: 1, client: "Alex Dupont", date: "2025-06-10", price: 25.5, time: "18 min", distance: "5.2 km" },
        { id: 2, client: "Sophie Tremblay", date: "2025-06-08", price: 39.9, time: "28 min", distance: "8.1 km" },
        { id: 3, client: "Mathieu Gagnon", date: "2025-06-07", price: 20.0, time: "15 min", distance: "4.0 km" },
        { id: 4, client: "Isabelle Roy", date: "2025-06-06", price: 32.2, time: "23 min", distance: "6.5 km" },
        { id: 5, client: "Jean Martin", date: "2025-06-05", price: 28.8, time: "20 min", distance: "5.7 km" },
        { id: 6, client: "Nadia Fortin", date: "2025-06-04", price: 30.0, time: "22 min", distance: "6.0 km" }
      ]);
    }, 800);
  }, []);

  const indexOfLast = currentPage * ordersPerPage;
  const indexOfFirst = indexOfLast - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  return (
    <div>
      <Navbar />
    <div className="container-fluid py-5" style={{ backgroundColor: "#f4f9ff", minHeight: "100vh" }}>
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-header bg-primary text-white px-4 py-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <h5 className="mb-3 mb-md-0">Historique des commandes</h5>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Rechercher un client..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            style={{ width: "250px" }}
          />
        </div>

        <div className="card-body px-4 py-4">
          {orders.length === 0 ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status"></div>
              <p className="mt-3 text-muted">Chargement des commandes...</p>
            </div>
          ) : filteredOrders.length === 0 ? (
            <div className="text-center py-5 text-muted">Aucune commande trouvée.</div>
          ) : (
            <>
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Client</th>
                      <th>Date</th>
                      <th>Temps</th>
                      <th>Distance</th>
                      <th>Prix</th>
                      <th>Détails</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentOrders.map(order => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.client}</td>
                        <td>{order.date}</td>
                        <td>{order.time}</td>
                        <td>{order.distance}</td>
                        <td>{order.price.toFixed(2)} $</td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => navigate(`/order`)}
                          >
                            Voir
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination par numéro seulement */}
              <nav className="d-flex justify-content-center mt-4">
                <ul className="pagination pagination-sm mb-0">
                  {[...Array(totalPages)].map((_, i) => (
                    <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                      <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                        {i + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default OrdersPage;
