document.getElementById("click").onclick = function () {
    // initialise element status
    document.getElementById("footer1").removeAttribute("style");
    document.getElementById("footer2").removeAttribute("style");

    // get options
    var quizID = 0;
    var optionsSelected = [];
    var quizName = document.getElementById("quizID").innerHTML;
    if (quizName === "Quiz 1") {
        quizID = 1;
        optionsSelected = getOptions(0);
    }
    else {
        quizID = 2;
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

        console.log(score);
        document.getElementById("footer1").style.display = "none";
        if (score > 70) {
            document.getElementById("answer").innerHTML = "Congratulations! Your score is " + score.toString() + ".";
        }
        else if (score > 50) {
            document.getElementById("answer").innerHTML = "Your score is " + score.toString() + ". Almost there!";
        }
        else {
            document.getElementById("answer").innerHTML = "Unfortunately, your score is " + score.toString() + ". You" +
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
    if (options[0] == 14) {
        score = score + 20;
    }
    if (options[1] == 24) {
        score = score + 20;
    }
    if (options[2] == 31) {
        score = score + 20;
    }
    if (options[3] == 41) {
        score = score + 20;
    }
    if (options[4] == 54) {
        score = score + 20;
    }
    return score;
}

function getFirstAidQuizScore(options) {
    var score = 0;
    if (options[0] == 61) {
        score = score + 20;
    }
    if (options[1] == 72) {
        score = score + 20;
    }
    if (options[2] == 82) {
        score = score + 20;
    }
    if (options[3] == 92) {
        score = score + 20;
    }
    if (options[4] == 101) {
        score = score + 20;
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
    var url = window.location.href + "/answer";
    window.location.replace(url);
};
