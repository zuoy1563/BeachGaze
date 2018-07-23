package beachgaze.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Melanoma {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private int year;

    @Column(name = "no_of_new_cases")
    private int numberOfNewCases;

    @Column
    private String gender;

    @Column
    private String state;

    public Melanoma() {
    }

    public Melanoma(int year, int numberOfNewCases, String gender, String state) {
        this.year = year;
        this.numberOfNewCases = numberOfNewCases;
        this.gender = gender;
        this.state = state;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getNumberOfNewCases() {
        return numberOfNewCases;
    }

    public void setNumberOfNewCases(int numberOfNewCases) {
        this.numberOfNewCases = numberOfNewCases;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
