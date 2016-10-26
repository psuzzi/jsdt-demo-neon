package hello;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

/** @RestController class, ready for use by Spring MVC to handle web requests
 *  */
@RestController
public class HelloController {
	
	List<Developer> devs = new ArrayList<>();
	Gson g = new Gson();

	@RequestMapping("/add")
	public String add(@RequestParam("name") String name, @RequestParam("enable") Boolean enable){
		devs.add(new Developer(name, enable));
		return g.toJson("add:ok");
	}

	@RequestMapping("/adddata")
	public String addData(){
		devs.add(new Developer("Patrik", false));
		devs.add(new Developer("Ilya", true));
		devs.add(new Developer("Victor", false));
		devs.add(new Developer("Gorkem", true));
		devs.add(new Developer("Angel", false));
		return g.toJson("adddata:ok");
	}
	
	@RequestMapping("/list")
	public String list(){
		return g.toJson(devs);
	}
	
	@RequestMapping("/clear")
	public String clear(){
		devs.clear();
		return g.toJson("clear:ok");
	}
	
}

class Developer{
	public Developer(String name, Boolean enable) {
		super();
		this.name = name;
		this.enable = enable;
	}
	public String name;
	public Boolean enable;
}
