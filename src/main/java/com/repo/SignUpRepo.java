package com.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.model.SignUp;

import java.util.List;

@Repository

public interface SignUpRepo extends JpaRepository<SignUp, Long> {
	    SignUp findByEmail(String email);
	    List<SignUp> findByUsername(String username);
}
