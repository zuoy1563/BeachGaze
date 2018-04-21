package beachgaze.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SharkAttacks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private int year;

    @Column(name = "cases_in_au")
    private int auCases;

    @Column(name = "cases_in_vic")
    private int vicCases;

    public SharkAttacks() {
    }

    public SharkAttacks(int year, int auCases, int vicCases) {
        this.year = year;
        this.auCases = auCases;
        this.vicCases = vicCases;
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

    public int getAuCases() {
        return auCases;
    }

    public void setAuCases(int auCases) {
        this.auCases = auCases;
    }

    public int getVicCases() {
        return vicCases;
    }

    public void setVicCases(int vicCases) {
        this.vicCases = vicCases;
    }
}
