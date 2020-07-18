import SetData from "./SetData.js"

class Count extends SetData{
    constructor(props){
      super(props)
      this.countBtn = document.querySelector('.container__button')
      this.countBtn.addEventListener('click', this.counting)
      this.result = document.querySelector('.container__result')

      this.result = []

    }
    counting =()=>{
        const BMI = Math.round(((this.initial.value/(this.height.value*this.height.value))*10000), 2)
        const loose = this.initial.value - this.desired.value
       
        const resultItem = {
            weight:  this.initial.value,
            bmi: BMI,
            loose: loose,
            days
        }
        this.showValue()
    }
    showValue=()=>{
        
    }
    }

    




export default Count;