import SetData from "./SetData.js"

class Count extends SetData{
    constructor(props){
      super(props)
      this.countBtn = document.querySelector('.container__button')
      this.countBtn.addEventListener('click', this.counting)
      this.result = document.querySelector('.container__result')



    }
    counting =()=>{
        
        const BMI = Math.round(((this.initial.value/(this.height.value*this.height.value))*10000), 2)
        const loose = this.initial.value - this.desired.value

       
        const resultItem = {
            weight:  this.initial.value,
            bmi: BMI,
            phase: null,
            loose: loose,
            days : null,
            calc: null,
        }
        this.showValue(resultItem)
    }
    showValue=(resultItem)=>{


        const weight = document.createElement('p');
        const bmi = document.createElement('p');
        const loose = document.createElement('p');
        const calc = document.createElement('p');

        weight.textContent = `Your current weight is: ${resultItem.weight}`;
        bmi.textContent = `It is BMI index: ${resultItem.bmi}, pahse: ${resultItem.phase}`;
        loose.textContent = `You want to loose: ${resultItem.loose} kg, on: ${resultItem.days} days`;
        calc.textContent = `You have to loose ${resultItem.calc} kg each day`;
        
        this.result.appendChild(weight);
        this.result.appendChild(bmi);
        this.result.appendChild(loose);
        this.result.appendChild(calc);
     
        
    }
    }

    




export default Count;