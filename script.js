//wire up the buttons
const displayEl = document.getElementById("count");

const subtractBtn = document.getElementById("subtract");

document.getElementById("add").addEventListener("click,()=>{}");
document.getElementById("subtract").addEventListener("click,()=>{}");
document.getElementById("reset");
addEventListener("click,()=>{}");

class Counter {
  constructor(displayEl, subtractBtn) {
    this.count = 0;
    this.displayEl = displayEl;
    this.subtractBtn = subtractBtn;
    this.updateUI();
  }
  increment() {
    this.count++;
    this.updateUI();
  }
  decrement() {
    if (this.count > 0) {
      this.count--;
    }
    this.updateUI();
  }
  reset() {
    this.count = 0;
    this.updateUI();
  }
  updateUI() {
    this.displayEl.textContent = this.count;
    this.subtractBtn.disabled = this.count === 0;
  }
}
