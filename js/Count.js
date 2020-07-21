import SetData from "./SetData.js";
import ShowValue from "./Show.js";

class Count extends SetData {
  constructor(props) {
    super(props);
    this.countBtn = document.querySelector(".container__button");
    this.countBtn.addEventListener("click", this.counting);


    this.calendarStart = document.querySelector(".calendar__date--start");
    this.calendarEnd = document.querySelector(".calendar__date--end");


  }
  counting = () => {
    const date = new Date();
    date.setHours(1, 59);

    let days = 0;

    if (this.calendarStart.valueAsDate < date) {
      alert("start date wasn't in the past");
      return;
    } else if (this.calendarStart.valueAsDate === date) {
      days = Math.floor((this.calendarEnd.valueAsDate - date) / 3600000) / 24;
    } else if (this.calendarStart.valueAsDate > date) {
      days =
        Math.floor(
          (this.calendarEnd.valueAsDate - this.calendarStart.valueAsDate) /
          3600000
        ) / 24;
    }

    if (this.initial.value < this.desired.value) {
      alert("it dosn't work this side:)");
      return;
    }

    const BMI = ((this.initial.value / (this.height.value * this.height.value)) * 10000).toFixed(1);

    const loose = this.initial.value - this.desired.value;
    const calc = (loose / days).toFixed(2)
    let phase = "";
    if (BMI <= 17) {
      phase = "starvation";
    } else if (BMI <= 19) {
      phase = "underweight";
    } else if (BMI <= 25) {
      phase = "correct weight";
    } else if (BMI <= 30) {
      phase = "overweight";
    } else if (BMI <= 35) {
      phase = "I degree of obesity";
    } else if (BMI <= 40) {
      phase = "2nd degree of obesity";
    } else if (BMI > 40) {
      phase = "extreme obesity";
    }

    const resultItem = {
      weight: this.initial.value,
      bmi: BMI,
      phase: phase,
      loose: loose,
      days: days,
      calc: calc,
    };
    const show = new ShowValue
    show.showValue(resultItem)
  };

}

export default Count;