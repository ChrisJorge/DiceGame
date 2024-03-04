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
    
}