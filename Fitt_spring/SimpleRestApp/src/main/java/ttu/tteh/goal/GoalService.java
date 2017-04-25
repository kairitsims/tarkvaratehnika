package ttu.tteh.goal;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class GoalService {
	
	private GoalRepository goalRepository;

	public GoalService(GoalRepository goalRepository) {
		this.goalRepository = goalRepository;
	}

	Goal addGoal(Goal goal) {
		// here you can do some validations etc before saving the user
		return goalRepository.save(goal);
	}

	List<Goal> getAllGoals() {
		return goalRepository.findAll();
	}
	
	List<Goal> getGoalByUsername(String username) {
		return goalRepository.findByUsername(username);
	}
}
