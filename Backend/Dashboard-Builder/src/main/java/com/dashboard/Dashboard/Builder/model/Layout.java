package com.dashboard.Dashboard.Builder.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "dashboard_layouts")
@Data
public class Layout {
    @Id
    private Long id; 
    private Integer pos;
    private String name;
    private String title;
    private Integer w;
    private Integer h;
    private String metric;
    private String aggregation;
}