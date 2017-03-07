package ttu.tteh.exercise;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExerciseController {
	
	private ExerciseService exerciseService;

	public ExerciseController(ExerciseService exerciseService) {
		this.exerciseService = exerciseService;
	}
	
	@RequestMapping(value="/exercise", method=RequestMethod.GET)
	public List<Exercise> getAllExercises() {
		return exerciseService.getAllExercises();
	}
	
	@RequestMapping(value = "/exercise/{liik}", method=RequestMethod.GET)
	public List<Exercise> getExercise(@PathVariable("liik") String liik) {
		return exerciseService.getExerciseByLiik(liik);
	}
}
