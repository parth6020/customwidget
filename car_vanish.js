(function() {
    let template = document.createElement("template");
    template.innerHTML = `
        <style>
            :host {
                display: block;
            }
            #car-container {
                width: 100%;
                height: 100%;
                transition: opacity 0.5s ease; /* Smooth fade out */
            }
            img {
                width: 100%;
                height: auto;
            }
        </style>
        <div id="car-container">
            <img src="https://github.com/parth6020/customwidget/blob/main/cars-cars2.gif" alt="Car Animation">
        </div>
    `;

    class CarVanishWidget extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: "open" });
            this._shadowRoot.appendChild(template.content.cloneNode(true));
        }

        // This runs automatically when the story loads
        connectedCallback() {
            const container = this._shadowRoot.getElementById("car-container");
            
            // SET THE TIME HERE: 5000 = 5 seconds
            setTimeout(() => {
                container.style.opacity = "0"; // Fade out
                setTimeout(() => {
                    container.style.display = "none"; // Completely vanish
                }, 500); 
            }, 5000); 
        }
    }

    customElements.define("com-yourname-car-vanish", CarVanishWidget);
})();


