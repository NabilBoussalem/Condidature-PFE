package com.example.prototypeback.interfaces;

import com.example.prototypeback.model.Car;

import java.util.List;

public interface CarService {
    List<Car> getAllCars();
    Car createRandomCar();
    Car createCar(Car car);
}
