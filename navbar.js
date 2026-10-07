class AkNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <a class="brand" href="#home" aria-label="AK Buildcon home">
          <span class="brand-mark" aria-hidden="true">AK</span>
          <span>AK <span class="brand-light">Buildcon</span></span>
        </a>
        <button
          class="menu-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="site-navigation"
        >
          <span class="menu-toggle-label">Menu</span>
        </button>
        <nav class="site-navigation" id="site-navigation" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#available-homes">Flats</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a class="nav-cta" href="#contact">Enquire <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
    `;

    const menuToggle = this.querySelector(".menu-toggle");
    const siteNavigation = this.querySelector("#site-navigation");

    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      siteNavigation.classList.toggle("is-open", !isExpanded);
    });

    siteNavigation.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("a")) {
        menuToggle.setAttribute("aria-expanded", "false");
        siteNavigation.classList.remove("is-open");
      }
    });

    this.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        menuToggle.setAttribute("aria-expanded", "false");
        siteNavigation.classList.remove("is-open");
        menuToggle.focus();
      }
    });
  }
}

customElements.define("ak-navbar", AkNavbar);
