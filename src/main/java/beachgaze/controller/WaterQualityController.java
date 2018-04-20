package beachgaze.controller;
import beachgaze.model.WaterQuality;
import beachgaze.repository.WaterQualityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/wq")
public class WaterQualityController {
    @Autowired
    WaterQualityRepository waterQualityRepository;

    @RequestMapping(path = "/{beachId}",method = RequestMethod.GET)
    public List<WaterQuality> getWaterQualityByBeachId(@PathVariable Long beachId) {
        return waterQualityRepository.findWaterQualitiesByBeach_Id(beachId);
    }
}
