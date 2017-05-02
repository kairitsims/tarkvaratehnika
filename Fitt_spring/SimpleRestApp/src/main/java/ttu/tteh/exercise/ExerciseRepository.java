package ttu.tteh.exercise;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ExerciseRepository extends CrudRepository<Exercise, String>{
	
	public List<Exercise> findAll();
	
	public List<Exercise> findByLiik(String liik);
	

}
