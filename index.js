document.addEventListener('DOMContentLoaded',()=>{
    const squares = document.querySelectorAll('.grid div')
    const res = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1 

    for ( let i =0 ; i < squares.length ; i++){
        squares[i].onclick =() => {
            alert("you have clicked square " + i)
        }
    }

})