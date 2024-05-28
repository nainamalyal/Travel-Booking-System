package com.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.SignUp;
import com.repo.SignUpRepo;



@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:4200")

public class SignUpController {
	
	@Autowired
	SignUpRepo sigrin;
	
//	@PostMapping("/saveuser")
//	public ResponseEntity<Map<String, String>> contactReq(@RequestBody SignUp sigin) {  
//		Map<String, String> response = new HashMap<>();
//		response.put("message","User added Successfully");
//		sigrin.save(sigin);
//		 return ResponseEntity.ok(response);
//	}

	@PostMapping("/saveuser")
	public void adduser(@RequestBody SignUp signup) {
		sigrin.save(signup);
	}
}
