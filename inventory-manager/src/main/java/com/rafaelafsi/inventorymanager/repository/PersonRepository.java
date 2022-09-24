package com.rafaelafsi.inventorymanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rafaelafsi.inventorymanager.model.Person;

public interface PersonRepository extends JpaRepository<Person, Integer>{

}
