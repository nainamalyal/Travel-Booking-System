package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.BusBook;
import com.model.Feed;
import com.repo.BusRepo;
import com.repo.Feedrepo;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/busbooking")
public class BusBookingController {

	@Autowired
	BusRepo bsrepo;
	
	@Autowired
	Feedrepo frepo;
	@GetMapping("/showall")
	public List<BusBook> getalldetails(){
		return bsrepo.findAll();
	
				}
	@PostMapping("/bookbus")
	public void addticket(@RequestBody BusBook busbook) {
		bsrepo.save(busbook);
	}
	
	
}
