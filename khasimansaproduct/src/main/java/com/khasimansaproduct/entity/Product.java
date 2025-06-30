package com.khasimansaproduct.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productname;
    private String category;
    private String subcategory;
    private double price;
    private double discount;
    private double discountRate;
    private double discountAmount;
    private double actualRate;
    private int quantity;
    private String description;
    private String shortdescription;
    private String image;
    private String unit;

    public Product(Long id, String productname, String category, String subcategory, double price, double discount, double discountRate, double discountAmount, double actualRate, int quantity, String description, String shortdescription, String image, String unit) {
        this.id = id;
        this.productname = productname;
        this.category = category;
        this.subcategory = subcategory;
        this.price = price;
        this.discount = discount;
        this.discountRate = discountRate;
        this.discountAmount = discountAmount;
        this.actualRate = actualRate;
        this.quantity = quantity;
        this.description = description;
        this.shortdescription = shortdescription;
        this.image = image;
        this.unit = unit;
    }


    // Getters and Setters

    public Product() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductname() {
        return productname;
    }

    public void setProductname(String productname) {
        this.productname = productname;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubcategory() {
        return subcategory;
    }

    public void setSubcategory(String subcategory) {
        this.subcategory = subcategory;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getDiscount() {
        return discount;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    public double getDiscountRate() {
        return discountRate;
    }

    public void setDiscountRate(double discountRate) {
        this.discountRate = discountRate;
    }

    public double getDiscountAmount() {
        return discountAmount;
    }

    public void setDiscountAmount(double discountAmount) {
        this.discountAmount = discountAmount;
    }

    public double getActualRate() {
        return actualRate;
    }

    public void setActualRate(double actualRate) {
        this.actualRate = actualRate;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getShortdescription() {
        return shortdescription;
    }

    public void setShortdescription(String shortdescription) {
        this.shortdescription = shortdescription;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }
}
