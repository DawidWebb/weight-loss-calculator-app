class SetData {
    constructor(){
        this.initial = document.querySelector('.setup__input--initial');
        this.initValue = document.querySelector('.setup__value--initial');
        this.initValue.textContent = `${this.initial.value}kg`;
        this.desired = document.querySelector('.setup__input--desired');
        this.desValue = document.querySelector('.setup__value--desired');
        this.desValue.textContent = `${this.desired.value}kg`;
        this.height = document.querySelector('.setup__input--height');
        this.hiValue = document.querySelector('.setup__value--height');
        this.hiValue.textContent = `${this.height.value}cm`;
        this.showValue();
        this.start = document.getElementsByTagName('start');
        this.end = document.getElementsByTagName('end');
    }
    
    showValue=()=>{
        const initValue = this.initValue;
        const desValue = this.desValue;
        const hiValue = this.hiValue
        this.initial.oninput = function() {
            initValue.textContent = `${this.value}kg`
          }; 
        this.desired.oninput   = function() {
            desValue.textContent = `${this.value}kg`
          }; 
        this.height.oninput = function(){
            hiValue.textContent = `${this.value}cm`
        }
}
}

export default SetData;