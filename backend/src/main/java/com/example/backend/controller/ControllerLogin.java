package com.example.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ControllerLogin{
    @GetMapping("/person")
    public List<String> getAllPersons(){
        //Returns hardcoded data, a real world application would return from the database
        List<String> personList = new ArrayList<>();
        personList.add("Hưng");
        personList.add("Tuấn");
        personList.add("Phước ");
        personList.add("Khánh");
        return personList;
    }
}