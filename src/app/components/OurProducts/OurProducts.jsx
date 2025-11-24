'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { useRouter } from "next/navigation";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './OurProducts.css';

const products = [
  {
    id: 26,
    title: "Cumin Seeds",
    category: "Oil Seeds",
    image: "/images/Cumin Seed.jpg"
  },
  {
    id: 28,
    title: "Fennel Seeds",
    category: "Oil Seeds",
    image: "/images/Fennel Seeds.jpg"
  },
  {
    id: 27,
    title: "Coriander Seeds",
    category: "Oil Seeds",
    image: "/images/Coriandrum Sativum.jpg"
  },
  {
    id: 14,
    title: "Turmeric Powder",
    category: "Spices",
    image: "/images/TURMERIC POWDER.jpg"
  },
  // KALONJI - Not found in your data
  {
    id: 31,
    title: "Carom Seeds",
    category: "Oil Seeds",
    image: "/images/Carom Seeds.jpg"
  },
  {
    id: 34,
    title: "Onion Flakes",
    category: "Others",
    image: "/images/Onion Flakes.jpg"
  },
  {
    id: 16,
    title: "Black Mustard Seeds",
    category: "Oil Seeds",
    image: "/images/BLACK MUSTARD SEEDS.jpg"
  },
  {
    id: 19,
    title: "Yellow Mustard Seeds",
    category: "Oil Seeds",
    image: "/images/Yellow Mustard Seeds.jpg"
  },
  {
    id: 30,
    title: "Blanched Groundnuts",
    category: "Oil Seeds",
    image: "/images/Blanched Groundnuts.jpg"
  },
  {
    id: 32,
    title: "Dill Seeds",
    category: "Oil Seeds",
    image: "/images/Dill Seeds.jpg"
  },
  // CHILLI POWDER - matches Red Chili Powder
  {
    id: 13,
    title: "Red Chili Powder",
    category: "Spices",
    image: "/images/RED CHILI POWDER.jpg"
  },
  // PEANUT - matches Ground Nut Seeds
  {
    id: 29,
    title: "Ground Nut Seeds",
    category: "Oil Seeds",
    image: "/images/ground nut seeds.jpg"
  },
  // FENUGREEK SEEDS - Not found in your data
  {
    id: 35,
    title: "Quinoa",
    category: "Others",
    image: "/images/Quinoa Seeds.jpg"
  },
  {
    id: 17,
    title: "Sesame Seeds Hulled",
    category: "Oil Seeds",
    image: "/images/SESAME SEEDS HULLED.jpg"
  },
  {
    id: 36,
    title: "Whole Red Chillies",
    category: "Spices",
    image: "/images/Whole Red Chillies.jpg"
  },
  {
    id: 33,
    title: "Garlic Flakes",
    category: "Others",
    image: "/images/dehydrated-Garlic.jpg"
  }
];

const OurProducts = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [dotsCount, setDotsCount] = useState(4);
  const router = useRouter();


  // Update slides per view and dots count based on screen size
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setSlidesPerView(1);
        setDotsCount(1); // Only 2 dots for mobile
      } else if (width <= 1023) {
        setSlidesPerView(2);
        setDotsCount(2); // Only 3 dots for tablet
      } else if (width <= 1440) {
        setSlidesPerView(3);
        setDotsCount(3); // 4 dots for laptop
      } else {
        setSlidesPerView(4);
        setDotsCount(4); // 4 dots for desktop
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  return (
    <section className="products">
      <div className="our-products" >
        <h2>Our Products</h2>

        {/* Background images */}
        <div className="background-images">
          <img src="./images/Group.png" alt="" className="group-img" />
          <img src="/images/Clip path group-3.png" alt="" className="group-img-2" />
          <img src="/images/Clip path group-3.png" alt="" className="group-img-3" />
          <img src="/images/Clip path group-3.png" alt="" className="group-img-4" />
        </div>

        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={0}
            slidesPerView={slidesPerView}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              dynamicBullets: false,
              renderBullet: function (index, className) {
                // Only render bullets up to the calculated dotsCount
                if (index < dotsCount) {
                  return '<span class="' + className + ' custom-bullet"></span>';
                }
                return '';
              },
            }}
            speed={800}
            effect="slide"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              481: {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1441: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1920: {
                slidesPerView: 4,
                spaceBetween: 40,
              }
            }}
            grabCursor={true}
            touchEventsTarget="container"
            simulateTouch={true}
            allowTouchMove={true}
            className="products-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-card">
                  <img src={product.image} alt={product.title} />
                  <div className="product-info" onClick={() => router.push(`/products/${product.id}`)}>
                    <span>{product.title}</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation and Pagination */}
        </div>
        <div className="swiper-controls">
          <button className="swiper-button-prev-custom">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L3 12L9 6L10.4 7.4L6.8 11H19V12V13H6.8L10.4 16.6L9 18Z" fill="#6E862F" />
            </svg>
          </button>

          <span className="swiper-pagination-custom"></span>

          <button className="swiper-button-next-custom">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L21 12L15 6L13.6 7.4L17.2 11H5V13H17.2L13.6 16.6L15 18Z" fill="#6E862F" />
            </svg>
          </button>
        </div>

        {/* View More button */}
        <button className="view-more" onClick={() => router.push('/products')}>View More</button>
      </div>
    </section>
  );
};

export default OurProducts;