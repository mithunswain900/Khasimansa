package com.khasimansaproduct.repository;

import com.khasimansaproduct.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
