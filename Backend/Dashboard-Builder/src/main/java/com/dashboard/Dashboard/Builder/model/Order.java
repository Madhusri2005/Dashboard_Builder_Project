package com.dashboard.Dashboard.Builder.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "customer_orders")
@Data // Use Lombok to handle Getters/Setters
public class Order {
    @Id
    private String id; // Matches "ORD-0001" format
    private String custId;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String address;
    private String city;
    private String state;
    private String zip;
    private String orderDate;
    private Double totalAmount; // For KPI calculations
    private Integer qty;
    private Double unitPrice;
    private String status;
    private String createdBy;
    @Column(name= "product_name")
    private String productName;

    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }
}