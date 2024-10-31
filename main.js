function main() {
    
    let choice = startGame();
    if (choice == '1') {
        library();
        
    } else if (choice == '2') {
        gym();
    } else {
        alert("Invalid choice. Please refresh the page and try again.");
    }
    endGame();
}

function startGame() {
    let name = prompt("What is your name?");
    alert("Welcome, " + name + ", to the Haunted All Saints Hs!");
    alert("Be aware the Bell Witch haunts All Saints Hs!");
    let choice = prompt("Do you want to go into the library or the gym?  Choose 1 for Library, Choose 2 for the gym");
    return choice; 
} 

function library() {
    alert("You head upstairs and enter the spooky library, with each step hearing the echo of your footstep.");
    let libraryPath = prompt("You see a creepy old book on a dusty table. Do you open it or leave it alone? Choose 'open' or 'leave'.");

    if (libraryPath() === 'open') {
        alert("A ghost emerges from the book and scares you to death!");
    } else {
        alert("You quietly leave the library and find the exit. You survive!");
    }
}

function gym() {
    alert("So you want to go to the gym...");
    let choice2 = prompt("You see someone walking in the gym, do you want to enter the gym and see who or what it is? 1 for yes and 2 for no.");

    if (choice2 == '1') {
        alert("You bravely enter the gym and find a friendly ghost!  Its luckily not the Bell Witch that haunts All Saints.");
    } else {
        alert("You decide it's best to leave the gym and avoid the unknown.");
    }
    let hallway = ("You leave the gym do you want go back or ")
    AutoShopPath();
function AutoShopPath() {
    let choice3 = prompt ("You hear strange noises. Do you investigate or run away?")
    if (choice3 == 'investigate') {
        alert("You discover a car trunk filled with candy!");
    } else {
        alert("You trip and fall... The ghost catches you!");
    }
    
}
function endGame(name) {
    alert("Thank you for playing, "+name+"!")
}
main();
