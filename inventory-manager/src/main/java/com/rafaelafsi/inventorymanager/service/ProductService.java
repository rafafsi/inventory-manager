package com.rafaelafsi.inventorymanager.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rafaelafsi.inventorymanager.dto.request.ProductDTO;
import com.rafaelafsi.inventorymanager.mapper.ProductMapper;
import com.rafaelafsi.inventorymanager.model.Product;
import com.rafaelafsi.inventorymanager.repository.ProductRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper = ProductMapper.INSTANCE;

    // Is missing to do: Product already registered exception and
    // verifyIfAlreadyRegistered method
    public ProductDTO createProduct(ProductDTO productDTO) {
        Product product = productMapper.toModel(productDTO);
        Product savedProduct = productRepository.save(product);
        return productMapper.toDTO(savedProduct);
    }

    public List<ProductDTO> listAll() {
        return productRepository.findAll()
                .stream()
                .map(productMapper::toDTO)
                .collect(Collectors.toList());
    }

    public void deleteById(int id) {
        productRepository.deleteById(id);
    }

    public Product getProduct(int id) {
        Optional<Product> result = productRepository.findById(id);
        if(result.isPresent()) {
            return result.get();
        } else {
            throw new Error("Product not found.");
        }

    }

    public void save(Product product) {
        productRepository.save(product);
    }

}
