package com.rafaelafsi.inventorymanager.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.rafaelafsi.inventorymanager.dto.request.ProductDTO;
import com.rafaelafsi.inventorymanager.model.Product;

@Mapper
public interface ProductMapper {
    
    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

    Product toModel(ProductDTO productDTO);
    ProductDTO toDTO(Product product);
}
