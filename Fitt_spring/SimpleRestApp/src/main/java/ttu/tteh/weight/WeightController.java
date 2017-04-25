package ttu.tteh.weight;


import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeightController {
	
	private WeightService weightService;

	public WeightController(WeightService weightService) {
		this.weightService = weightService;
	}
	
	@RequestMapping(value="/weight/add", method=RequestMethod.POST,
			consumes = "application/json")
	public Weight addWeight(@RequestBody Weight weight) {
		return weightService.addWeight(weight);
	}
	
	@RequestMapping(value="/weight", method=RequestMethod.GET)
	public List<Weight> getAllWeights() {
		return weightService.getAllWeights();
	}
	
	@RequestMapping(value = "/weight/{username}", method=RequestMethod.GET)
	public List<Weight> getWeight(@PathVariable("username") String username) {
		return weightService.getWeightByUsername(username);
	}
}
