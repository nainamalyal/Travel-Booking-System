package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.TrainBook;
import com.repo.TrainRepo;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/trainbook")
public class TrainBookingController {

	@Autowired
	TrainRepo trainrepo;
	
	@GetMapping("/showall")
	public List<TrainBook> getAllDetails() {
		return trainrepo.findAll();
	}

	@PostMapping("/bookticket")
	public void bookTicket(@RequestBody TrainBook trainbook) {

		trainrepo.save(trainbook);

	}

}
