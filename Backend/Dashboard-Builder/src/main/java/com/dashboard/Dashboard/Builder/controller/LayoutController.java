package com.dashboard.Dashboard.Builder.controller;

import com.dashboard.Dashboard.Builder.model.Layout;
import com.dashboard.Dashboard.Builder.repository.LayoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/layout")
@CrossOrigin(origins = "http://localhost:5173")
public class LayoutController {
    @Autowired
    private LayoutRepository repository;

    @GetMapping
    public List<Layout> getLayout() {
        return repository.findAll();
    }

    @PostMapping
    public void saveLayout(@RequestBody List<Layout> layouts) {
        repository.deleteAll(); // Clears old layout to save the new one
        repository.saveAll(layouts);
    }
}