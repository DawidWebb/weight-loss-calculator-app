class ShowValue {
    constructor() {

        this.result = document.querySelector(".container__result");
        this.divResult = document.createElement("div");
        this.isActive = false;


    }
    showValue = (resultItem) => {

        if (this.result.childNodes.length === 0) {

            this.result.appendChild(this.divResult);

            const weight = document.createElement("p");
            weight.classList.add("pw");
            const bmi = document.createElement("p");
            bmi.classList.add("pb");
            const loose = document.createElement("p");
            loose.classList.add("pl");
            const calc = document.createElement("p");
            calc.classList.add("pc");

            weight.textContent = `Your current weight is: ${resultItem.weight}`;
            bmi.textContent = `It is BMI index: ${resultItem.bmi}, pahse: ${resultItem.phase}`;
            loose.textContent = `You want to loose: ${resultItem.loose} kg, on: ${resultItem.days} days`;
            calc.textContent = `You have to loose ${resultItem.calc} kg each day`;

            this.divResult.appendChild(weight);
            this.divResult.appendChild(bmi);
            this.divResult.appendChild(loose);
            this.divResult.appendChild(calc);


        } else if (this.result.childNodes.length > 0) {

            const weight = document.querySelector(".pw");
            const bmi = document.querySelector(".pb");
            const loose = document.querySelector(".pl");
            const calc = document.querySelector(".pc");
            weight.textContent = `Your current weight is: ${resultItem.weight}`;
            bmi.textContent = `It is BMI index: ${resultItem.bmi}, pahse: ${resultItem.phase}`;
            loose.textContent = `You want to loose: ${resultItem.loose} kg, on: ${resultItem.days} days`;
            calc.textContent = `You have to loose ${resultItem.calc} kg each day`;
        }
    };
}


export default ShowValue