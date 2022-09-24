package com.rafaelafsi.inventorymanager.controller;

import java.util.List;

// import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.rafaelafsi.inventorymanager.dto.request.ProductDTO;
import com.rafaelafsi.inventorymanager.model.Product;
import com.rafaelafsi.inventorymanager.service.ProductService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class ProductController {
    
    private final ProductService productService;

    //to create a new product -> return a DTO
    @PostMapping("/products")
    @ResponseStatus(HttpStatus.CREATED)
    public ProductDTO createProduct(@RequestBody ProductDTO productDTO) {
        return productService.createProduct(productDTO);
    }

    //to get all products
    @GetMapping("/products")
    public List<ProductDTO> listProducts() {
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
    @PatchMapping("/products/{id}")
    public void updateProduct(int id) {
        Product product = productService.getProduct(id);

        product.setDescription(product.getDescription());
        product.setExpirationDate(product.getExpirationDate());
        product.setPrice(product.getPrice());
        product.setType(product.getType());

        productService.save(product);
    }





}
