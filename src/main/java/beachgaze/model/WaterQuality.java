package beachgaze.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.text.SimpleDateFormat;
import java.sql.Date;

@Entity
public class WaterQuality {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @DateTimeFormat(pattern = "MM/dd/yyyy")
    @Column(name = "sample_date")
    private Date date;

    @Column(name = "result")
    private double result;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "beach_id", referencedColumnName = "id")
    @JsonBackReference
    private Beach beach;

    public WaterQuality() {
    }

    public WaterQuality(String dateStr, double result, Beach beach) throws Exception {
        SimpleDateFormat bartDateFormat = new SimpleDateFormat("MM/dd/yyyy");
        java.util.Date date = bartDateFormat.parse(dateStr);
        java.sql.Date sqlDate = new java.sql.Date(date.getTime());
        this.date = sqlDate;
        this.result = result;
        this.beach = beach;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public double getResult() {
        return result;
    }

    public void setResult(float result) {
        this.result = result;
    }

    public Beach getBeach() {
        return beach;
    }

    public void setBeach(Beach beach) {
        this.beach = beach;
    }
}
