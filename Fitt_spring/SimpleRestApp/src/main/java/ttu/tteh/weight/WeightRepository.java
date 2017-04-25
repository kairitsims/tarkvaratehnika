package ttu.tteh.weight;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeightRepository extends CrudRepository<Weight, String>{
	public List<Weight> findAll();
	public List<Weight> findByUsername(String username);
}