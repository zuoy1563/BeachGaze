package beachgaze.model;

import org.junit.Test;

import java.text.SimpleDateFormat;

public class WaterQualityTest {
    @Test
    public void testWaterQuality() throws Exception {
        WaterQuality wq = new WaterQuality();
        String dateStr = "29/01/2018";
        SimpleDateFormat bartDateFormat = new SimpleDateFormat("dd/MM/yyyy");
        java.util.Date date = bartDateFormat.parse(dateStr);
        java.sql.Date sqlDate = new java.sql.Date(date.getTime());
        wq.setDate(sqlDate);
        System.out.println(wq);
    }
}
