package beachgaze.controller;

import beachgaze.model.Beach;
import beachgaze.repository.BeachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LandingController {
    @Autowired
    BeachRepository beachRepository;

    @RequestMapping("/iteration2/")
    public String ite2Landing(Model model) {
        model.addAttribute("page", "index");
        return "home/index";
    }

    @RequestMapping("/about")
    public String about(Model model) {
        model.addAttribute("page", "about");
        return "home/about";
    }

    @RequestMapping("/tips")
    public String tips(Model model) {
        model.addAttribute("page", "tips");
        return "iteration3/home/tips";
    }


    @RequestMapping("/")
    public String landing(Model model) {
        model.addAttribute("page", "index");
        return "iteration3/home/index";
    }

    @RequestMapping("/statistics")
    public String statistics(Model model) {
        model.addAttribute("page", "statistics");
        return "iteration3/home/statistics";
    }

    @RequestMapping("/beaches")
    public String beaches(Model model) {
        model.addAttribute("page", "beaches");
        return "iteration3/beaches/list";
    }

    @RequestMapping("/accidents")
    public String accidents(Model model) {
        model.addAttribute("page", "accidents");
        return "iteration3/home/accidents";
    }

    @RequestMapping("/uv_instructions")
    public String uvInstructions(Model model) {
        model.addAttribute("page", "UV Instructions");
        return "iteration3/home/uv_instructions";
    }

    @RequestMapping("/beaches/{id}")
    public String beachDetails(@PathVariable Long id, Model model) {
        Beach beach = beachRepository.findById(id).orElse(new Beach());
        if (beach.getId() != null) {
            model.addAttribute("beach", beach);
            return "iteration3/beaches/details";
        }
        else
            return "error";
    }

    @RequestMapping("/iteration2/tips")
    public String ite2tips(Model model) {
        model.addAttribute("page", "tips");
        return "home/tips";
    }

    @RequestMapping("/iteration2/beaches")
    public String ite2Beaches(Model model) {
        model.addAttribute("page", "beaches");
        return "iteration2/beaches/list";
    }

    @RequestMapping("/iteration2/beaches/{id}")
    public String ite2BeachDetails(@PathVariable Long id, Model model) {
        Beach beach = beachRepository.findById(id).orElse(new Beach());
        if (beach.getId() != null) {
            model.addAttribute("beach", beach);
            return "iteration2/beaches/details";
        }
        else
            return "error";
    }
}