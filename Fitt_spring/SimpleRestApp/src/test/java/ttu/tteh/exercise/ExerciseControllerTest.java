package ttu.tteh.exercise;

import static org.junit.Assert.assertEquals;
import static org.mockito.Matchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Collections;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

public class ExerciseControllerTest {

	ExerciseController ec;
	ExerciseRepository er;
	
	@Before
	public void setup(){
		er = mock(ExerciseRepository.class);
		ExerciseService es = new ExerciseService(er);
		ec = new ExerciseController(es);
	}
	
	@Test
	public void testIfSameObjectIsReturned() {
		
		Exercise e = new Exercise();
		e.setName("a");
		when(er.findByLiik(eq("abs"))).thenReturn(Collections.singletonList(e));
		List<Exercise> list = ec.getExercise("abs");
		assertEquals(1, list.size());
		assertEquals(e, list.get(0));
		
	}
	
	@Test
	public void testIfSameObjectIsReturnedNeg() {
		
		Exercise e = new Exercise();
		e.setName("a");
		when(er.findByLiik(eq("liik"))).thenReturn(Collections.singletonList(e));
		List<Exercise> list = ec.getExercise("abs");
		assertEquals(0, list.size());
		verify(er, times(1)).findByLiik(eq("abs"));
		
	}

}
