function main() {
    /* This function allows you to make the choice, and if you enter a invalid choice you have to refresh the page and try again.*/
    let choice = startGame();
    if (choice == 'library') {
        library();
        
    } else if (choice == 'gym') {
        gym();
    } else {
        alert("Invalid choice. Please refresh the page and try again.");
    }
}

function startGame() {
    /* This function welcomes you to the game, and returns your choice if you enter something invalid.*/
    let name = prompt("What is your name?");
    alert("Welcome, " + name + ", to the Haunted All Saints Hs!");
    alert("Be aware the Bell Witch haunts All Saints Hs!");
    let choice = prompt("Do you want to go into the library or the gym?");
    return choice; 
} 

function library() {
    /* This function is what happens if the player chooses the library path.*/
    alert("You head upstairs and enter the spooky library, with each step hearing the echo of your footstep.");
    let libraryPath = prompt("You see a creepy old book on a dusty table. Do you open it or leave it alone? Choose 1 for open or 2 to leave.");

    if (libraryPath == '1') {
        alert("A ghost emerges from the book and scares you to death!");
    } else if (libraryPath == "2") {
        alert("You quietly leave the library and find the exit. You survive!");
    } 
    let path = prompt("You want to (1)go back to the hallway or go to the (2) gym or (3) leave the schoo.")
        if (path =="1"){   
            AutoShopPath();
        } else if (path == "2"){
            gym();
        } else if (path =="3"){
            endGame();
        }  
}

function gym() {
    /* This function is what happens if the player chooses the gym path.*/
    alert("So you want to go to the gym...");
    let choice2 = prompt("You see someone walking in the gym, do you want to enter the gym and see who or what it is? 1 for yes and 2 for no.");

    if (choice2 == '1') {
        alert("You bravely enter the gym and find a friendly ghost!  Its luckily not the Bell With that haunts All Saints.");
    } else {
        alert("You decide it's best to leave the gym and avoid the unknown.");
    }
    let hallway = prompt("You want to (1)go back to the hallway or go to the (2)library or (3)leave the school")
        if (hallway =="1"){   
            AutoShopPath();
        } else if (hallway == "2"){
            library();
        } else if (hallway =="3"){
            endGame();
        }
    }
    
function AutoShopPath() {
    let choice3 = prompt("You hear strange noises. Do you investigate or run away?")
        if (choice3 == 'investigate') {
        alert("You discover a car trunk filled with candy!");
    } else {
        alert("You trip and fall... The ghost catches you!");
        endGame();
    }
    let path = prompt("You want to go to (1)library or go to the (2) gym ")
        if (path =="1"){   
            library();
        } else if (path == "2"){
            gym();
        } 
         
}


function endGame() {
 
    alert("Thank you for playing!")
}

main();
