// ✅ Get all buttons consistently
let oneBtn = document.getElementById("one");
let twoBtn = document.getElementById("two");
let threeBtn = document.getElementById("three");
let fourBtn = document.getElementById("four");
let fiveBtn = document.getElementById("five");
let sixBtn = document.getElementById("six");
let sevenBtn = document.getElementById("seven");
let eightBtn = document.getElementById("eight");
let nineBtn = document.getElementById("nine");

let turn = 0;
let cnt = 1;

function assign_turn(event) {
    let place = event.target;
    if (place.innerText !== "") return;

    place.innerText = turn === 0 ? "X" : "O";
    turn = 1 - turn;
    cnt++;
    if(cnt > 9){
      alert("no one won")
      location.reload()
    }

    check_win(); // ✅ Check after assigning a turn
}

function check_win() {
    const one = oneBtn.innerText;
    const two = twoBtn.innerText;
    const three = threeBtn.innerText;
    const four = fourBtn.innerText;
    const five = fiveBtn.innerText;
    const six = sixBtn.innerText;
    const seven = sevenBtn.innerText;
    const eight = eightBtn.innerText;
    const nine = nineBtn.innerText;

    if (one === two && one === three && one !== "") {
        alert(one + " wins!");
        location.reload();
    } else if (four === five && four === six && four !== "") {
        alert(four + " wins!");
        location.reload();
    } else if (seven === eight && seven === nine && seven !== "") {
        alert(seven + " wins!");
        location.reload();
    } else if (one === four && one === seven && one !== "") {
        alert(one + " wins!");
        location.reload();
    } else if (two === five && two === eight && two !== "") {
        alert(two + " wins!");
        location.reload();
    } else if (three === six && three === nine && three !== "") {
        alert(three + " wins!");
        location.reload();
    } else if (one === five && one === nine && one !== "") {
        alert(one + " wins!");
        location.reload();
    } else if (three === five && three === seven && three !== "") {
        alert(three + " wins!");
        location.reload();
    }
}


function play() {
    oneBtn.addEventListener("click", assign_turn);
    twoBtn.addEventListener("click", assign_turn);
    threeBtn.addEventListener("click", assign_turn);
    fourBtn.addEventListener("click", assign_turn);
    fiveBtn.addEventListener("click", assign_turn);
    sixBtn.addEventListener("click", assign_turn);
    sevenBtn.addEventListener("click", assign_turn);
    eightBtn.addEventListener("click", assign_turn);
    nineBtn.addEventListener("click", assign_turn);
}

play();
