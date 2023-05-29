class MyCounter extends HTMLElement
//Gives us web componenet functionality

{
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        // That this prevents from Outside CSS Styling from affecting
        // it and also the one inside leaking out
    }




    get count() {
        return this.getAttribute("count");
    }
    set count(val) {
        this.setAttribute("count", val);
    }
    //Observe Count
    static get observedAttributes() {
        return ["count"];
    }





    attributeChangedCallback(prop, oldVal, newVal) {
        if (prop === 'count') 
        this.render();
        let btn = this.shadow.querySelector('#btn');
        btn.addEventListener('click', this.inc.bind(this) )
                                        //Crucial ♦️ ♦️ for lower --inc(){...;}-- to work 
                                        //Adjective ♦️ ♦️ Reason -- Consequence. 
    }

    inc(){
        this.count++;
    }

    connectedCallback() {
        this.render();
        // ati. render this at this point ? ♦️ ♦️

        //Because couldn't put event handler in innerHTML. ♦️ ♦️
        let btn = this.shadow.querySelector('#btn');
        btn.addEventListener('click', this.inc.bind(this) )
                                        //Crucial ♦️ ♦️ for upper --inc(){...;}-- to work 
                                        //Helpful ♦️ ♦️ way for commenting. 
    }

    render() {
        this.shadow.innerHTML = `
        <h1>Counter</h1>
        ${this.count}
        <button id='btn'>Increment</button>
        `;
    }
}
customElements.define("my-counter", MyCounter);
//use a hyphen. 


