/**
 * Created by Zoe on 27/3/18.
 */
$(document).ready(function () {
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
                        name: 'Routine Result'
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
                }]
            });
    });
    var weatherurl = '';
    switch (beachName) {
        case "Altona" : weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46377" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="margin: -20px 0 0 0;display: block;position: relative;text-indent: -9999em;z-index: 1;height: 20px" href="https://www.willyweather.com.au/vic/melbourne/altona.html" rel="nofollow">altona weather forecast</a>';
            break;
        case "Brighton": weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46381" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="text-indent: -9999em;z-index: 1;display: block;position: relative;height: 20px;margin: -20px 0 0 0" href="https://www.willyweather.com.au/vic/melbourne/brighton.html" rel="nofollow">brighton weather</a>';
            break;
        case "Elwood": weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46382" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="display: block;z-index: 1;text-indent: -9999em;margin: -20px 0 0 0;position: relative;height: 20px" href="https://www.willyweather.com.au/vic/melbourne/elwood.html" rel="nofollow">The latest elwood weather</a>';
            break;
        case "Port Melbourne": weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46379" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="z-index: 1;margin: -20px 0 0 0;display: block;height: 20px;text-indent: -9999em;position: relative" href="https://www.willyweather.com.au/vic/melbourne/port-melbourne.html" rel="nofollow">port melbourne weather forecast</a>';
            break;
        case "Sandridge": weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46383" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="position: relative;height: 20px;margin: -20px 0 0 0;display: block;z-index: 1;text-indent: -9999em" href="https://www.willyweather.com.au/vic/melbourne/sandridge-beach.html" rel="nofollow">The latest sandridge beach weather</a>';
            break;
        case "South Melbourne": weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46384" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="text-indent: -9999em;height: 20px;position: relative;z-index: 1;margin: -20px 0 0 0;display: block" href="https://www.willyweather.com.au/vic/melbourne/south-melbourne.html" rel="nofollow">South Melbourne Forecast</a>';
            break;
        case "St Kilda": weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46385" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="z-index: 1;position: relative;text-indent: -9999em;margin: -20px 0 0 0;display: block;height: 20px" href="https://www.willyweather.com.au/vic/melbourne/st-kilda.html" rel="nofollow">St Kilda VIC forecast</a>';
            break;
        case "Williamstown": weatherurl = '<iframe style="display: block;" src="https://cdnres.willyweather.com.au/widget/loadView.html?id=46386" width="300" height="228" frameborder="0" scrolling="no"></iframe><a style="height: 20px;z-index: 1;margin: -20px 0 0 0;position: relative;display: block;text-indent: -9999em" href="https://www.willyweather.com.au/vic/melbourne/williamstown.html" rel="nofollow">williamstown\'s weather</a>';
    }
    $("#weather").append(weatherurl);

    $('.carousel-control.right').click(function(){ $('.carousel').carousel('next')});
    $('.carousel-control.left').click(function(){ $('.carousel').carousel('prev')});

});