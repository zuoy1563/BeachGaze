window.allData = [];

$(document).ready(function () {

    /*Draw the overall bar chart*/
    Highcharts.chart('drownBar1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Fatal and Non-fatal Drowning Incidents in Victoria'
        },
        subtitle: {
            text: 'From 2010 to 2014'
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Incidents'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Non-fatal',
            data: [57,68,70,70,74]

        }, {
            name: 'Fatal',
            data: [19,22,24,28,23]

        }]
    });

    /*Draw the location bar chart*/
    Highcharts.chart('drownBar2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Fatal and Non-fatal Drowning Incidents by Location in Victoria'
        },
        subtitle: {
            text: 'From 2002 to 2014'
        },
        xAxis: {
            categories: ['Swimming Pool', 'Natural Water', 'Bathtub', 'Other or Unspecified']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentages of Incidents (%)'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'Non-fatal',
            data: [279, 238, 77, 282]
        }, {
            name: 'Fatal',
            data: [50, 242, 28, 16]
        }]
    });

    // Edit checkbox style
    $('#checkbox').css('margin-top', '');

    var melanomaUrl = '/api/v1/melanoma/';
    $.get(melanomaUrl, function (melanomaData) {
        window.allData = melanomaData;
        drawMelanomaDiagram(getOverallData(window.allData), "Overall Condition from 2005 to 2014");
    });

});

/*
document.getElementById("gender").onchange = function () {
    console.log(this.value);
    if (this.value === 'Male') {
        drawMelanomaDiagram(groupMaleDataByGender(window.allData, 'Male'));
    }
    else {
        drawMelanomaDiagram(groupMaleDataByGender(window.allData, 'Female'));
    }
};
*/

document.getElementById("year").onchange = function () {
    console.log(this.value);
    if (this.value == 1) {
        drawMelanomaDiagram(getOverallData(window.allData), "Overall Condition from 2005 to 2014");
    }
    else {
        drawMelanomaDiagram(getDataByYear(window.allData, this.value), "in " + this.value);
    }
};

function getDataByYear(melanomaData, yearSelected) {
    var states = ['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia',
                    'Tasmania', 'Australian Capital Territory', 'Northen Territory'];

    var filteredData = [];
    for (var i = 0; i < states.length; i++) {
        var stateCaseCount = 0;
        for (var j = 0; j < melanomaData.length; j++) {
            if (melanomaData[j].state === states[i] && melanomaData[j].year == yearSelected) {
                stateCaseCount += melanomaData[j].numberOfNewCases;
            }
        }
        filteredData.push([states[i], stateCaseCount]);
    }
    return filteredData;
}

function getOverallData(melanomaData) {
    var states = ['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia',
        'Tasmania', 'Australian Capital Territory', 'Northen Territory'];

    var filteredData = [];
    for (var i = 0; i < states.length; i++) {
        var stateCaseCount = 0;
        for (var j = 0; j < melanomaData.length; j++) {
            if (melanomaData[j].state === states[i]) {
                stateCaseCount += melanomaData[j].numberOfNewCases;
            }
        }
        filteredData.push(stateCaseCount);
    }
    return filteredData;
}

/*
function groupMaleDataByGender(melanomaData, genderSelected) {
    var filteredData = [];
    var currentState = '';
    var status = 0;
    for (var i = 0; i < melanomaData.length; i++) {
        if (melanomaData[i].state !== currentState) {
            currentState = melanomaData[i].state;
            status = 1; //should insert a data cell
        }
        else {
            status = 0; // should append number to the last cell
        }
        if (melanomaData[i].gender === genderSelected) {
            if (status === 1) {
                filteredData.push(melanomaData[i].state, melanomaData[i].numberOfNewCases)
            }
            else {
                filteredData[-1][1].push(melanomaData[i].numberOfNewCases)
            }
        }
    }
    console.log(filteredData);
    return filteredData;
}
*/

/*Draw Melanoma Diagram*/
function drawMelanomaDiagram(filteredData, year) {
    var states = ['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia',
        'Tasmania', 'Australian Capital Territory', 'Northen Territory'];
    console.log(filteredData);
    Highcharts.chart('cancerBar', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Number of New Cases of Melanoma'
        },
        subtitle: {
            text: year
        },
        xAxis: {
            categories: states
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Incidents'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Melanoma Incidents',
            data: filteredData
        }]
    });
}