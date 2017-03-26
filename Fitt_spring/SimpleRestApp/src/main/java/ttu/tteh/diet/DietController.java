package ttu.tteh.diet;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DietController {
	
	private DietService dietService;

	public DietController(DietService dietService) {
		this.dietService = dietService;
	}
	
	@RequestMapping(value="/diet/add", method=RequestMethod.POST,
			consumes = "application/json")
	public Diet addDiet(@RequestBody Diet diet) {
		return dietService.addDiet(diet);
	}
	
	@RequestMapping(value="/diet", method=RequestMethod.GET)
	public List<Diet> getAllDiets() {
		return dietService.getAllDiets();
	}
	
	@RequestMapping(value = "/diet/{username}", method=RequestMethod.GET)
	public Diet getDiet(@PathVariable("username") String username) {
		return dietService.getDietByUsername(username);
	}
}
