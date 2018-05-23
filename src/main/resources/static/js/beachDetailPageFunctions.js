/**
 * Created by Zoe on 27/3/18.
 */
$(document).ready(function () {
    // draw water quality chart
    var beachName = document.getElementById("beachName").innerHTML;
    var spanValue = document.getElementById("beachId").innerHTML;
    var url = '/api/v1/wq/' + spanValue;
    $.get(url, function (json) {
        var filteredData = [];
        var jsonDates = [];
        for (var i = 0; i < json.length; i++) {
            jsonDates.push(json[i].date);
        }
        var jsonDateArray = [];
        var convertedDate = [];
        for (var j = 0; j < jsonDates.length; j++) {
            jsonDateArray.push(jsonDates[j].split("-"));
            jsonDateArray[j][1] = jsonDateArray[j][1] - 1;
            convertedDate.push(Date.UTC(jsonDateArray[j][0], jsonDateArray[j][1], jsonDateArray[j][2]));
            filteredData.push([convertedDate[j], json[j].result]);
        }
            Highcharts.chart('container', {
                yAxis: {
                    title: {
                        text: 'Routine Result'
                    },

                    plotLines:[{
                        color:'red',
                        dashStyle:'solid',
                        value:400,
                        width:2
                    }]
                },
                xAxis: {
                    type: 'datetime'
                },
                plotOptions: {
                    series: {
                        marker: {
                            enabled: false
                        },
                        label: {
                            enabled: false
                        },
                        name: 'Results of bacteria contained in per 100mL sea water'
                    }
                },
                title: {
                    text: beachName
                },
                subtitle: {
                    text: 'Bacteria Contained in Per 100mL Water'
                },
                series: [{
                    data: filteredData
                },{
                    color:'red',
                    name: 'Recommended upper limit of enterococci',
                    dashStyle:'solid',
                    marker: {
                        enabled: false
                    }
                }]
            });
    });

    // show UV index and instructions
    var uv_api_url = 'https://api.openweathermap.org/data/2.5/uvi?appid=735607688818c4b88d0e04ec832208fc&';
    var beach_info_url = '/api/v1/beaches/' + spanValue;
    // get beach lat and lng
    $.get(beach_info_url, function (beach) {
        var beachLat = beach.latitude;
        var beachLng = beach.longitude;
        uv_api_url += 'lat=' + beachLat + '&lon=' + beachLng;

        // get uv data
        $.get(uv_api_url, function (uv) {
            var uv_value = uv.value;
            var uv_level = '';

            switch (true) {
                case uv_value <= 2: uv_level = 'Low'; $("#uv-warning").addClass('text-success'); break;
                case uv_value <= 5: uv_level = 'Moderate'; $("#uv-warning").addClass('text-warning'); break;
                case uv_value <= 7: uv_level = 'High'; $("#uv-warning").addClass('text-danger'); break;
                case uv_value <= 10: uv_level = 'Very High'; $("#uv-warning").addClass('text-danger'); break;
                case uv_value > 10: uv_level = 'Extreme'; $("#uv-warning").addClass('text-danger'); break;
            }


            document.getElementById("uv-warning").innerHTML = uv_value + ' (' + uv_level + ')';

        });
    });

    // show weather widget
    var weatherurl = '';
    switch (beachName) {
        case "Altona" : weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46668" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="display: block;margin: -20px 0 0 0;z-index: 1;position: relative;height: 20px;text-indent: -9999em" href="https://www.willyweather.com.au/vic/melbourne/altona.html" rel="nofollow">altona weather</a>';
            break;
        case "Brighton": weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46669" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="margin: -20px 0 0 0;position: relative;text-indent: -9999em;z-index: 1;display: block;height: 20px" href="https://www.willyweather.com.au/vic/melbourne/brighton.html" rel="nofollow">https://www.willyweather.com.au/vic/melbourne/brighton.html</a>';
            break;
        case "Elwood": weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46670" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="height: 20px;z-index: 1;display: block;text-indent: -9999em;margin: -20px 0 0 0;position: relative" href="https://www.willyweather.com.au/vic/melbourne/elwood.html" rel="nofollow">elwood VIC weather forecast</a>';
            break;
        case "Port Melbourne": weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46671" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="height: 20px;text-indent: -9999em;margin: -20px 0 0 0;display: block;z-index: 1;position: relative" href="https://www.willyweather.com.au/vic/melbourne/port-melbourne.html" rel="nofollow">WillyWeather</a>';
            break;
        case "Sandridge": weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46672" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="height: 20px;display: block;text-indent: -9999em;z-index: 1;position: relative;margin: -20px 0 0 0" href="https://www.willyweather.com.au/vic/melbourne/sandridge-beach.html" rel="nofollow">Sandridge Beach VIC forecast</a>';
            break;
        case "South Melbourne": weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46673" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="z-index: 1;display: block;margin: -20px 0 0 0;height: 20px;position: relative;text-indent: -9999em" href="https://www.willyweather.com.au/vic/melbourne/south-melbourne.html" rel="nofollow">forecast for south melbourne</a>';
            break;
        case "St Kilda": weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46674" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="text-indent: -9999em;display: block;position: relative;height: 20px;margin: -20px 0 0 0;z-index: 1" href="https://www.willyweather.com.au/vic/melbourne/st-kilda.html" rel="nofollow">local weather</a>';
            break;
        case "Williamstown": weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46675" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="height: 20px;display: block;margin: -20px 0 0 0;text-indent: -9999em;position: relative;z-index: 1" href="https://www.willyweather.com.au/vic/melbourne/williamstown.html" rel="nofollow">Weather info for Williamstown</a>';
    }
    $("#weather").append(weatherurl);

    // adjust carousel functions
    $('.carousel-control.right').click(function(){ $('.carousel').carousel('next')});
    $('.carousel-control.left').click(function(){ $('.carousel').carousel('prev')});

});