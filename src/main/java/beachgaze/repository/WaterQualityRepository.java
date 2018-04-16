package beachgaze.repository;

import beachgaze.model.WaterQuality;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WaterQualityRepository extends JpaRepository<WaterQuality, Long> {

}
