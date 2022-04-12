const view = {};
view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case "mainPage":
      document.querySelector(".main").innerHTML = compoment.mainPage;
      document.getElementById("register-btn").addEventListener("click", () => {
        view.setActiveScreen("registerPage");
      });
      document.getElementById("login-btn").addEventListener("click", () => {
        view.setActiveScreen("loginPage");
      });
      const menuIcon = document.querySelector(".hamburger-menu");
      const navs = document.querySelector(".navs");
      const navbar = document.querySelector(".navbar");
      menuIcon.addEventListener("click", () => {
        navs.classList.toggle("change");
        navbar.classList.toggle("change");
      });
      break;
    case "registerPage":
      document.querySelector(".main").innerHTML = compoment.registerPage;
      document
        .getElementById("redirect-login")
        .addEventListener("click", () => {
          view.setActiveScreen("loginPage");
        });
      // document.getElementById("home-back").addEventListener("click", () => {
      //   view.setActiveScreen("mainPage");
      // });
      const registerForm = document.getElementById("register-form");
      registerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const dataRegister = {
          username: registerForm.username.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        };
        controller.register(dataRegister);

        registerForm.username.addEventListener('click', () => {
          registerForm.username.classList.remove('shakeErr')
            document.querySelector('#username-error').style.visibility  = "hidden";
        })
        registerForm.email.addEventListener('click', () => {
          registerForm.email.classList.remove('shakeErr')
          document.querySelector('#email-error').style.visibility  = "hidden";
        })
        registerForm.password.addEventListener('click', () => {
          registerForm.password.classList.remove('shakeErr')
            document.querySelector('#password-error').style.visibility  = "hidden";
        })
        registerForm.confirmPassword.addEventListener('click', () => {
          registerForm.confirmPassword.classList.remove('shakeErr')
          document.querySelector('#cf-password-error').style.visibility  = "hidden";
        })
      
      });
      break;
    case "loginPage":
      document.querySelector(".main").innerHTML = compoment.loginPage;
      document
        .getElementById("redirect-register")
        .addEventListener("click", () => {
          view.setActiveScreen("registerPage");
        });
      // document.getElementById("home-back").addEventListener("click", () => {
      //   view.setActiveScreen("mainPage");
      // });
      const loginForm = document.getElementById("login-form");
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const dataRegister = {
          email: loginForm.email.value,
          password: loginForm.password.value,
        };
        controller.login(dataRegister);

        // console.log(loginForm.password.value)
        loginForm.email.addEventListener('click', () => {
          loginForm.email.classList.remove('shakeErr')
            document.querySelector('#email-error').style.visibility  = "hidden";
        })
        loginForm.password.addEventListener('click', () => {
          loginForm.password.classList.remove('shakeErr')
          document.querySelector('#password-error').style.visibility  = "hidden";
        })
      });
     


      break;
    case "loginSuccess":
      document.querySelector('.main').innerHTML =compoment.loginSuccess;
      

const data = [
  {
     word: 'Bear /bɛr/',
     meanning: 'Con gấu',
     ex: 'Beware of the bear when camping in the forest.',
     exMean: 'Hãy cẩn thận với loài gấu khi cắm trại trong rừng',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bea/bear_/bear__us_1.mp3',
     category: 'nature',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2018/12/kodiak-brown-bear-adult-portrait-wildlife-158109-400x267.jpeg',
  },
  {
     word: 'Bird /bɜrd/',
     meanning: 'Con chim',
     ex: 'Some bird started to fly to the south as winter is coming.',
     exMean: 'Một số loài chim bắt đầu bay về phương Nam khi mùa đông sắp tới',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bir/bird_/bird__us_1.mp3',
     category: 'nature',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2018/12/pexels-photo-326900-400x267.jpeg',
  },
  {
     word: 'Goat /goʊt/',
     meanning: 'Con dê',
     ex: 'Beware of the bear when camping in the forest.',
     exMean: 'Hãy cẩn thận với loài gấu khi cắm trại trong rừng',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/g/goa/goat_/goat__us_1.mp3',
     category: 'nature',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2018/12/goat-lamb-little-grass-144240-400x283.jpeg',
  },
  {
     word: 'Rabbit /ˈræbət/',
     meanning: 'Con thỏ',
     ex: 'Rabbits are the symbol of Easter.',
     exMean: 'Thỏ là biểu tượng của Lễ Phục sinh',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/r/rab/rabbi/rabbit__us_1.mp3',
     category: 'nature',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2018/12/pexels-photo-247373-400x267.jpeg',
  },
  {
     word: 'Sheep  /ʃip/',
     meanning: 'Con cừu',
     ex: 'She travels far to the other village to buy a good sheep.',
     exMean: 'Cô ấy đi sang tận làng khác để mua một con cừu tốt',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/she/sheep/sheep__us_1.mp3',
     category: 'nature',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2018/12/sheep-white-lambs-goats-59863-400x300.jpeg',
  },
  {
     word: 'Monkey /ˈmʌŋki/',
     meanning: 'Con khỉ',
     ex: 'Monkey climbs trees very fast.',
     exMean: 'Khỉ trèo cây rất nhanh',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/m/mon/monke/monkey__us_1.mp3',
     category: 'nature',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2018/12/pexels-photo-321552-400x266.jpeg',
  },
  {
     word: 'Insect  /ˈɪnˌsɛkt/',
     meanning: 'Côn trùng',
     ex: 'In many places in the world, insects are used as a type of food. ',
     exMean: 'Ở nhiều nơi trên thế giới, côn trùng được dùng như một loại thức ăn',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/i/ins/insec/insect__us_1.mp3',
     category: 'nature',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2018/12/ladybug-beetle-coccinellidae-insect-121472-400x267.jpeg',
  },
  {
     word: 'Attractive /əˈtræktɪv/',
     meanning: 'Quyến rũ, hấp dẫn',
     ex: 'Sarah is such an attractive woman. Many guys want to go out on a date with her.',
     exMean: 'Sarah đúng là một người phụ nữ quyến rũ. Rất nhiều chàng trai muốn được hẹn hò với cô ấy',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/a/att/attra/attractive__us_2.mp3',
     category: 'human',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2019/01/attractive-600x400.jpeg',
  },
  {
     word: 'Beautiful  /ˈbjutəfəl/',
     meanning: 'Đẹp, xinh đẹp',
     ex: 'A beautiful girl usually make good first impression with other people.',
     exMean: 'Một cô gái xinh đẹp thường tạo ấn tượng đầu tốt với những người khác',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bea/beaut/beautiful__us_1.mp3',
     category: 'human',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2019/01/beautiful-600x400.jpeg',
  },
  {
     word: 'Charming  /ˈʧɑrmɪŋ/',
     meanning: ' Thu hút, quyến rũ',
     ex: 'Many little girls believe in fairy tales and that some day prince charming will come for them.',
     exMean: 'Rất nhiều bé gái tin vào truyện cổ tích và tin rằng một ngày nào đó, hoàng tử bạch mã sẽ đến tìm chúng',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cha/charm/charming__us_1.mp3',
     category: 'human',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2019/01/charming-400x236.jpg',
  },
  {
     word: 'Fat /fæt/',
     meanning: 'Béo, thừa cân',
     ex: 'Modern lifestyles with fast food trend make more people become fat.',
     exMean: 'Lối sống hiện đại cùng trào lưu đồ ăn nhanh làm nhiều người trở nên thừa cân hơn',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fat/fat__/fat__us_1.mp3',
     category: 'human',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2019/01/fat.jpg',
  },
  {
     word: 'Handsome  /ˈhænsəm/',
     meanning: 'Đẹp trai',
     ex: ' Women in different countries have different ideas on what is considered a handsome man. ',
     exMean: 'Phụ nữ ở các nước khác nhau có những ý kiến khác nhau về việc như thế nào thì được coi là một người đàn ông đẹp trai',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/h/han/hands/handsome__us_1.mp3',
     category: 'human',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2019/01/handsome-600x400.jpeg',
  },
  {
     word: 'Muscular  /ˈmʌskjələr/',
     meanning: 'Cơ bắp, lực lưỡng',
     ex: 'After 1 years of exercising continuously, Alex has turned into a muscular guy.',
     exMean: 'Sau một năm tập luyện không ngừng, Alex đã trở thành một chàng trai lực lưỡng',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/m/mus/muscu/muscular__us_1.mp3',
     category: 'human',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2019/01/muscular-560x420.jpeg',
  },
  {
     word: 'Employ   /ɛmˈplɔɪ/',
     meanning: 'Tuyển dụng',
     ex: 'He employs her as his secretary.',
     exMean: 'Anh ấy tuyển dụng cô ấy làm thư kí',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/e/emp/emplo/employ__us_4.mp3',
     category: 'work',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2019/02/employ-600x400.jpg',
  },
  {
     word: 'Partner   /ˈpɑrtnər/',
     meanning: 'Cơ bắp, lực lưỡng',
     ex: 'We are having meeting with an important partner at 3pm.',
     exMean: 'Chúng ta sẽ có cuộc họp với một đối tác quan trọng vào 3 giờ chiều',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/par/partn/partner__us_1.mp3',
     category: 'work',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2019/02/partner.jpg',
  },
  {
     word: 'Revenue   /ˈrɛvəˌnu/',
     meanning: 'Doanh thu',
     ex: 'Could you help me analyze the statistics on our revenue this month? ',
     exMean: 'Cậu có thể giúp mình phân tích các số liệu về doanh thu tháng này của công ty chúng ta được không?',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/r/rev/reven/revenue__us_1.mp3',
     category: 'work',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2019/02/revenue.jpg',
  },
  {
     word: 'Judge   /ʤʌʤ/',
     meanning: 'Thẩm phán',
     ex: 'The judge announced that he was innocent.',
     exMean: 'Thẩm phán tuyên bố rằng anh ấy vô tội',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/j/jud/judge/judge__us_1.mp3',
     category: 'work',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2019/02/judge.jpg',
  },
  {
     word: 'Plumber   /ˈplʌmər/',
     meanning: 'Thợ sửa ống nước',
     ex: 'The sink is broken. Please call the plumber.',
     exMean: 'Bồn rửa hỏng rồi. Làm ơn gọi thợ sửa ống nước đi',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/plu/plumb/plumber__us_1.mp3',
     category: 'work',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2019/02/plumber.jpg',
  },
  {
     word: 'Journalist   /ˈʤɜrnələst/',
     meanning: ' Phóng viên',
     ex: 'A journalist is the one who find and reveal the truths to the world.',
     exMean: 'Phóng viên là người đi tìm và tiết lộ sự thật cho thế giới',
     srcAudio: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/j/jou/journ/journalist__us_1.mp3',
     category: 'work',
     srcImg: 'https://ejoy-english.com/blog/wp-content/uploads/2019/02/journalist-600x400.jpg',
  },

]

  const libvocab = document.querySelector('.libvocabb')
  

  for (let i = 0; i < data.length; i++) {
        const scene = document.createElement('div')
     scene.setAttribute('class', 'scene scene--card')
     const card = document.createElement('div')
     card.setAttribute('class', 'card')
     const card__face__front = document.createElement('div')
     card__face__front.setAttribute('class', 'card__face card__face--front')
     const imga = document.createElement('img')
     imga.src = data[i].srcImg
     imga.setAttribute('style', 'width: 360px; height: 260px')

     card__face__front.appendChild(imga)


     const card__face__back = document.createElement('div')
     card__face__back.setAttribute('class', 'card__face card__face--back')
     const title = document.createElement('h1')
     title.setAttribute('class', 'title')
     title.innerHTML = data[i].word
     const ul = document.createElement('ul')

     const li1 = document.createElement('li')
     li1.innerHTML = data[i].meanning;
     const li2 = document.createElement('li')
     li2.innerHTML = 'Ex: ' + data[i].ex;
     const li3 = document.createElement('li')
     li3.innerHTML = data[i].exMean;
     ul.appendChild(li1)
     ul.appendChild(li2)
     ul.appendChild(li3)

     card__face__back.appendChild(title)
     card__face__back.appendChild(ul)
     const getAudio = document.createElement('div')
     getAudio.setAttribute('class', 'audio')
     const icon = document.createElement('i')
     icon.setAttribute('class', 'fas fa-volume-up fa-2x')
     getAudio.appendChild(icon)
     //   const audio = new Audio (data[i].srcAudio)

     card__face__back.appendChild(getAudio)
     card.appendChild(card__face__front)
     card.appendChild(card__face__back)
     if(data[i].category == "nature") {
        card.setAttribute('data-filter', 'nature')
     } else if (data[i].category == "human") {
        card.setAttribute('data-filter', 'human')
     } else {
        card.setAttribute('data-filter', 'work')
     }
    
     scene.appendChild(card)
     libvocab.appendChild(scene)
     
  
  }

  console.log(libvocab)





const iconAudio = document.querySelectorAll('i')
for (let i = 0; i < iconAudio.length; i++) {
  const audio = new Audio(data[i].srcAudio)
  iconAudio[i].addEventListener('click', () => {
     audio.play()
  })
}


let categoryTitle = document.querySelector('.categoryTitle h1')

const category = document.querySelectorAll('#category li')
const allCard = document.querySelectorAll('.card')
console.log(allCard)
for (let i = 0; i < category.length; i++) {
  category[i].addEventListener('click', () => {
     for (let j = 0; j < category.length; j++) {
        category[j].classList.remove('activeCat')
     }

     category[i].classList.add('activeCat')
     
     categoryTitle.innerHTML = category[i].textContent
     allCard.forEach((word)=> {
        console.log(word)
           word.parentElement.style.display = 'none'
        if(word.getAttribute('data-filter') ==  category[i].textContent.toLocaleLowerCase() || category[i].textContent == 'ALL' ) {
           word.parentElement.style.display ='block'
        }
     })
    
        
        
    

  })
}
    const chooseLi = document.querySelectorAll('.learn-navbar li')
    chooseLi.forEach((e) => {
        e.addEventListener('click', () => {
          if(e.textContent == 'Luyện Tập') {
           
              view.setActiveScreen('practicePage')
              
          } 
        })
    })
    
    document.getElementById('signOut').addEventListener('click', () => {
      firebase.auth().signOut();
    })



     break;


     case "practicePage":
    document.querySelector('.main').innerHTML = compoment.practicePage;
  

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
const chooseLii = document.querySelectorAll('.learn-navbar li')

chooseLii.forEach((e) => {
    e.addEventListener('click', () => {
      if(e.textContent == 'Học') {
          view.setActiveScreen('loginSuccess')
      } 
    })
})
document.getElementById('signOut').addEventListener('click', () => {
  firebase.auth().signOut();
})
     break;
  }
};
view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message;
};
