package com.rafaelafsi.inventorymanager.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rafaelafsi.inventorymanager.model.Person;
import com.rafaelafsi.inventorymanager.repository.PersonRepository;

@Service
public class PersonService {

    @Autowired
    PersonRepository personRepository;

    public List<Person> getAllPeople() {
        List<Person> people = new ArrayList<Person>();
        personRepository.findAll().forEach(person1 -> people.add(person1));
        return people;
    }

    public Person getPerson(int id) {
        return personRepository.findById(id).get();
    }

    public void deleteById(int id) {
        personRepository.deleteById(id);
    }

    public void saveOrUpdate(Person person) {
        personRepository.save(person);
    }

    public void update(Person person, int id) {
        personRepository.save(person);
    }

}
