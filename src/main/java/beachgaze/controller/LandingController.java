package beachgaze.controller;

import beachgaze.model.Beach;
import beachgaze.repository.BeachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * This controller is used to match urls to different pages.
 *
 * Author: Yue Zuo
 */
@Controller
public class LandingController {
    @Autowired
    BeachRepository beachRepository;

    @RequestMapping("/iteration2/")
    public String ite2Landing(Model model) {
        model.addAttribute("page", "index");
        return "home/index";
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

    @RequestMapping("/quizzes")
    public String quizzes(Model model) {
        model.addAttribute("page", "quizzes");
        return "iteration3/quiz/quiz_list";
    }

    @RequestMapping("/quizzes/dangers")
    public String quizzesOnDangers(Model model) {
        model.addAttribute("page", "quizzes");
        return "iteration3/quiz/quiz_dangers";
    }

    @RequestMapping("/quizzes/dangers/answer")
    public String quizzesOnDangersAnswer(Model model) {
        model.addAttribute("page", "quizzes answer");
        return "iteration3/quiz/quiz_dangers_ans";
    }

    @RequestMapping("/quizzes/first_aid")
    public String quizzesOnFirstAid(Model model) {
        model.addAttribute("page", "quizzes");
        return "iteration3/quiz/quiz_first_aid";
    }

    @RequestMapping("/quizzes/first_aid/answer")
    public String quizzesOnFirstAidAnswer(Model model) {
        model.addAttribute("page", "quizzes answer");
        return "iteration3/quiz/quiz_first_aid_ans";
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

    @RequestMapping("/first_aid_instructions")
    public String firstAidInstructions(Model model) {
        model.addAttribute("page", "First-aid Instructions");
        return "iteration3/home/first-aid";
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
}