package ttu.tteh.exercise;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ExerciseService {
	
	private ExerciseRepository exerciseRepository;

	public ExerciseService(ExerciseRepository exerciseRepository) {
		this.exerciseRepository = exerciseRepository;
	}

	List<Exercise> getAllExercises() {
		return exerciseRepository.findAll();
	}
	
	Exercise getExerciseByLiik(String liik) {
		return exerciseRepository.findAll(liik);
	}
}
