package com.rafaelafsi.inventorymanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rafaelafsi.inventorymanager.model.Person;
import com.rafaelafsi.inventorymanager.service.PersonService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PersonController {
    
    @Autowired
    PersonService personService;
    
    @GetMapping("/people")
    private List<Person> getAllPeople() {
        return personService.getAllPeople();
    }
    
    @GetMapping("/people/{id}")
    private Person getPerson(@PathVariable("id") int id) {
        return personService.getPerson(id);
    }
    
    @DeleteMapping("/people/{id}")
    private void deletePerson(@PathVariable("id") int id) {
        personService.deleteById(id);
    }
    
    
    @PostMapping("/people")
    private int savePerson(@RequestBody Person person) {
        personService.saveOrUpdate(person);
        return person.getId();
    }

    @PutMapping("/people")
    private Person updatePerson(@RequestBody Person person) {
        personService.saveOrUpdate(person);
        return person;
    }
}
