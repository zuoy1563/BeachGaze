/**
 * Created by Zoe on 27/3/18.
 */
function plot() {
    var filename = $("#place").find("option:selected").text();
    $.ajax({
        url: 'data/' + filename + '.csv',
        success: function (csv) {
            Highcharts.chart('container', {
                data: {
                    csv: csv.replace(/\n\n/g, '\n')
                },
                yAxis: {
                    title: {
                        text: 'Routine Result'
                    }
                },
                plotOptions: {
                    series: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                title: {
                    text: filename
                },
                subtitle: {
                    text: 'Bacteria Contained in Per 100mL Water'
                }
            });
        }
    })
}