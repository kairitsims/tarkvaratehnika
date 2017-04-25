package ttu.tteh.exercise;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Exercise {
	@Id
	String name;
	String liik;
	int arv;
	String yhik;
	String kirjeldus;
	String asukoht;
}