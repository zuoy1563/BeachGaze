package beachgaze.controller;

import beachgaze.model.Melanoma;
import beachgaze.repository.MelanomaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * This rest api is for exchanging Melanoma information with database.
 *
 * Author: Yue Zuo
 */
@RestController
@RequestMapping("/api/v1/melanoma")
public class MelanomaController {
    @Autowired
    MelanomaRepository melanomaRepository;

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public List<Melanoma> getAllMelanomaData() {
        return melanomaRepository.findAll();
    }
}
