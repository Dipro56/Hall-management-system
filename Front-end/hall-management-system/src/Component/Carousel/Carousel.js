import React from 'react';
import DU1 from '../../Assets/du1.jpeg';
import DU2 from '../../Assets/du2.jpg';
import DU3 from '../../Assets/du3.jpg';
import DU4 from '../../Assets/du4.jpeg';

export const Carousel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-light slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            style={{ height: 500 }}
            src={DU1}
            className="d-block w-100 container-fluid"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="text-light bg-dark p-4">
              Dhaka University Hall Management System
            </h2>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            style={{ height: 500 }}
            src={DU2}
            className="d-block w-100 container-fluid "
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="text-light bg-dark p-4">
              Dhaka University Hall Management System
            </h2>
          </div>
        </div>
        <div className="carousel-item">
          <img
            style={{ height: 500 }}
            src={DU3}
            className="d-block w-100 container-fluid"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="text-light bg-dark p-4">
              Dhaka University Hall Management System
            </h2>
          </div>
        </div>
        <div className="carousel-item">
          <img
            style={{ height: 500 }}
            src={DU4}
            className="d-block w-100 container-fluid"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="text-light bg-dark p-4">
              Dhaka University Hall Management System
            </h2>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
