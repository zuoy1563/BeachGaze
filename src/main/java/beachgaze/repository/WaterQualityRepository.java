package beachgaze.repository;

import beachgaze.model.WaterQuality;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WaterQualityRepository extends JpaRepository<WaterQuality, Long> {
    List<WaterQuality> findWaterQualitiesByBeach_Id(Long beachId);

}
