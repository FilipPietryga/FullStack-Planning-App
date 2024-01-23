package backend.planning.controllers;

import backend.planning.entities.Task;
import backend.planning.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/task")
public class TaskController {
    @Autowired
    TaskService taskService;

    @PostMapping
    public ResponseEntity<Task> add(@RequestBody Task task) {
        Task temp = taskService.add(task);
        return new ResponseEntity<Task>(temp, HttpStatus.CREATED);
    }

    @GetMapping(path="/{id}")
    public ResponseEntity<Task> get(@PathVariable String id) {
        Task temp = taskService.get(id);
        return new ResponseEntity<Task>(temp, HttpStatus.FOUND);
    }

    @GetMapping
    public ResponseEntity<List<Task>> all() {
        List<Task> tasks = taskService.all();
        return new ResponseEntity<List<Task>>(tasks, HttpStatus.OK);
    }

    @DeleteMapping(path="/{id}")
    public ResponseEntity<Task> del(@PathVariable String id) {
        taskService.del(id);
        return new ResponseEntity<Task>(HttpStatus.NO_CONTENT);
    }

}
