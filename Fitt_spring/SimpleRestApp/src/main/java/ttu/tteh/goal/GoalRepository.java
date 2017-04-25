package ttu.tteh.goal;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GoalRepository extends CrudRepository<Goal, String>{
	public List<Goal> findAll();
	public List<Goal> findByUsername(String username);
}