
class UserInfo extends HTMLElement {
  
  constructor() {
    
    super();
    this.name;
    this.email;
    this.comment;
  }
  
  static get observedAttributes() {
    return ["name"];
  }
  static get observedAttributes() {
      return ["email"];
    }
    static get observedAttributes() {
      return ["comment"];
    }
 
  attributeChangedCallback(property, oldValue, newValue) {
    
    if (oldValue === newValue) return;

   
    if (property === "name") {
      
      if (this.namePlaceholder) {
        this.namePlaceholder.textContent = newValue;
      }
    }
  }

  connectedCallback() {
    
    const shadow = this.attachShadow({ mode: "open" });
   
    const template = document
      .getElementById("Name")
      .content.cloneNode(true);

    shadow.append(template);
    this.namePlaceholder = this.shadowRoot.querySelector("span");

    const name = this.getAttribute("name");
    if (name) {
      this.namePlaceholder.textContent = name;
    }

    const email = this.getAttribute("email");
    if (name) {
      this.namePlaceholder.textContent = email;
    }

    const comment = this.getAttribute("comment");
    if (name) {
      this.namePlaceholder.textContent = comment;
    }
  }
}

customElements.define("user-info", UserInfo);

document.addEventListener("DOMContentLoaded", () => {
  const user = document.querySelector("#user");
  const input = document.querySelector("#name");
  

  input.addEventListener("input", (e) => {
    user.setAttribute("name", e.target.value);
  });
  
  input.addEventListener('change', e => {
    let ui = document.createElement('user-info');
    ui.setAttribute('name', e.target.value);
    document.body.appendChild(ui);
  })
});