import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Footer = () => {
  const products = useSelector((state) => state.users.data || []);
  const { id } = useParams();

  const chunkSize = Math.ceil(products.length / 3);
  const columns = [
    products.slice(0, chunkSize),
    products.slice(chunkSize, chunkSize * 2),
    products.slice(chunkSize * 2),
  ];

  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h5>Our Products</h5>
            <div className="row">
              {columns.map((col, colIndex) => (
                <div key={colIndex} className="col-4">
                  <ul className="list-unstyled">
                    {col.length > 0 ? (
                      col.map((product) => (
                        <li key={product.id} className="mb-1">
                          <Link
                            to={`/product/${product.id}`}
                            className="text-white text-decoration-none"
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li>No products available</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4 d-flex flex-column align-items-md-end align-items-start mt-3 mt-md-0">
            <div className="d-flex gap-3">
              <h5>Follow Us</h5>
              <a
                href={`https://api.whatsapp.com/send?phone=918923720937`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                <WhatsAppIcon style={{ color: "green", marginRight: 5 }} />
              </a>
              <a
                href="https://www.instagram.com/vrindasrockband?igsh=MWhnaXZtaWQ3eGx4eA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://youtube.com/shorts/cOa1B1aSdeI?si=0l-NQUB9sWT4BVGV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </div>

        <hr className="bg-secondary" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
