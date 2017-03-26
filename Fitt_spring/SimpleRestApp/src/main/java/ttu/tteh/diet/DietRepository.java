package ttu.tteh.diet;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DietRepository extends CrudRepository<Diet, String>{
	public List<Diet> findAll();
	public List<Diet> findByUsername(String username);
}
