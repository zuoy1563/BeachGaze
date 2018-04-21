$(document).ready(function () {
    var url = '/api/v1/sharkAtk/';
    $.get(url, function (json) {
        console.log(json);
        var caseInAu = [];
        var caseInVic = [];
        for (var i = 0; i < json.length; i++) {
            caseInAu.push(json[i].auCases);
            caseInVic.push(json[i].vicCases);
        }
        console.log(caseInAu);
        console.log(caseInVic);
        Highcharts.chart('atks', {
            yAxis: {
                title: {
                    text: 'Number of Shark Attacks'
                }
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    },
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },
            title: {
                text: 'Number of Shark Attacks Over Time'
            },
            subtitle: {
                text: 'Australia VS Victoria'
            },
            series: [{
                name: 'Cases in Australia',
                data: caseInAu
            }, {
                name: 'Cases in Victoria',
                data: caseInVic
            }]
        });
    });

    $('.carousel-control.right').click(function(){ $('.carousel').carousel('next')});
    $('.carousel-control.left').click(function(){ $('.carousel').carousel('prev')});
});