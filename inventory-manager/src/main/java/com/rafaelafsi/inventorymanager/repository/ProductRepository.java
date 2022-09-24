package com.rafaelafsi.inventorymanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rafaelafsi.inventorymanager.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

}
