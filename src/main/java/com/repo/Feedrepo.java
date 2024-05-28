package com.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Feed;


public interface Feedrepo extends JpaRepository<Feed,Integer>{

}
