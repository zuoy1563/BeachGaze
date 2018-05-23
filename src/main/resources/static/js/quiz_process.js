window.dangerAns = [14, 24, 31, 41, 54];
window.faAns = [61, 72, 82, 92, 101];

document.getElementById("click").onclick = function () {
    // initialise element status
    document.getElementById("footer1").removeAttribute("style");
    document.getElementById("footer2").removeAttribute("style");

    // get options
    var optionsSelected = [];
    var quizName = document.getElementById("quizID").innerHTML;
    if (quizName === "Quiz 1") {
        window.quizID = 1;
        optionsSelected = getOptions(0);
    }
    else {
        window.quizID = 2;
        optionsSelected = getOptions(5);
    }


    // check if all the questions has been answered
    if (optionsSelected.length !== 5) {
        document.getElementById("footer2").style.display = "none";
        document.getElementById("answer").innerHTML = "Please answer all the questions!";
    }
    else {
        // calculate score
        var score = 0;
        if (quizID == 1) {
            score = getDangerQuizScore(optionsSelected);
        }
        else {
            score = getFirstAidQuizScore(optionsSelected);
        }

        document.getElementById("footer1").style.display = "none";
        if (score > 70) {
            document.getElementById("answer").innerHTML = "Congratulations! Your score is " + score.toString() + ".";
        }
        else if (score > 50) {
            document.getElementById("answer").innerHTML = "Your score is " + score.toString() + ". Almost there!";
        }
        else {
            document.getElementById("answer").innerHTML = "Unfortunately, your score is " + score.toString() + ". You " +
                "may want to take some time to look at the Safety Tips column to learn more.";
        }
    }
};

function getOptions(startPoint) {
    var answers = [];
    // get the selected option
    for (var i = startPoint; i < startPoint + 5; i++) {
        if (document.querySelector('input[name="group' + (i + 1) +
                '"]:checked') !== null)
            answers.push(document.querySelector('input[name="group' + (i + 1) +
                '"]:checked').value);
    }
    return answers;

}

function getDangerQuizScore(options) {
    var score = 0;
    for (var i = 0; i < options.length; i++) {
        if (options[i] == dangerAns[i]) {
            score = score + 20;
        }
    }
    return score;
}


function getFirstAidQuizScore(options) {
    var score = 0;
    for (var i = 0; i < options.length; i++) {
        if (options[i] == faAns[i]) {
            score = score + 20;
        }
    }
    return score;
}

// redirect to other pages if click button
document.getElementById("back").onclick = function () {
    window.location.replace("/quizzes");
};

document.getElementById("redo").onclick = function () {
    window.location.reload();
};

document.getElementById("ans").onclick = function () {
    //var url = window.location.href + "/answer";
    //window.location.replace(url);

    $('.container').each(function () {
        $(this).find('input').attr("disabled", true);
    });

    // highlight selected answer
    $('input[type="radio"]:checked').each(function () {
        var label = $(this).closest("label");
        //text = $(label).text();
        //window.alert(text);
        label.addClass("quiz-text-bg-danger");
    });

    // highlight correct answer
    var quizAns;
    if (quizID == 1) {
        quizAns = dangerAns;
    }
    else {
        quizAns = faAns;
    }
    $('input[type="radio"]').each(function () {
        var elementID = $(this).val();
        for (var i = 0; i < quizAns.length; i++) {
            if (elementID == quizAns[i]) {
                var label = $(this).closest("label");
                if (label.hasClass("quiz-text-bg-danger")) {
                    label.removeClass("quiz-text-bg-danger");
                }
                label.addClass("quiz-text-bg-success");
            }
        }
    });

    $('#click').css("display", "none");
    $('#again').css("display", "");

};
