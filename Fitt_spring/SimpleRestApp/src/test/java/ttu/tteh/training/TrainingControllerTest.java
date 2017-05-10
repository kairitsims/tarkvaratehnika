package ttu.tteh.training;

import static org.junit.Assert.assertEquals;
import static org.mockito.Matchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Collections;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

public class TrainingControllerTest {

	TrainingController tc;
	TrainingRepository tr;
	
	@Before
	public void setup(){
		tr = mock(TrainingRepository.class);
		TrainingService ts = new TrainingService(tr);
		tc = new TrainingController(ts);
	}
	
	@Test
	public void testIfSameObjectIsReturned() {
		
		Training t = new Training();
		t.setUsername("Peeter");
		when(tr.findByUsername(eq("Peeter"))).thenReturn(Collections.singletonList(t));
		List<Training> list = tc.getTrainings("Peeter");
		assertEquals(1, list.size());
		assertEquals(t, list.get(0));
		
	}
	
	@Test
	public void testIfSameObjectIsReturnedNeg() {
		
		Training t = new Training();
		t.setUsername("Peeter");
		when(tr.findByUsername(eq("Milvi"))).thenReturn(Collections.singletonList(t));
		List<Training> list = tc.getTrainings("Peeter");
		assertEquals(0, list.size());
		verify(tr, times(1)).findByUsername(eq("Peeter"));
		
	}

}
