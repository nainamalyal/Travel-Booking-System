package com.service;

import org.springframework.stereotype.Repository;

@Repository
public interface LoginService {
	public int loginValidation(String username,String password);
}
