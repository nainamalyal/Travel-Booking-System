cdpackage com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.PlaneBook;
import com.repo.PlaneRepo;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/plane")
public class PlaneController {

	@Autowired
	PlaneRepo prepo;

	@GetMapping("/show")
	public List<PlaneBook> getDetails() {
		return prepo.findAll();
	}

	@PostMapping("/bookTick")
	public void addTicket(@RequestBody PlaneBook plnbook) {
		prepo.save(plnbook);

	}
}
