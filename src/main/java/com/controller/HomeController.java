package com.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestController;

import com.model.Contact;
import com.model.Feed;

import com.repo.Contactrepo;
import com.repo.Feedrepo;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HomeController {
	
	

	
	//=====================Feedback Process ====================
	
	@Autowired
	private Feedrepo feedrepo;

	@GetMapping("/user/feedback")
		public String showFeedbackForm(Model model) {
	    model.addAttribute("feed", new Feed());
	    return "feedbackForm";
	}


	@PostMapping("/submitFeedback")
	public void submitFeedback(@RequestBody Feed feed) {
		feedrepo.save(feed);
		
	}

	@GetMapping("/feedbacksuccess")
	public String showSuccessPage() {
		return "feedbackSuccess";
	}

	@GetMapping("/feedbackview")
	public String viewFeedback(Model model) {
	    List<Feed> feedList = feedrepo.findAll();
	    model.addAttribute("feedList", feedList);
	    return "viewFeedback";
	
	}
	//====================Contact Form  ==================
	@Autowired
	private Contactrepo contactrepo;
	
	@GetMapping("/contact")
	public String ContactForm(Model model)
	{
		model.addAttribute("contact",new Contact());
		return "contactform";
	}
	
	@PostMapping("/addcontact")
	public void addContact(@RequestBody Contact contact) {
		contactrepo.save(contact);
		
	}
	

	
}