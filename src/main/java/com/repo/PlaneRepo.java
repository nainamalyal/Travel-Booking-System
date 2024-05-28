package com.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.PlaneBook;

public interface PlaneRepo extends JpaRepository<PlaneBook, Integer>{

}
