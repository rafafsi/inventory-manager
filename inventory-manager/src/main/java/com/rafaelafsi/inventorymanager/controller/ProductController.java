package com.rafaelafsi.inventorymanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.rafaelafsi.inventorymanager.model.Product;
import com.rafaelafsi.inventorymanager.service.ProductService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    
    @Autowired
    ProductService productService;

    //to create a new product -> return a DTO
    @PostMapping("/products")
    @ResponseStatus(HttpStatus.CREATED)
    public Product createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    //to get all products
    @GetMapping("/products")
    public List<Product> listProducts() {
        return productService.listAll();
    }

    //to get one product by id
    @GetMapping("/products/{id}")
    public Product getProduct(@PathVariable("id") int id) {
        return productService.getProduct(id);
    }

    //to delete a product by id
    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable("id") int id) {
        productService.deleteById(id);
    }

    //to update a product
    @PutMapping("/products/{id}")
    public Product updateProduct(@RequestBody Product newProduct, @PathVariable int id) {
        Product productToBeUpdate = productService.getProduct(id);

        productToBeUpdate.setDescription(newProduct.getDescription());
        productToBeUpdate.setExpirationDate(newProduct.getExpirationDate());
        productToBeUpdate.setPrice(newProduct.getPrice());
        productToBeUpdate.setType(newProduct.getType());

        productService.save(productToBeUpdate);
        return productToBeUpdate;
    }
}
