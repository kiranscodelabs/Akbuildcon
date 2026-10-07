class AkFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="footer-main">
          <div class="footer-company">
            <a class="brand footer-brand" href="#home" aria-label="AK Buildcon home">
              <span class="brand-mark" aria-hidden="true">AK</span>
              <span>AK <span class="brand-light">Buildcon</span></span>
            </a>
            <p>Ready-to-move flats for your next chapter.</p>
          </div>
          <div class="footer-column">
            <h2>Explore</h2>
            <a href="#home">Home</a>
            <a href="#available-homes">Flat photos</a>
            <a href="#about">About us</a>
          </div>
          <div class="footer-column">
            <h2>Location</h2>
            <p>Palghar</p>
          </div>
          <div class="footer-column">
            <h2>Contact</h2>
            <a href="https://wa.me/918197437647" target="_blank" rel="noopener noreferrer">
              WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact">Send an enquiry</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© <span class="current-year"></span> AK Buildcon</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    `;

    this.querySelector(".current-year").textContent = String(new Date().getFullYear());
  }
}

customElements.define("ak-footer", AkFooter);
