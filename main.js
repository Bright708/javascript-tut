let userPrompt=confirm("Do you want to play rock,paper and scissors?");
if(userPrompt){
    let useralert=prompt("Chose rock, paper or scissors");
    if(useralert){ let userChoice=useralert.trim().toLowerCase();
    if(userChoice=="rock"||userChoice=="paper"||userChoice=="scissors"){
       
        alert("You chose "+userChoice);
    let computerChoice=Math.floor(Math.random()*3 +1);
    computer=computerChoice==1?"rock":computerChoice==2?"paper":"scissors"; 
    alert("Computer chose "+computer);
    if(userChoice==computer){
        alert("It's a tie");}
        else if(userChoice=="rock" &&computer=="scissors" ||userChoice=="rock" &&computer=="scissors"||userChoice=="rock" &&computer=="scissors"){
            alert("You win");
        }else{
            alert("Computer wins")
        }
    let playAgain=confirm("Do you want to play again?");
    if(playAgain){
        location.reload();
    }
    }else{
        alert("Invalid choice");
    }
}else{
    alert("Invalid choice");}

}else{
    alert("Then maybe another time");

}