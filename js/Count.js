import SetData from "./SetData.js"

class Count extends SetData{
    constructor(props){
      super(props)
      this.countBtn = document.querySelector('.container__button')
      this.countBtn.addEventListener('click', this.counting)
    }
    counting =()=>{
        const BMI = Math.round(((this.initial.value/(this.height.value*this.height.value))*10000), 2)
        console.log(BMI);
        
    }
}




export default Count;