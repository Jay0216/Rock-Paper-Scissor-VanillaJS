console.log("Vanilla Javascript Rock Paper Scissor Game Console")


let text = document.getElementById("text")

let scissor_left = document.getElementById("scissor_left")
let rock_left = document.getElementById("rock_left")
let paper_left = document.getElementById("paper_left")


let scissor_right = document.getElementById("scissor_right")
let rock_right = document.getElementById("rock_right")
let paper_right = document.getElementById("paper_right")


let player_area_1 = document.getElementById("game-area-player-1")
let player_area_2 = document.getElementById("game-area-player-2")


let start_status = document.querySelector(".start-status")
let result_area = document.getElementById("result-area")
let play_btn = document.getElementById("play")

//add images to change the hand type




const scissor_left_control = () => {


    console.log("Scissor Player 1 Control")

    let scissor_left_value = "Images/Scissor_Left.png"

    //player_area_1.src = "Images/Scissor_Left.png"

    player_area_1.value = scissor_left_value

    scissor_left.style.backgroundColor = "green"

    paper_left.removeEventListener("click", paper_left_control)
    rock_left.removeEventListener("click", rock_left_control)


    

    
}


const rock_left_control = () => {

    let rock_left_value = "Images/Rock_Left.png"


    //player_area_1.src = ""

    console.log("Rock Player 1 Control")

    player_area_1.value = rock_left_value

    rock_left.style.backgroundColor = "green"

    paper_left.removeEventListener("click", paper_left_control)
    scissor_left.removeEventListener("click", scissor_left_control)

    

}



const paper_left_control = () => {

    console.log("Paper Player 1 Control")

    //player_area_1.src = "Images/Paper_Left.png"

    let paper_left_value = "Images/Paper_Left.png"

    player_area_1.value = paper_left_value


    paper_left.style.backgroundColor = "green"

    rock_left.removeEventListener("click", rock_left_control)
    scissor_left.removeEventListener("click", scissor_left_control)

    

}


scissor_left.addEventListener("click", scissor_left_control)
rock_left.addEventListener("click", rock_left_control)
paper_left.addEventListener("click", paper_left_control)



const scissor_right_control = () => {

    let scissor_right_value = "Images/Scissor_Right.png"

    console.log("Scissor Player 2 Control")

    //player_area_2.src = ""

    player_area_2.value = scissor_right_value

    scissor_right.style.backgroundColor = "green"

    rock_right.removeEventListener("click", rock_right_control)
    paper_right.removeEventListener("click", paper_right_control)

    

}


const rock_right_control = () => {

    let rock_right_value = "Images/Rock_Right.png"

    console.log("Rock Player 2 Control")

    //player_area_2.src = ""

    player_area_2.value = rock_right_value

    rock_right.style.backgroundColor = "green"

    paper_right.removeEventListener("click", paper_right_control)
    scissor_right.removeEventListener("click", scissor_right_control)

    

}



const paper_right_control = () => {

    console.log("Paper Player 2 Control")

    let paper_right_value = "Images/Paper_Right.png"


    //player_area_2.src = ""


    player_area_2.value = paper_right_value

    paper_right.style.backgroundColor = "green"

    scissor_right.removeEventListener("click", scissor_right_control)
    rock_right.removeEventListener("click", rock_right_control)

    


    
}

scissor_right.addEventListener("click", scissor_right_control)
rock_right.addEventListener("click", rock_right_control)
paper_right.addEventListener("click", paper_right_control)

const hand_change = () => {

    console.log("Hand Change")
}







const scores_counting = () => {

    console.log("Scores Counting")
}


const game_play = () => {

    console.log("Game Playing")
}



let check = document.createElement("button")
check.textContent = "Check"
check.className = "check"

const start_play_game = () => {

    console.log("Game Started")
    start_status.textContent = "Now Start Moving..!"

    result_area.removeChild(play_btn)
    result_area.appendChild(check)
    
}




const checking_answers = () => {

    console.log("Checking")

    const shaking = [

        {transform: "rotate(-6deg)"},
        {transform: "rotate(5deg)"},
        {transform: "rotate(-6deg)"},
        {transform: "rotate(5deg)"},
    ]

    const timing = {
        duration: 1000,
    }


    player_area_1.animate(shaking, timing)

    player_area_2.animate(shaking, timing)

    
    setTimeout(() => {

        player_area_1.src = player_area_1.value
        player_area_2.src = player_area_2.value

        matching_player_answers()
    }, 1000)

    


    


    
    


    
    

    //shake player areas elements
}

check.addEventListener("click", checking_answers)





//let random_choice_array = ["Rock", "Paper", "Scissor"]



const matching_player_answers = () => {


    console.log("Matching Answers..")

    if(player_area_1.value == "Images/Paper_Left.png" && player_area_2.value == "Images/Scissor_Right.png"){
        console.log("Player 2 Won")

        start_status.textContent = "Player 2 Won"

    }
    else if(player_area_1.value == "Images/Scissor_Left.png" && player_area_2.value == "Images/Paper_Right.png"){
        console.log("Player 1 Won")

        start_status.textContent = "Player 1 Won"

    }else if(player_area_1.value == "Images/Paper_Left.png" && player_area_2.value == "Images/Rock_Right.png"){
        console.log("Player 1 Won")

        start_status.textContent = "Player 1 Won"


    }else if(player_area_1.value == "Images/Rock_Left.png" && player_area_2.value == "Images/Paper_Right.png"){
        console.log("Player 2 Won")

        start_status.textContent = "Player 2 Won"
    }else if(player_area_1.value == "Images/Rock_Left.png" && player_area_2.value == "Images/Scissor_Right.png"){
        console.log("Player 1 Won")

        start_status.textContent = "Player 1 Won"
    }else if(player_area_1.value == "Images/Scissor_Left.png" && player_area_2.value == "Images/Rock_Right.png"){
        console.log("Player 2 Won")

        start_status.textContent = "Player 2 Won"
    }else if(player_area_1.value == "Images/Rock_Left.png" && player_area_2.value == "Images/Rock_Right.png"){

        console.log("Match Draw")

        start_status.textContent = "Match Draw"

    }else if(player_area_1.value == "Images/Scissor_Left.png" && player_area_2.value == "Images/Scissor_Right.png"){

        console.log("Match Draw")

        start_status.textContent = "Match Draw"

    }else if(player_area_1.value == "Images/Paper_Left.png" && player_area_2.value == "Images/Paper_Right.png"){

        console.log("Match Draw")

        start_status.textContent = "Match Draw"

    }
    
    else{
        console.log("Moving")
    }


    //let random_index_value  = Math.floor(Math.random() * 3)


    //console.log(random_index_value)

    


}

//make two mods (algorithms) one for online users one for normal 2 players
//in normal 2 player mode we need to implement the random patterns like if first player move scissor we need to take another rock or paper


//first select the controller by player 1 and player 2
//then set that and check answers are matching and when selecting controller focus on that element and set a color for that
//and add little animation while checking answers.

// and also if one element is clicked other elements are freezed

play_btn.addEventListener("click", start_play_game)







