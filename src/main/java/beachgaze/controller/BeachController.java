package beachgaze.controller;

import beachgaze.model.Beach;
import beachgaze.repository.BeachRepository;
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
@RequestMapping("/api/v1/beaches")
public class BeachController {
    @Autowired
    private BeachRepository beachRepository;

    @RequestMapping(method = RequestMethod.GET)
    public Set<Beach> list() {
        return new HashSet<>(beachRepository.findAll());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Beach details(@PathVariable Long id) {
        return beachRepository.findById(id).orElse(new Beach());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Beach update(@PathVariable Long id, @RequestBody Beach beach) {
        //update beach info
        beach.setId(id);
        return beachRepository.save(beach);
    }

    @PostMapping
    public Beach create(@RequestBody Beach beach) {
        //create beach info
        System.out.println("reached");
        return beachRepository.save(beach);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public Beach delete(@PathVariable Long id) {
        //delete beach info
        Beach beach = beachRepository.findById(id).orElse(new Beach());
        if (beach.getId() != null)
            beachRepository.delete(beach);
        return beach;
    }
}
