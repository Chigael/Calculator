const screen = document.querySelector(".screen");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const styles = event.currentTarget.classList;

    if (styles.contains("number")) {
      if (screen.value <= 0) {
        screen.value = "";
      }

      let number = btn.value;
      screen.value += number;
    } else if (styles.contains("equal-to")) {
      let value = eval(screen.value);
      screen.value = value;
    } else if (styles.contains("clear")) {
      screen.value = 0;
    }
  });
});