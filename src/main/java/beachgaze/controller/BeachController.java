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

/**
 * This rest api is for exchanging beach information with database.
 *
 * Author: Yue Zuo
 */
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

}
