package beachgaze.repository;

import beachgaze.model.Melanoma;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MelanomaRepository extends JpaRepository<Melanoma, Long> {
}
