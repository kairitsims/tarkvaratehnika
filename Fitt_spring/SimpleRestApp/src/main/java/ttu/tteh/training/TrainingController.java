package ttu.tteh.training;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TrainingController {
	
	private TrainingService trainingService;

	public TrainingController(TrainingService trainingService) {
		this.trainingService = trainingService;
	}
	
	@RequestMapping(value="/training/add", method=RequestMethod.POST,
			consumes = "application/json")
	public Training addTraining(@RequestBody Training training) {
		return trainingService.addTraining(training);
	}
	
	@RequestMapping(value="/training", method=RequestMethod.GET)
	public List<Training> getAllTrainings() {
		return trainingService.getAllTrainings();
	}
	
	@RequestMapping(value = "/training/{username}", method=RequestMethod.GET)
	public List<Training> getTrainings(@PathVariable("username") String username) {
		return trainingService.getTrainingsByUsername(username);
	}
}
