package com.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.BusBook;

public interface BusRepo extends JpaRepository<BusBook, Integer>{
	

}
