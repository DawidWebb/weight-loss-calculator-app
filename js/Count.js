import SetData from "./SetData.js"

class Count extends SetData {
    constructor(props) {
        super(props)
        this.countBtn = document.querySelector('.container__button');
        this.countBtn.addEventListener('click', this.counting);
        this.result = document.querySelector('.container__result');

        this.calendarStart = document.querySelector('.calendar__date--start');
        this.calendarEnd = document.querySelector('.calendar__date--end');

        this.divResult = document.createElement('div');
        this.isActive = false;
    }
    counting = () => {

        const date = new Date();
        date.setHours(1, 59)

        let days = 0

        if (this.calendarStart.valueAsDate < date) {
            alert("start date wasn't in the past")

        } else if (this.calendarStart.valueAsDate === date) {
            days = Math.floor((this.calendarEnd.valueAsDate - date) / 3600000) / 24;

        } else if (this.calendarStart.valueAsDate > date) {
            days = Math.floor((this.calendarEnd.valueAsDate - this.calendarStart.valueAsDate) / 3600000) / 24;

        }

        const BMI = Math.round(((this.initial.value / (this.height.value * this.height.value)) * 10000), 2)
        const loose = this.initial.value - this.desired.value

        const calc = loose / days;

        let phase = "";

        if (BMI <= 17) {
            phase = "starvation"
        } else if (BMI <= 19) {
            phase = "underweight"
        } else if (BMI <= 25) {
            phase = "correct weight"
        } else if (BMI <= 30) {
            phase = "overweight"
        } else if (BMI <= 35) {
            phase = "I degree of obesity"
        } else if (BMI <= 40) {
            phase = "2nd degree of obesity"
        } else if (BMI > 40) {
            phase = "extreme obesity"
        }



        const resultItem = {
            weight: this.initial.value,
            bmi: BMI,
            phase: phase,
            loose: loose,
            days: days,
            calc: calc,
        }
        this.showValue(resultItem)
    }
    showValue = (resultItem) => {


        if (this.result.childNodes === this.divResult) {
            this.result.removeChild(this.divResult)
        }

        const weight = document.createElement('p');
        const bmi = document.createElement('p');
        const loose = document.createElement('p');
        const calc = document.createElement('p');

        weight.textContent = `Your current weight is: ${resultItem.weight}`;
        bmi.textContent = `It is BMI index: ${resultItem.bmi}, pahse: ${resultItem.phase}`;
        loose.textContent = `You want to loose: ${resultItem.loose} kg, on: ${resultItem.days} days`;
        calc.textContent = `You have to loose ${resultItem.calc} kg each day`;

        this.divResult.appendChild(weight);
        this.divResult.appendChild(bmi);
        this.divResult.appendChild(loose);
        this.divResult.appendChild(calc);

        this.result.appendChild(this.divResult);



    }

}




export default Count;