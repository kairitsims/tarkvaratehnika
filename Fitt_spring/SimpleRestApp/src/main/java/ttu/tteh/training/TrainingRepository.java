package ttu.tteh.training;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainingRepository extends CrudRepository<Training, String>{
	public List<Training> findAll();
	public List<Training> findByUsername(String username);
}