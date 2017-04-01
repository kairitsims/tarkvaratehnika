package ttu.tteh.diet;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Diet {
	@Id
	@GeneratedValue
	long id;
	String username;
	String foodName;
	String foodAmount;
}
