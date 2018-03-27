package beachgaze.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
public class LandingController {

    @RequestMapping("/")
    public String landing(Map<String, Object> model) {
        return "home/index";
    }

    @RequestMapping("/services")
    public String services(Map<String, Object> model) {
        return "home/services";
    }

    @RequestMapping("/about")
    public String about(Map<String, Object> model) {
        return "home/about";
    }

    @RequestMapping("/statistics")
    public String statistics(Map<String, Object> model) {
        return "home/statistics";
    }

    @RequestMapping("/tips")
    public String tips(Map<String, Object> model) {
        return "home/tips";
    }

}