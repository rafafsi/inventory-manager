package com.rafaelafsi.inventorymanager.dto.request;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {
    

    private Integer id;
    
    private String description;
    private String type;
    private LocalDate expirationDate;
    private Float price;
}
