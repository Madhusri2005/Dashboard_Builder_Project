package com.dashboard.Dashboard.Builder.repository;

import com.dashboard.Dashboard.Builder.model.Layout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LayoutRepository extends JpaRepository<Layout, Long> {}