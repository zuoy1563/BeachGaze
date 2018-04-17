package beachgaze.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Beach {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;

    @Column
    private int rating;

    @OneToMany(mappedBy = "id", fetch = FetchType.EAGER)
    private Set<WaterQuality> waterQualities;

    public Beach() {
    }

    public Beach(String name, String description, int rating) {
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.waterQualities = new HashSet<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public Set<WaterQuality> getWaterQualities() {
        return waterQualities;
    }

    public void setWaterQualities(Set<WaterQuality> waterQualities) {
        this.waterQualities = waterQualities;
    }
}
