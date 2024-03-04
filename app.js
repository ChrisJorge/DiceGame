var wins1 = 0
var wins2 = 0
function reset()
{
   wins1 = 0;
   document.querySelectorAll('p')[0].textContent = 'Player 1 wins: ' + wins1;
   wins2 = 0;
   document.querySelectorAll('p')[1].textContent = 'Player 2 wins: ' + wins2;
   return wins1, wins2;

}

function roll(){
    let dice1 = Math.floor((Math.random() * 6) + 1)
    let dice2 = Math.floor((Math.random() * 6) + 1)
    
    switch (dice1)
    {
        case 1:
            document.getElementsByTagName('img')[0].setAttribute('src', "./images/dice1.png");
            break;

        case 2:
            document.getElementsByTagName('img')[0].setAttribute('src', "./images/dice2.png");
            break;
        
        case 3:
            document.getElementsByTagName('img')[0].setAttribute('src', "./images/dice3.png");
            break;
        
        case 4:
            document.getElementsByTagName('img')[0].setAttribute('src', "./images/dice4.png");
            break; 
        
        case 5:
            document.getElementsByTagName('img')[0].setAttribute('src', "./images/dice5.png");
            break;

        case 6:
            document.getElementsByTagName('img')[0].setAttribute('src', "./images/dice6.png")
            break; 

    }

    switch (dice2)
    {
        case 1:
            document.getElementsByTagName('img')[1].setAttribute('src', "./images/dice1.png");
            break;

        case 2:
            document.getElementsByTagName('img')[1].setAttribute('src', "./images/dice2.png");
            break;
        
        case 3:
            document.getElementsByTagName('img')[1].setAttribute('src', "./images/dice3.png");
            break;
        
        case 4:
            document.getElementsByTagName('img')[1].setAttribute('src', "./images/dice4.png");
            break; 
        
        case 5:
            document.getElementsByTagName('img')[1].setAttribute('src', "./images/dice5.png");
            break;

        case 6:
            document.getElementsByTagName('img')[1].setAttribute('src', "./images/dice6.png")
            break; 

    }
    if (dice1 > dice2)
{
    console.log('One = ' + dice1 + 'Two = ' + dice2)
    document.querySelector('h1').textContent = 'Player One Wins!!';
    wins1 ++;
    document.querySelector(".counter p").textContent = 'Player 1 wins: ' + wins1;

}
else if (dice2 > dice1)
{
    console.log('One = ' + dice1 + 'Two = ' + 2)
    document.querySelector('h1').textContent = 'Player Two Wins!!';
    wins2 ++;
    document.querySelectorAll('p')[1].textContent = 'Player 2 wins: ' + wins2;
}
else
{
    console.log('One = ' + dice1 + 'Two = ' + dice2)
    document.querySelector('h1').textContent = 'Tie!!';
}
}
