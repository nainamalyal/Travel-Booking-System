package com.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Contact;



public interface Contactrepo extends JpaRepository<Contact,Integer>{

}
