package com.wl.projekt;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ToDoController {

	@Autowired
	private ToDoRepository tdr;
	
	//get all
	@GetMapping("/todos")
	public List<ToDo> getAllToDos() {
		return this.tdr.findAll();
	}
	
	//get by id
	@GetMapping("/todos/{id}")
	public ResponseEntity<Optional<ToDo>> getToDoById(@PathVariable(value = "id") Long id) {
		
		Optional<ToDo> todo = tdr.findById(id);
		
		return ResponseEntity.ok().body(todo);
	}
	
	//save
	@PostMapping("/savetodos")
	public ToDo createToDo(@RequestBody ToDo todo) {
		return this.tdr.save(todo);
	}
	
	//delete
	@DeleteMapping("/todos/{id}")
	public Map<String, Boolean> deleteToDo(@PathVariable(value = "id") Long id) {
		Optional<ToDo> todo = tdr.findById(id);
		this.tdr.deleteById(id);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return response;
	}
}
