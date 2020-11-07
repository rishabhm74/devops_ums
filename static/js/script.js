
var initialElemets = `<div class="formTitleContainer">
Sign in
</div>
<div class="mainInputContainer">
<div class="inputContainer" id="registrationInputContainer">
    <input type="text" placeholder="Registration number" class="registrationInput" >
</div>

<div class="inputContainer passwordInputContainer" id="passwordInputContainer"  style="display: none;">
    <input type="password" placeholder="Password" class="passwordInput" >
    <img class="passwordVisibleIcon" src="/static/assets/icons/not_visible.svg" alt="">
</div>
</div>
<div class="errorContainer">

</div>
<div class="mainNextButtonContainer">
<button class="nextButton">Next</button>
</div>`;



var successElement = `<div class="successContainer">
<div class="successContainerInner">
    <div class="successGreetingContainer">
        <div class="sucessWelcomeContainer">
            Welcome
        </div>
        <div class="sucessWelcomeSubContainer">
            Manage your activities.  
            <div class="studentMallLink">
                <div>
                    Visit student mall
                </div>
                <img src="/static/assets/icons/rightArrow2.svg" alt="Visit srudent mall">
            </div>
        </div>
    </div>

    <div class="successBlockContainer">

        <div class="leftSucess">
            <div class="userImgContainer">
                <img src="/static/assets/images/rdj8.jpeg" alt="">
            </div>
            <div class="aboutUserContainer">
                <div class="username">
                    Tony Stark
                </div>
                <div class="registrationNumber">
                    11811114
                </div>
            </div>
            <div class="logOutContainer">
                <button class="logoutButton">
                    Log Out
                </button>
            </div>
        </div>

        <div class="centerSuccess">
            <div class="card">
                <div class="iconContainer dashboard">
                    <img src="/static/assets/icons/dashboard.svg" alt="Dashboard">
                    Dashboard
                </div>

                <div class="linkContainer">
                    <a href="www.google.com">
                        Visit <br> dashboard
                        <img class="rightArrowIcon" src="/static/assets/icons/rightArrowBlack.svg" alt="">
                    </a>
                </div>
            </div>
            <div class="card">
                <div class="iconContainer home">
                    <img src="/static/assets/icons/home.svg" alt="Home">
                    Home
                </div>

                <div class="linkContainer">
                    <a href="#">
                        Visit <br> home
                        <img class="rightArrowIcon" src="/static/assets/icons/rightArrowBlack.svg" alt="">
                    </a>
                </div>
            </div>

        </div>
        <div class="rightSuccess">
            <div class="card">
                <div class="iconContainer timeTable">
                    <img src="/static/assets/icons/calendar.svg" alt="Time table">
                    Time Table
                </div>

                <div class="linkContainer">
                    <a href="#">
                        View <br> time-table
                        <img class="rightArrowIcon" src="/static/assets/icons/rightArrowBlack.svg" alt="">
                    </a>
                </div>
            </div>
            <div class="card">
                <div class="iconContainer assignment">
                    <img src="/static/assets/icons/assignment.svg" alt="Assignment upload">
                    Assignment
                </div>

                <div class="linkContainer">
                    <a href="#">
                        Upload <br> assignments
                        <img class="rightArrowIcon" src="/static/assets/icons/rightArrowBlack.svg" alt="">
                    </a>
                </div>
            </div>

        </div>
    </div>
</div>
</div>
`;


$(function(){
    $('.nextButton').click(function() {
        if($('.nextButton').text() == "Next") {
            var registrationVal = $('.registrationInput').val();
            if(registrationVal.length > 0) {
                if(registrationVal == "11811114") {
                    $(".errorContainer").text("");
                    $('#registrationInputContainer').css({"display" : "none"})
                    $('#passwordInputContainer').css({"display" : "flex"})
                    
                    $('.nextButton').text("Sign in");
                } else {
                    $(".errorContainer").text("Looks like this registration number does not exist");
                }
            } 

            if(registrationVal.length == 0) {
                $(".errorContainer").text("Please enter a valid registration number");
            }
            
        } 
        if($('.nextButton').text() == "Sign in") {
            var passInVal = $('.passwordInput').val();
            if(passInVal.length > 0) {
                if(passInVal == "qwerty") {
                    $(".mainFormBoxContainer").empty();
                    $(".mainFormBoxContainer").addClass('mainFormBoxContainerLoginSuc');
                    $(".mainFormBoxContainer").prepend(successElement);
                    
                    setTimeout(function(){
                        $('.successContainer').css({"display" : "block"});
                    }, 1000)

                }else {
                    $(".errorContainer").text("Invalid password");
                }
            }

            
        }
    })
})


$(function() {
    $('.passwordVisibleIcon').click(function() {
        if($(this).attr('src') == "/static/assets/icons/not_visible.svg") {
            $(this).attr("src", "/static/assets/icons/visible.svg");
            $('.passwordInput').attr("type", "text");
        } else {
            $(this).attr("src", "/static/assets/icons/not_visible.svg");
            $('.passwordInput').attr("type", "password");
        }
    })
})



$(function() {
    $(".inputContainer input").focus(function() {
        $(".inputContainer").css({"border-bottom" : "0.15rem solid #ffa033"})
    })
})

$(function() {
    $(".inputContainer input").focusout(function() {
        $(".inputContainer").css({"border-bottom" : "0.15rem solid #eee"})
    })
})


$(function(){
    $('.logoutButton').click(function() {
        window.alert("click")
    })
})