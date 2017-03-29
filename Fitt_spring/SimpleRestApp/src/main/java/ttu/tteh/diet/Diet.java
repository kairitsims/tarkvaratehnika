package ttu.tteh.diet;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Diet {
	@Id
	LocalDateTime date = LocalDateTime.now();
	String username;
	String foodName;
	String foodAmount;
}
