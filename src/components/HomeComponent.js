/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector, useDispatch } from 'react-redux';
import { vehicles, listVehicles } from '../redux/reducer/vehicles/vehicleSlice';
import '../App.css';
import VehiclesList from './VehiclesList';

const HomeComponent = () => {
  const carData = useSelector(vehicles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listVehicles());
  }, []);
  return (
    <>
      <h2 className="container">Please select a car </h2>
      <div className="container">
        <div className="car-info ">
          <Carousel>
            {carData.map((car) => (
              <VehiclesList key={car.id} item={car} />
            ))}
          </Carousel>
        </div>
      </div>

      {/* <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      ; */}
    </>
  );
};

export default HomeComponent;
