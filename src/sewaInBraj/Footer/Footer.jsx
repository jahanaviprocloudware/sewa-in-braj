import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Footer = () => {
  const products = useSelector((state) => state.users.data || []);

  const sortedProducts = [...products].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const chunkSize = Math.ceil(sortedProducts.length / 3);
  const columns = [
    sortedProducts.slice(0, chunkSize),
    sortedProducts.slice(chunkSize, chunkSize * 2),
    sortedProducts.slice(chunkSize * 2),
  ];

  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h5 className="mb-3">Our Products</h5>
            <div className="row">
              {columns.map((col, colIndex) => (
                <div key={colIndex} className="col-4">
                  <ul className="list-unstyled">
                    {col.map((product) => (
                      <li
                        key={product.id}
                        className="mb-1 d-flex align-items-center"
                      >
                        <Link
                          className="text-white"
                          to={`/product/${product.id}`}
                          state={{ footer: true }}
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4 d-flex flex-column align-items-md-end align-items-start mt-4 mt-md-0">
            <h5 className="mb-2">Follow Us</h5>
            <div className="d-flex flex-column gap-2">
              <a
                href="https://api.whatsapp.com/send?phone=918923720937"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center text-white text-decoration-none"
              >
                <WhatsAppIcon style={{ color: "green", marginRight: 6 }} />
                +91 89237 20937
              </a>
              <a
                href="https://www.instagram.com/vrindasrockband"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <InstagramIcon style={{ marginRight: 6 }} />
                Instagram
              </a>
              <a
                href="https://youtube.com/@sevainvraja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <YouTubeIcon style={{ marginRight: 6 }} />
                YouTube
              </a>
            </div>
          </div>
        </div>

        <hr className="bg-secondary my-3" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} ShriGopalCreations rights reserved.
        </div>
      </div>
    </footer>
  );
};
