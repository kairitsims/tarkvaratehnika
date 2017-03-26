package ttu.tteh.diet;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class DietService {
	
	private DietRepository dietRepository;

	public DietService(DietRepository dietRepository) {
		this.dietRepository = dietRepository;
	}

	Diet addDiet(Diet diet) {
		// here you can do some validations etc before saving the user
		return dietRepository.save(diet);
	}

	List<Diet> getAllDiets() {
		return dietRepository.findAll();
	}

	Diet getDietByUsername(String username) {
		return dietRepository.findOne(username);
	}
	
	List<Diet> getDietByUsername(String username) {
		return dietRepository.findByUsername(username);
	}
}
