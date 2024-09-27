// Clients.js
import React, { useEffect, useState } from "react";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from "../Config/firebase.config"; // Adjust the import path as necessary

const Clients = () => {
  const [clients, setClients] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      const querySnapshot = await getDocs(collection(db, "partners"));
      const clientsData = querySnapshot.docs.map((doc) => doc.data());
      setClients(clientsData);
    };

    fetchClients();
  }, []);

  return (
    <div>
      <section id="clients" className="clients clients">
        <div className="container">
          <div className="row">
            {clients.map((partner, index) => (
              <div className="col-lg-2 col-md-4 col-6" key={index}>
                <img
                  src={partner.image}
                  className="img-fluid"
                  data-aos-delay={`${index * 100}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
