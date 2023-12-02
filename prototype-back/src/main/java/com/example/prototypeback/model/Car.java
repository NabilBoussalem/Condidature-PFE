package com.example.prototypeback.model;

import com.example.prototypeback.Fuel;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class Car {
    private String name;
    private String mark;
    private int year;
    private Fuel fuel;
}
