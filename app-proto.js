function getElement(selection) {
    const element = document.querySelector(selection)
    if (element) {
        return element
    }
    throw new Error(
        `Please check "${selection}" selector, no such 
        element exists here`
    )
}
// Using prototype based function
function Counter(element, value) {
    this.counter = element
    this.value = value
    this.resetBtn = element.querySelector('.reset')
    this.increaseBtn = element.querySelector('.increase')
    this.decreaseBtn = element.querySelector('.decrease')
    this.valueDOM = element.querySelector('.value')
    // texContent represents the text content of the node and its descendants.
    this.valueDOM.textContent = this.value
    // The bind() method creates a new function that, when called, has its this keyword set to the 
    // provided value, with a given sequence of arguments preceding any provided when 
    // the new function is called.
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.reset = this.reset.bind(this)
    // addEventListener sets up a function that will be called whenever the specified event is
    // delivered to the target.
    this.increaseBtn.addEventListener('click', this.increase)
    this.decreaseBtn.addEventListener('click', this.decrease)
    this.resetBtn.addEventListener('click', this.reset)
}
// when the buttons are clicked on
Counter.prototype.increase = function () {
    this.value++
    this.valueDOM.textContent = this.value
}
Counter.prototype.decrease = function () {
    this.value--
    this.valueDOM.textContent = this.value
}
Counter.prototype.reset = function () {
    this.value = 0
    this.valueDOM.textContent = this.value
}


const firstCounter = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 200)