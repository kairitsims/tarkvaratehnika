package ttu.tteh.weight;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class WeightService {
	
	private WeightRepository weightRepository;

	public WeightService(WeightRepository weightRepository) {
		this.weightRepository = weightRepository;
	}

	Weight addWeight(Weight weight) {
		// here you can do some validations etc before saving the user
		return weightRepository.save(weight);
	}

	List<Weight> getAllWeights() {
		return weightRepository.findAll();
	}
	
	List<Weight> getWeightByUsername(String username) {
		return weightRepository.findByUsername(username);
	}
}
