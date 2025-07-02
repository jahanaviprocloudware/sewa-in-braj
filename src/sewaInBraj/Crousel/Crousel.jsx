import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Crousel.css'; 

export default function CarouselComponent({ images }) {
  const validImages = images
    ?.filter((img) => typeof img === 'string' || (img && typeof img.url === 'string'))
    .map((img) => (typeof img === 'string' ? { url: img } : img)) || [];

  return (
    <div className="container-fluid" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {validImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              // style={{
              //   width: '100%',
              //   height: 'auto',
              //   borderRadius: '8px',
              //   objectFit: 'contain',
              // }}
              className='carousel-image'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
