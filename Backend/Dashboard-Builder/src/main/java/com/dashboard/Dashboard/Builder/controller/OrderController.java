package com.dashboard.Dashboard.Builder.controller;

import com.dashboard.Dashboard.Builder.model.Order;
import com.dashboard.Dashboard.Builder.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {
    @Autowired
    private OrderRepository repository;
    @GetMapping
    public List<Order> getAllOrders() {
        return repository.findAll();
    }
    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return repository.save(order);
    }
}