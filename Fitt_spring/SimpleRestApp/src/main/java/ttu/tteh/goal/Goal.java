package ttu.tteh.goal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Goal {
	@Id
	@GeneratedValue
	long id;
	String username;
	String goalName;
	String goalDate;
}