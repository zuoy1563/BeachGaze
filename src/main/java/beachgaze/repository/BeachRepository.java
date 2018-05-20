package beachgaze.repository;

import beachgaze.model.Beach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.Collection;

public interface BeachRepository extends JpaRepository<Beach, Long> {
    Collection<Beach> findBeachByName(@Param("name")String name);
}
