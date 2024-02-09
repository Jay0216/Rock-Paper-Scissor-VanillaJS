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

let play_btn = document.getElementById("play")

//add images to change the hand type




const scissor_left_control = () => {

    console.log("Scissor Player 1 Control")

    
}


const rock_left_control = () => {

    console.log("Rock Player 1 Control")
}



const paper_left_control = () => {

    console.log("Paper Player 1 Control")
}


scissor_left.addEventListener("click", scissor_left_control)
rock_left.addEventListener("click", rock_left_control)
paper_left.addEventListener("click", paper_left_control)



const scissor_right_control = () => {

    console.log("Scissor Player 2 Control")
}


const rock_right_control = () => {

    console.log("Rock Player 2 Control")
}



const paper_right_control = () => {

    console.log("Paper Player 2 Control")
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


const matching_player_answers = () => {


    console.log("Matching Answers..")
}



const play_game = () => {

    console.log("Game Started")
    start_status.textContent = "Game Started.!!"

    
}


play_btn.addEventListener("click", play_game)







