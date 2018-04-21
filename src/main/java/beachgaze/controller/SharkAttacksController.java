package beachgaze.controller;

import beachgaze.model.SharkAttacks;
import beachgaze.repository.SharkAttacksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/sharkAtk")
public class SharkAttacksController {
    @Autowired
    SharkAttacksRepository sharkAttacksRepository;

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public List<SharkAttacks> getAllAttacks() {
        return sharkAttacksRepository.findAll();
    }
}
