package ttu.tteh.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User {
	@Id
	String username;
	String password;
	String email;
	String name;
}
