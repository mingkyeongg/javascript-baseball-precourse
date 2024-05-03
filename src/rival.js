class Rival {
  constructor() {
    this.answer = '';
    this.count = 0;
    this.recordStr = '';
    this.setAnswer();
  }

  setAnswer() {
    while (this.answer.length < 3) {
      const randomNum = Math.floor(Math.random() * 9) + 1;
      const numStr = randomNum.toString();
      if (!this.answer.includes(numStr)) { 
        this.answer += numStr; 
      }
    }
    document.getElementById("result").innerHTML = '숫자를 생성하였습니다. 답을 맞춰보세요!🎶';
  }

  getValue(value) {
    if (!this.checkValue(value)) {
      return;
    }
    this.count++;
    this.recordStr += `${this.count}번째 : ${value}`;
    let s = 0, b = 0;
    value.split('').forEach((e, idx) => {
      if (this.answer.indexOf(e) === idx) { 
        s++; 
      } else if (this.answer.includes(e)) { 
        b++; 
      }
    });

    this.makeResult(s, b);
  }

  checkValue(value) {
    if (value === null || value === '') {
      alert(`입력을 취소하셨습니다. 다시 시도해주세요.`);
      return false;
    } else if (value.length !== 3) {
      alert(`3자리 수의 숫자만 입력해야 합니다.`);
      return false;
    }
    return true;
  }

  makeResult(s, b) {
    let resultStr = '';
    if (s === 3) {
      resultStr = `축하합니다 정답입니다🎉`;
      document.getElementById("result").innerHTML = resultStr;
      this.showResetButton(); // 리셋 버튼 보여주기
    } else {
      resultStr = `${b}B${s}S`;
      document.getElementById("result").innerHTML = `${this.count}번째 시도 : ${resultStr}`;
      this.recordStr += `  ${resultStr}<br>`;
      document.getElementById("record").innerHTML = this.recordStr;
    }
  }
  
  showResetButton() {
    let resetButton = document.getElementById("reset");
    if (!resetButton) {
      resetButton = document.createElement("button");
      resetButton.textContent = "게임 재시작";
      resetButton.id = "reset";
      resetButton.addEventListener('click', resetGame);
      document.body.appendChild(resetButton);
    }
    resetButton.style.display = "block";
  }  
}

export { Rival };
