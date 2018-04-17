package beachgaze.controller;

import beachgaze.repository.BeachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LandingController {
    @Autowired
    BeachRepository beachRepository;

    @RequestMapping("/")
    public String landing(Model model) {
        model.addAttribute("page", "index");
        return "home/index";
    }

    @RequestMapping("/about")
    public String about(Model model) {
        model.addAttribute("page", "about");
        return "home/about";
    }

    @RequestMapping("/statistics")
    public String statistics(Model model) {
        model.addAttribute("page", "statistics");
        return "home/statistics";
    }

    @RequestMapping("/tips")
    public String tips(Model model) {
        model.addAttribute("page", "tips");
        return "home/tips";
    }

    @RequestMapping("/lifeguards")
    public String lifeguards(Model model) {
        model.addAttribute("page", "lifeguards");
        return "home/lifeguards";
    }

    @RequestMapping("/beaches")
    public String beaches(Model model) {
        model.addAttribute("page", "beaches");
        model.addAttribute("beaches", beachRepository.findAll());
        return "iteration2/beaches/list";
    }

}