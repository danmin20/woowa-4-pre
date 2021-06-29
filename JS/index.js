const tr1 = document.getElementById("tr1");
const tr2 = document.getElementById("tr2");
const tr3 = document.getElementById("tr3");
const trs = [tr1, tr2, tr3];
const tds = [];
let turn = "X";

const count1 = document.getElementById("count1");
const count2 = document.getElementById("count2");
cnt1 = 0;
cnt2 = 0;

const newGame = document.getElementById("new");
const resetGame = document.getElementById("reset");

newGame.addEventListener("click", () => {
  count1.innerText = 0;
  count2.innerText = 0;

  turn = "X";
  tds.forEach((trs) => {
    trs.forEach((td) => {
      td.textContent = "";
    });
  });
});

resetGame.addEventListener("click", () => {
  turn = "X";
  tds.forEach((trs) => {
    trs.forEach((td) => {
      td.textContent = "";
    });
  });
});

const marking = (event) => {
  const trNumber = trs.indexOf(event.target.parentNode);
  const tdNumber = tds[trNumber].indexOf(event.target);

  // 칸이 비어있으면
  if (tds[trNumber][tdNumber].textContent === "") {
    tds[trNumber][tdNumber].textContent = turn;
    if (turn === "O") {
      tds[trNumber][tdNumber].style = "color: #285f64;";
    } else {
      tds[trNumber][tdNumber].style = "color: #fff;";
    }

    console.log(turn);

    // 세 칸 다 채워졌는지
    let threeTd = false;

    // 가로줄 검사
    if (
      tds[trNumber][0].textContent === turn &&
      tds[trNumber][1].textContent === turn &&
      tds[trNumber][2].textContent === turn
    ) {
      threeTd = true;
    }

    // 세로줄 검사
    if (
      tds[0][tdNumber].textContent === turn &&
      tds[1][tdNumber].textContent === turn &&
      tds[2][tdNumber].textContent === turn
    ) {
      threeTd = true;
    }

    // 대각선 검사 필요한 경우 1
    if (trNumber - tdNumber === 0) {
      if (
        tds[0][0].textContent === turn &&
        tds[1][1].textContent === turn &&
        tds[2][2].textContent === turn
      ) {
        threeTd = true;
      }
    }

    // 대각선 검사 필요한 경우 2
    if (Math.abs(trNumber - tdNumber) === 2) {
      if (
        tds[0][2].textContent === turn &&
        tds[1][1].textContent === turn &&
        tds[2][0].textContent === turn
      ) {
        threeTd = true;
      }
    }

    // 다 찼으면
    if (threeTd) {
      if (turn === "X") {
        cnt1++;
        count1.innerText = cnt1;
      } else {
        cnt2++;
        count2.innerText = cnt2;
      }

      // 초기화
      turn = "X";
      tds.forEach((trs) => {
        trs.forEach((td) => {
          td.textContent = "";
        });
      });
    } else {
      // 다 안 찼으면
      if (turn === "X") {
        turn = "O";
      } else {
        turn = "X";
      }
    }
  }
};

for (let i = 0; i < 3; i++) {
  tds.push([]);
}

for (let j = 0; j < 3; j++) {
  tds[0].push(tr1.querySelectorAll("td").item(j));
  tds[1].push(tr2.querySelectorAll("td").item(j));
  tds[2].push(tr3.querySelectorAll("td").item(j));
}

for (let k = 0; k < 9; k++) {
  const td = document.getElementsByTagName("td").item(k);
  td.addEventListener("click", marking);
}
