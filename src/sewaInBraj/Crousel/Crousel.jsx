import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './Crousel.css';


export default function CarouselComponent({ images }) {

  return (
    <div className="container-fluid">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          {images.map((image, index) => (
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={`${index === 0 ? "active" : ""}`}
              aria-current={index === 0}
              aria-label={`Slide ${index}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner" >
          {images.map((image, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img src={image} className="d-block w-60" alt="Product" style={{ width: "50%",height:'50%', margin: "0 auto" }} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
