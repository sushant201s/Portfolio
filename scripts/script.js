//function to animate the count operation of an element passing the class name
function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        obj.innerHTML = numberWithSpaces(current);
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}
//return number with spaces
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

//check to animate the count only if the elements come into view
$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var rect = document.getElementsByClassName(elem)[0].getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}


function testScroll() {
    if (isScrolledIntoView("description") && !viewed) {
        viewed = true;
        animateValue("linesCode", 119800, 120000, 0.5);
        animateValue("pixels", 301783300, 301783509, 0.5);
        animateValue("coffeeCups", 1326, 1526, 0.5);
        animateValue("projectsdone", 0, 14, 0.5);
    }
}

//check to animate the count only if the elements come into view
$(window).scroll(testScrollforProgressBar);
var viewedstats = false;

function testScrollforProgressBar() {
    if (isScrolledIntoView("visibility") && !viewedstats) {
        viewedstats = true;
        // console.log("scrolled to skills");
        animateProgressBar("html", 70, 4500);
        animateProgressBar("js", 90, 500);
        animateProgressBar("es", 80, 500);
        animateProgressBar("jquery", 60, 500);
        animateProgressBar("express", 80, 500);
        animateProgressBar("node", 85, 500);
        animateProgressBar("rest", 70, 500);
        animateProgressBar("c/c++", 80, 500);
        animateProgressBar("java", 90, 500);
        animateProgressBar("sql", 80, 500);
        animateProgressBar("algo", 90, 500);
    }
}
//animate the progressbar
function animateProgressBar(id, widthToAnimate, duration) {
    var skill = document.getElementById(id);
    // console.log(widthToAnimate);
    document.getElementById(id).style.width = "0%";
    setInterval(function () {
        while (parseInt(document.getElementById(id).style.width.slice(0, 2)) < widthToAnimate)
            document.getElementById(id).style.width = (parseInt(document.getElementById(id).style.width.slice(0, 2)) + 1) + "%";
    }, 500);
}


//form actions for arrow icon click
var rightArrows = document.getElementsByClassName("fa-arrow-right");
for (var i = 0; i < rightArrows.length; i++) {
    rightArrows[i].addEventListener("click", function () {
        formAction();
    });
}
//form actions for enter button press in input field
document.getElementById("q1").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        //call the form action here
        formAction();
    }
})
document.getElementById("q2").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        //call the form action here
        formAction();
    }
})
document.getElementById("q3").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        //call the form action here
        formAction();
    }
})

var messageForMe, nameOfPerson, contactInfo;
//function to call for the form action
function formAction() {
    //move to next step after q3
    if (document.getElementById("q3") == document.getElementsByClassName("showing")[0]) {
        if (document.querySelector("#q3 input").value.trim() != "") {
            contactInfo = document.querySelector("#q3 input").value;
            //add hide class to q1 and remove active
            document.getElementById("q3").classList.remove("showing");
            document.getElementById("q3").classList.add("hide");
            //display the thanks message
            // document.getElementsByClassName("thanks-message")[0].classList.toggle("hide");
            $(".thanks-message").fadeIn();
            //hide the step counter
            document.getElementsByClassName("stepCount")[0].classList.add("hide");
            //hide the question
            document.getElementsByClassName("stepMessage")[0].classList.add("hide");
            //make sure error message is hidden
            document.getElementsByClassName("empty-field")[0].classList.add("hide");
            //hide the form progress bar
            document.getElementsByClassName("form-progress")[0].classList.add("hide");
            //call function to send email
            sendEmailForForm();
        } else {
            //display error message
            document.getElementsByClassName("empty-field")[0].classList.toggle("hide");
        }

    }
    //move to next steps for q2
    if (document.getElementById("q2") == document.getElementsByClassName("showing")[0]) {
        if (document.querySelector("#q2 input").value.trim() != "") {
            nameOfPerson = document.querySelector("#q2 input").value;
            //add hide class to q1 and remove active
            document.getElementById("q2").classList.remove("showing");
            document.getElementById("q2").classList.add("hide");
            //add class active to q2 and remove hide
            document.getElementById("q3").classList.remove("hide");
            document.getElementById("q3").classList.add("showing");
            //update the step counter
            document.getElementsByClassName("stepCount")[0].textContent = "3/3";
            //update the step message
            document.getElementsByClassName("stepMessage")[0].textContent = "Your email or phone number";
            //focus on q3
            document.querySelector("#q3 input").focus();
            document.querySelector("#q3 input").select();
            //make sure error message is hidden
            document.getElementsByClassName("empty-field")[0].classList.add("hide");
            increaseWidthOfFormProgress(2);
        } else {
            //display error message
            document.getElementsByClassName("empty-field")[0].classList.toggle("hide");
        }

    }
    //move to the next steps for q1
    if (document.getElementById("q1") == document.getElementsByClassName("showing")[0]) {
        //check if the input field is empty
        if (document.querySelector("#q1 input").value.trim() != "") {
            messageForMe = document.querySelector("#q1 input").value;
            //add hide class to q1 and remove active
            document.getElementById("q1").classList.remove("showing");
            document.getElementById("q1").classList.add("hide");
            //add class active to q2 and remove hide
            document.getElementById("q2").classList.remove("hide");
            document.getElementById("q2").classList.add("showing");

            //update the step counter
            document.getElementsByClassName("stepCount")[0].textContent = "2/3";
            //update the step message
            document.getElementsByClassName("stepMessage")[0].textContent = "Your name";

            //focus on q2
            document.querySelector("#q2 input").focus();
            document.querySelector("#q2 input").select();
            //make sure error message is hidden
            document.getElementsByClassName("empty-field")[0].classList.add("hide");
            increaseWidthOfFormProgress(1);
        } else {
            //display error message
            document.getElementsByClassName("empty-field")[0].classList.toggle("hide");
        }

    }
}

//function to send email to the form
function sendEmailForForm() {
    //code to send email to my email id
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sushant.201s@gmail.com",
        Password: "FDB4235B13BFBAA1E2E7620D7CA14137CBE2",
        To: 'sushant.201s@gmail.com',
        From: "sushant.201s@gmail.com",
        Subject: "Portfolio Query",
        Body: "Name :" + nameOfPerson + "\nContact Info " + contactInfo + "\nmessage :" + messageForMe
    }).then();
}

//functionality to scroll down when down arrow button is clicked
clickAndScroll(".fa-angle-double-down", ".about");

//functionality for navbar clicks
clickAndScroll(".about-nav", ".about");
clickAndScroll(".skills-nav", ".skills");
clickAndScroll(".contact-nav", ".coffee-invite");
clickAndScroll(".project-nav", ".projects");


//function to click on a button and navigate on some div
function clickAndScroll(clicked, scrollTo) {
    //scroll to part of page
    $(clicked).click(function () {
        //collapse the navbar if the hamburger is not collapsed
        if (clicked != ".fa-angle-double-down")
            $(".navbar-toggler").click();
        $('html,body').animate({
                scrollTop: $(scrollTo).offset().top
            },
            'slow');
    });
}

//function for animation on page load
$(window).on('load', function () {
    $('.loader').delay(2000).fadeOut();
});

//increase width of the form progressBar
function increaseWidthOfFormProgress(stepCompleted) {
    if (stepCompleted == 1) {
        //increase width to 33%
        animateProgressBarForForm(0, 20, 500);
    } else if (stepCompleted == 2) {
        //increase width to 66%
        animateProgressBarForForm(20, 40, 500);
    }
}

//animate the progressbar for the form
function animateProgressBarForForm(fromWidth, toWidth, duration) {
    var barWidth = document.getElementsByClassName("form-progress")[0].style.width;
    if (barWidth == "")
        document.getElementsByClassName("form-progress")[0].style.width = "01%";
    setInterval(function () {
        while (fromWidth < toWidth) {
            document.getElementsByClassName("form-progress")[0].style.width = (parseInt(document.getElementsByClassName("form-progress")[0].style.width.slice(0, 2)) + 1) + "%";
            ++fromWidth;
        }
    }, 100);
}