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

    let scissor_left = "Scisssor"

    player_area_1.src = "Images/Scissor_Left.png"

    return scissor_left

    
}


const rock_left_control = () => {

    let rock_left = "Rock"


    player_area_1.src = "Images/Rock_Left.png"

    console.log("Rock Player 1 Control")

    return rock_left
}



const paper_left_control = () => {

    console.log("Paper Player 1 Control")

    player_area_1.src = "Images/Paper_Left.png"

    let paper_left = "Paper"

    return paper_left
}


scissor_left.addEventListener("click", scissor_left_control)
rock_left.addEventListener("click", rock_left_control)
paper_left.addEventListener("click", paper_left_control)



const scissor_right_control = () => {

    let scissor_right = "Scissor"

    console.log("Scissor Player 2 Control")

    player_area_2.src = "Images/Scissor_Right.png"

    return scissor_right
}


const rock_right_control = () => {

    let rock_right = "Rock"

    console.log("Rock Player 2 Control")

    player_area_2.src = "Images/Rock_Right.png"

    return rock_right
}



const paper_right_control = () => {

    console.log("Paper Player 2 Control")

    let paper_right = "Paper"


    player_area_2.src = "Images/Paper_Right.png"

    return paper_right
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






const start_play_game = () => {

    console.log("Game Started")
    start_status.textContent = "Game Started.!!"

    //matching_player_answers()
    
}

let random_choice_array = ["Rock", "Paper", "Scissor"]


const matching_player_answers = () => {


    console.log("Matching Answers..")

    if(paper_left_control() == paper_right_control()){
        console.log("Match Draw")
    }else if(paper_left_control() != paper_right_control()){
        console.log("Player 2 Won")
    }


    //let random_index_value  = Math.floor(Math.random() * 3)


    //console.log(random_index_value)

    


}

//make two mods (algorithms) one for online users one for normal 2 players
//in normal 2 player mode we need to implement the random patterns like if first player move scissor we need to take another rock or paper




play_btn.addEventListener("click", start_play_game)







