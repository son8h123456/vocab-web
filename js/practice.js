window.onload = () => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let categories;
    let chosenCategory;
    let word;
    let correctGuess = [];
    let lives;
    let counter;
    let space;
    const showLives = document.getElementById('mylives');  
    const showClue = document.getElementById('clue');

    const buttons = function () {
        myButtons = document.getElementById('buttons')
        letters = document.createElement('ul');
        for (let i = 0; i < alphabet.length; i++) {
            letters.id = "alphabet"
            list = document.createElement('li');
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }
    const selectCat = () => {
        if (chosenCategory === categories[0]) {
            catagoryName.innerHTML = "The chosen Category is animal"
        } else if (chosenCategory === categories[1]) {
            catagoryName.innerHTML = "Click hint to show question"
        } 
    }

    const result = () => {
       wordHolder = document.getElementById('hold')
       correct = document.createElement('ul')

        for (let i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word')
            const guess = document.createElement('li')
            guess.setAttribute('class', 'guess')
            if (word[i] === "-") {
                guess.innerHTML = "-"
                space = 1
            } else {
                guess.innerHTML = "_"
            }
            correctGuess.push(guess)
            wordHolder.appendChild(correct);
            correct.appendChild(guess)
        }
        

    }
    
    comments = function () {
        showLives.innerHTML = 'You have ' + lives + " lives"
        if (lives < 1) {
            showLives.innerHTML = "Game over"
            
        }

        for (var i = 0; i < correctGuess.length; i++) {
            if (counter + space === correctGuess.length) {
                showLives.innerHTML = "You win"
            }
        }

    }

 
    
    check = function () {

        list.onclick = function () {
            // console.log(this)
            let guess = (this.innerHTML)
           console.log(guess)
       
        
        this.setAttribute('class', 'active')
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                correctGuess[i].innerHTML = guess;
                counter += 1;
            }
        }

        var j = (word.indexOf(guess));
        if (j === -1) {
            lives -= 1;
            comments();
         
        } else {
            comments();
        }

    }
}


play = () => {
    categories = [
        ["dog", 'frog', 'rabbit', 'elephant', 'crocodile', 'bird', 'sheep'],
        ['a-shirt', 'a-bed', 'a-black-board', 'a-clock', 'name']
    ]
    chosenCategory = categories[Math.floor(Math.random() * categories.length)]
    console.log(chosenCategory)
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)]
    word = word.replace(/\s/g, "-")
    console.log(word)
    buttons();
    correctGuess = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    
}
play()


hint.onclick = () => {
    hints = [
        ["If I sit down I'm high; if I stand up I'm low.", "I eat insects. I live in the pond. I can hop. I'm green.", "I eat vegetables. I can run fast. I can be a pet. I've long ears.", "I've four legs. You can ride me. I've tusks. I've a long nose.", "I eat other animals. I've a big mouth. I'm green. I live in the water", 'My home is a nest. Flying is what I like to do best. My name rhymes with "word".', 'My wool can keep you cozy and warm. Even during a winter storm. My name rhymes with deep.'],
        ['What has a neck but no head?', 'What has a head and a foot but no body?', "What is black when it's clean and white when it's dirty? ", 'What has three hands but only one face?', 'What belongs only to you but it is used more by others than by yourself?']
    ]
    const categoryIndex = categories.indexOf(chosenCategory)
    const hintIndex = chosenCategory.indexOf(word)
    showClue.innerHTML = " Clue: " + hints[categoryIndex][hintIndex]
}

document.getElementById('reset').onclick = () => {
  
    correct.parentNode.removeChild(correct)
    letters.parentNode.removeChild(letters)
    showClue.innerHTML = ""
   
    play()
}



}