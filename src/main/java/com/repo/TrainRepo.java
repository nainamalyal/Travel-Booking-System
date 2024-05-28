package com.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.TrainBook;

public interface TrainRepo extends JpaRepository<TrainBook, Integer>{

}
