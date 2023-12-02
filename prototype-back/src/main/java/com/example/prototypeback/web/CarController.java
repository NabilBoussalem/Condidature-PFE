package com.example.prototypeback.web;

import com.example.prototypeback.interfaces.CarService;
import com.example.prototypeback.model.Car;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/cars")
@AllArgsConstructor
public class CarController {
    private CarService carService;

    @GetMapping
    public List<Car> getAllCars(){
        return carService.getAllCars();
    }

    @PostMapping("random")
    public Car createRandomCar(){
        return carService.createRandomCar();
    }

    @PostMapping
    public Car createCar(@RequestBody Car car){
        return carService.createCar(car);
    }
}
