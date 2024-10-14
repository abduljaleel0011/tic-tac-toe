console.log("wellcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let Audioturn = new Audio("ting.mp3")
let Audiogameover = new Audio("gameover.mp3")
let turn = "X"
let gameover = false;
//function to change the turns
const changeTurn = ()=>{
return turn==="X"?"0": "X"
}

//function to check for a win
const checkwin =()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '' )){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText+ " WON"
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= '200px'
        }
    })
}

//game logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            Audioturn.play();
            checkwin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText= "turn for " + turn;
            }
            
        }
    })
})

//Add oneclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText =''
    });
    turn= "X";
    gameover = false
    document.getElementsByClassName("info")[0].innerText= "turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= '0px'
})