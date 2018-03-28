package beachgaze.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LandingController {

    @RequestMapping("/")
    public String landing() {
        return "home/index";
    }

    @RequestMapping("/services")
    public String services() {
        return "home/services";
    }

    @RequestMapping("/about")
    public String about() {
        return "home/about";
    }

    @RequestMapping("/statistics")
    public String statistics() {
        return "home/statistics";
    }

    @RequestMapping("/tips")
    public String tips() {
        return "home/tips";
    }

    @RequestMapping("/lifeguards")
    public String lifeguards() {
        return "home/lifeguards";
    }

}