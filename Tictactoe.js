let turnchanger = true;
let FilledCount = 0;
const WinningSituation = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let XFilled = [];
let OFilled = [];
function Filler(DivNumber) {
  let XOValue = turnchanger ? "X" : "O";
  let div = document.getElementById(`${DivNumber}`);
  if (div.innerHTML != "") return;
  div.innerHTML = XOValue;
    FilledCount++;

  if (turnchanger) {
    XFilled.push(DivNumber);
    if (XFilled.length > 2) {
      Checker(XFilled);
    }
  } else {
    OFilled.push(DivNumber);
    if (OFilled.length > 2) {
      Checker(OFilled);
    }
  }
    

  if (FilledCount === 9) {
       setTimeout(Restart,1000);
       let div = document.getElementById("win");
      div.innerText="Draw";
  }
  turnchanger = !turnchanger;
}
function  Checker (ChecKNumbers) {
  let count;
  WinningSituation.forEach((item,index) => {
    count = 0;
    item.forEach((subItem) => {
      let a = ChecKNumbers.includes(subItem);
      if (a) {
        count++;
      }
    });
    if (count == 3) {
      let a = turnchanger ? "X Won" : "O Won";
      let div = document.getElementById("win");
      div.innerText=a;
      LineDrawer(index);
       setTimeout(Restart,1000);
      return;
    }
  });
}
function Restart() {
  for (let i = 1; i < 10; i++) {
    let div = document.getElementById(i);
    div.innerHTML = "";
  }
  XFilled = [];
  OFilled = [];
  turnchanger = !turnchanger;
  FilledCount = 0;
}
function LineDrawer(index){
  WinningSituation[index].forEach((item)=>{
    let div = document.getElementById(item);
  });
}