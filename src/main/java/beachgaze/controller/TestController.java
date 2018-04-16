package beachgaze.controller;

import beachgaze.model.Beach;
import beachgaze.model.TestModel;
import beachgaze.repository.BeachRepository;
import beachgaze.repository.TestModelRepository;
import org.aspectj.weaver.ast.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/api/v1/")
public class TestController {
    @Autowired
    private TestModelRepository testModelRepository;

    @RequestMapping(value = "tests", method = RequestMethod.GET)
    public Set<TestModel> list() {
        return new HashSet<>(testModelRepository.findAll());
    }

    @PostMapping(value = "tests")
    public TestModel create(@RequestBody TestModel testModel) {
        //return CourseMockData.createCourse(course);
        return testModelRepository.save(testModel);
    }

    @RequestMapping(value = "courses/{id}", method = RequestMethod.DELETE)
    public TestModel delete(@PathVariable Long id) {
        // return CourseMockData.deleteCourse(id);
        TestModel testModel = testModelRepository.findById(id).get();
        testModelRepository.delete(testModel);
        return testModel;
    }
}
