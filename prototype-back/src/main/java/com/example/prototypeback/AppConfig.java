package com.example.prototypeback;

import com.example.prototypeback.model.Car;
import com.github.javafaker.Faker;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@Configuration
public class AppConfig {

    @Bean
    public Faker faker() {
        return new Faker();
    }

    @Bean
    public List<Car> cars(ResourceLoader resourceLoader) throws IOException {
        List<Car> cars=new ArrayList<>();
        Resource resource = resourceLoader.getResource("classpath:data.csv");
        try (InputStream inputStream = resource.getInputStream();
             BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
        ) {
            String line = reader.readLine();
            while ((line = reader.readLine()) != null) {
                String[] attr=line.split(",");
                cars.add(new Car(attr[0],attr[1], Integer.parseInt(attr[2]), Fuel.valueOf(attr[3].toUpperCase())));
            }
        }
        return cars;
    }
}
