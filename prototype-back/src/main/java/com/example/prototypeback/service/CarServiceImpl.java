package com.example.prototypeback.service;

import com.example.prototypeback.Fuel;
import com.example.prototypeback.interfaces.CarService;
import com.example.prototypeback.model.Car;
import com.github.javafaker.Faker;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CarServiceImpl implements CarService {
    private List<Car> cars;
    private Faker faker;

    @Override
    public List<Car> getAllCars() {
        return cars;
    }

    @Override
    public Car createRandomCar() {
        Fuel[] fuels = {Fuel.DIESEL, Fuel.ELECTRIC, Fuel.HYBRID, Fuel.GASOLINE};
        Car car = Car.builder()
                .name(faker.name().name())
                .mark(faker.name().name())
                .year(faker.number().numberBetween(1980, 2020))
                .fuel(fuels[faker.number().numberBetween(0, 4)])
                .build();
        cars.add(car);
        return car;
    }

    @Override
    public Car createCar(Car car) {
        cars.add(car);
        return car;
    }
}
