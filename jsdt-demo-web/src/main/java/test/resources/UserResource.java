package test.resources;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserResource {

	@RequestMapping(method = RequestMethod.GET)
	public Map<String, String> get() {
		// suppose we execute business logic to return data
		Map<String, String> map = new HashMap<>();
		map.put("users",
				"[{ 'name':'Patrik', 'corp':false },"
				+ "{ 'name':'Ilya', 'corp':true},"
				+ "{ 'name':'Victor', 'corp':true },"
				+ "{ 'name':'Gorkem', 'corp':true },"
				+ "{ 'name':'Angel', 'corp':true }]");
		return map;
	}

}
