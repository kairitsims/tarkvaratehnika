package ttu.tteh.goal;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GoalController {
	
	private GoalService goalService;

	public GoalController(GoalService goalService) {
		this.goalService = goalService;
	}
	
	@RequestMapping(value="/goal/add", method=RequestMethod.POST,
			consumes = "application/json")
	public Goal addGoal(@RequestBody Goal goal) {
		return goalService.addGoal(goal);
	}
	
	@RequestMapping(value="/goal", method=RequestMethod.GET)
	public List<Goal> getAllGoals() {
		return goalService.getAllGoals();
	}
	
	@RequestMapping(value = "/goal/{username}", method=RequestMethod.GET)
	public List<Goal> getGoal(@PathVariable("username") String username) {
		return goalService.getGoalByUsername(username);
	}
}
