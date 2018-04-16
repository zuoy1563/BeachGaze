package beachgaze.repository;

import beachgaze.model.TestModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface TestModelRepository extends JpaRepository<TestModel, Long> {
}

