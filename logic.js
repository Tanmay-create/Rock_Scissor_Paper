let computer_score=0; // initializing count for computer score
let user_score=0;  //Initializing counting variables for user score

const choices=document.querySelectorAll(".choice"); //selecting all the nodes list of div choices
const score_of_user = document.querySelector(".user_score");//selecting user score div element
const score_of_computer = document.querySelector(".computer_score");//selecting user score div element
const message = document.querySelector(".message");//selecting user score div element

//computer choice generation(modular programming)
const computer=()=>{ //computer arrow function 
    let arr=["rock", "Paper", "Scissor"]; //list of choices for computer
    let index=Math.floor(Math.random()*3); //choosing random numbers between 0 and 2
    return arr[index];//choice among the choices array after applying random method

}
//now program to play game between computer and user choices, and defining the rules for winning and losing.(Modular programming)
const play_game=(user_choice)=>{ //play_game arrow function
    console.log("user has selected: ", user_choice);
    let computer_choice = computer();
    console.log("now, it's turn for computer choice: ", computer_choice);

    if (user_choice==computer_choice){ //condition for draw
        console.log("It's a draw!");
        message.innerText="It's a Draw"; //displaying message of draw
        message.style.marginLeft="577px"; //setting margin of meassage container from left to center it.

    } else if((user_choice==="rock" && computer_choice==="Paper") || (user_choice==="Paper" && computer_choice==="Scissor")||(user_choice==="Scissor" && computer_choice==="rock")){  //Conditions for computer winning
        console.log("Computer wins!!");
        computer_score++; // updating computer score
        console.log(computer_score);
        score_of_computer.children[0].innerText=`${computer_score}`;//setting the computer score on user interface
        message.innerText=`Computer beats you with ${computer_choice}`; //displaying the message that computer won.
       message.style.backgroundColor = "red"; //setting background-color when user loses.
        message.style.marginLeft="357px";//again setting the container center



    } else{
        console.log("user wins!!")
        user_score++; //updating user score
        console.log(user_score); 
        score_of_user.children[0].innerText=`${user_score}`;//setting the user score on user interface
        message.innerText=`User Wins with ${computer_choice}`; //displaying message that user wins
        message.style.backgroundColor = "green"; //setting background-color since user wins
        message.style.marginLeft="469px"; //again positioning the container at center
  
    }
    
}
//now program for user choice
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{ //added event listener of click type to handle it
        choice.children[0].style.boxShadow="15px 15px 10px black"; //when clicked, it will show shadow on those choices
        setTimeout(()=>{ // setting duration for shadow effect to last
        choice.children[0].style.boxShadow="none";
    }, 200);


        const user_choice=choice.getAttribute("id");//getting attribute of the choice
        console.log(`you clicked ${user_choice}`);//printing on console, the user_choice
        play_game(user_choice);//function to play game with user_choice as an argument
    })
})


