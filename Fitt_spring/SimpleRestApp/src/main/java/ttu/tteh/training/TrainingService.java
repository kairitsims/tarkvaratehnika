package ttu.tteh.training;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TrainingService {
	
	private TrainingRepository trainingRepository;

	public TrainingService(TrainingRepository trainingRepository) {
		this.trainingRepository = trainingRepository;
	}

	Training addTraining(Training training) {
		// here you can do some validations etc before saving the user
		return trainingRepository.save(training);
	}

	List<Training> getAllTrainings() {
		return trainingRepository.findAll();
	}
	
	List<Training> getTrainingsByUsername(String username) {
		return trainingRepository.findByUsername(username);
	}
}