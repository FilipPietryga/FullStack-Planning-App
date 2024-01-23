package backend.planning.services;

import backend.planning.entities.Task;
import backend.planning.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    TaskRepository taskRepository;

    public Task add(Task task) {
        return taskRepository.save(task);
    }

    public Task get(String id) {
        return taskRepository.findById(id).orElse(null);
    }

    public List<Task> all() {
        return taskRepository.findAll();
    }

    public void del(String id) {
        taskRepository.deleteById(id);
    }
}
