const sectionFiles = [
  "hero.html",
  "benefits.html",
  "details.html",
  "how-it-works.html",
  "leadership.html",
  "contact.html"
];

const fallbackMarkup = {
  "hero.html": `<section class="hero" id="home">
  <div class="hero-copy">
    <p class="eyebrow">FLATS &amp; SITES IN PALGHAR</p>
    <h1>Find a premium flat or site that matches your next move.</h1>
    <p class="hero-description">Choose from 1 and 2 BHK flats in an occupied building with an OC, or explore industrial and commercial sites available across well-positioned land parcels. Joint-venture opportunities are also available.</p>
    <div class="hero-actions"><a class="button button-dark" href="#properties">Explore flats &amp; sites <span aria-hidden="true">↗</span></a><a class="text-link" href="#contact">Enquire about availability</a></div>
    <div class="hero-proof"><span>OCCUPANCY CERTIFICATE</span><span>PALGHAR NAGAR PARISHAD</span><span>7.5 KM FROM RAILWAY STATION</span></div>
  </div>
  <div class="hero-visual">
    <img src="assets/palghar-building.png" alt="Residential apartment building in Palghar" />
    <div class="image-caption"><span class="pin">⌖</span><span><strong>Residential property in Palghar</strong><small>Explore the building, home interiors and apartment layout.</small></span></div>
  </div>
</section>`,
  "details.html": `<section class="section project-details" id="properties">
  <div class="section-heading"><div><p class="eyebrow">FLATS &amp; SITES</p><h2>Explore the property options</h2><p class="section-intro">Whether you are looking for a premium flat or considering a strategic site, start with the option that best matches your plans. Ask us for current availability, specifications and complete pricing.</p></div></div>
  <div class="offer-grid">
    <article class="offer-card"><span class="offer-number">01</span><p class="eyebrow">FLATS IN AN OC BUILDING</p><h3>1 BHK</h3><p class="offer-price">Starts from ₹16.5 lakh</p><p class="offer-description">A compact flat option in the occupied building with an Occupancy Certificate. Enquire for the available unit details.</p><a class="offer-link" href="#contact">Enquire about 1 BHK <span aria-hidden="true">↗</span></a></article>
    <article class="offer-card"><span class="offer-number">02</span><p class="eyebrow">FLATS IN AN OC BUILDING</p><h3>2 BHK</h3><p class="offer-price">Starts from ₹22.5 lakh</p><p class="offer-description">More room to make your own in the same occupied building. Ask about available units and specifications.</p><a class="offer-link" href="#contact">Enquire about 2 BHK <span aria-hidden="true">↗</span></a></article>
  </div>
  <div class="gallery-heading"><div><p class="eyebrow">PROPERTY GALLERY</p><h2>A closer look at the homes</h2><p class="section-intro">Explore building exteriors, example interiors and an apartment layout. Ask the team to confirm which images and plans match currently available units.</p></div></div>
  <div class="property-gallery">
    <figure class="gallery-card"><img src="assets/residential-rendering.png" alt="Architectural rendering of a blue and white residential building" loading="lazy" decoding="async" /><figcaption>Residential building rendering</figcaption></figure>
    <figure class="gallery-card"><img src="assets/apartment-exterior.png" alt="Multi-storey apartment building exterior" loading="lazy" decoding="async" /><figcaption>Apartment exterior</figcaption></figure>
    <figure class="gallery-card"><img src="assets/jay-amby-rendering.png" alt="Architectural rendering of a residential apartment building" loading="lazy" decoding="async" /><figcaption>Residential building rendering</figcaption></figure>
    <figure class="gallery-card"><img src="assets/living-room.png" alt="Warm contemporary living room interior" loading="lazy" decoding="async" /><figcaption>Living room interior</figcaption></figure>
    <figure class="gallery-card"><img src="assets/kitchen.png" alt="Modern fitted kitchen with warm lighting" loading="lazy" decoding="async" /><figcaption>Kitchen interior</figcaption></figure>
    <figure class="gallery-card"><img src="assets/bedroom.png" alt="Contemporary bedroom with a large bed and warm wood finishes" loading="lazy" decoding="async" /><figcaption>Bedroom interior</figcaption></figure>
    <figure class="gallery-card gallery-floor-plan"><img src="assets/apartment-floor-plan.png" alt="Apartment floor plan showing living room, kitchen, bedrooms, bathrooms and balconies" loading="lazy" decoding="async" /><figcaption><strong>Example apartment layout</strong><span>Check with the team for floor plans matching available units.</span></figcaption></figure>
  </div>
</section>`,
  "benefits.html": `<section class="benefits-section" id="why-us"><div class="section inner"><p class="eyebrow">THE PROJECT AT A GLANCE</p><h2>One location, more ways to make it yours</h2><div class="benefit-grid"><article class="benefit-card"><span class="line-icon">⌂</span><p class="eyebrow">1 &amp; 2 BHK</p><h3>Flats in an occupied building</h3><p>The building has an Occupancy Certificate (OC).</p></article><article class="benefit-card"><span class="line-icon">⌖</span><p class="eyebrow">PALGHAR</p><h3>A defined local address</h3><p>Within Palghar Nagar Parishad and around 7.5 km from the railway station. Check the route and travel time for your preferred journey.</p></article></div></div></section>`,
  "how-it-works.html": `<section class="section steps-section" id="how-it-works"><p class="eyebrow">LAND &amp; BUSINESS OPPORTUNITIES</p><h2>Explore additional opportunities</h2><p class="section-intro">Joint-venture opportunities are also available to discuss with the team.</p><div class="steps-grid"><article><span>01 / INDUSTRIAL</span><h3>Industrial sites</h3><p>Ask about industrial land options, site details and current availability.</p></article><article><span>02 / COMMERCIAL</span><h3>Commercial sites</h3><p>Ask about commercial site details and current availability.</p></article><article><span>03 / JOINT VENTURE</span><h3>Joint-venture opportunities</h3><p>Discuss potential joint-venture opportunities with the team.</p></article></div><a class="button button-dark land-cta" href="#contact">Discuss land opportunities <span aria-hidden="true">↗</span></a></section>`,
  "leadership.html": `<section class="section leadership-section" id="leadership">
  <p class="eyebrow">THE PEOPLE BEHIND THE PROJECT</p>
  <h2>Leadership</h2>
  <p class="section-intro">A commitment to thoughtful property opportunities in Palghar, from residential homes to land and business ventures.</p>
  <div class="leadership-grid">
    <article class="leader-card">
      <img class="leader-image" src="assets/abhay-tiwari.png" alt="Shri Abhay Tiwari, Founder" loading="lazy" decoding="async" />
      <div><p class="eyebrow">FOUNDER</p><h3>Shri Abhay Tiwari</h3><p>Sets the vision and direction behind the project, bringing together the homes and land opportunities presented here.</p></div>
    </article>
    <article class="leader-card">
      <img class="leader-image" src="assets/subrat-tiwari.png" alt="Subrat Tiwari, Managing Director" loading="lazy" decoding="async" />
      <div><p class="eyebrow">MANAGING DIRECTOR</p><h3>Subrat Tiwari</h3><p>Leads the company’s management and helps guide enquiries about homes, plots and potential business opportunities.</p></div>
    </article>
  </div>
</section>`,
  "contact.html": `<section class="contact-section" id="contact">
  <div class="contact-card">
    <div class="contact-intro"><p class="eyebrow">LET'S TALK</p><h2>Tell us what you’re looking for</h2><p>Share a few details and we’ll open WhatsApp with your enquiry ready to send.</p></div>
    <form class="whatsapp-form" id="whatsappForm">
      <label class="form-field">Your name<input name="name" type="text" autocomplete="name" required /></label>
      <label class="form-field">Phone number<input name="phone" type="tel" autocomplete="tel" required /></label>
      <label class="form-field form-interest">Interested in<select name="interest" required><option value="" selected disabled>Select an option</option><option>1 BHK flat</option><option>2 BHK flat</option><option>Industrial site</option><option>Commercial site</option><option>Joint venture</option><option>Other enquiry</option></select></label>
      <label class="form-field form-message">Message (optional)<textarea name="message" rows="4" placeholder="Tell us a little about what you need"></textarea></label>
      <button class="button button-dark form-submit" type="submit">Continue to WhatsApp <span aria-hidden="true">↗</span></button>
      <p class="form-status" id="whatsappFormStatus" role="status" aria-live="polite"></p>
    </form>
  </div>
</section>`,
  "footer.html": `<footer class="site-footer">
  <div class="footer-grid">
    <div><a class="footer-brand" href="#home" aria-label="AK Buildcon home"><img class="footer-brand-logo" src="assets/akbuildcon-logo.png" alt="AK Buildcon — Building Dreams" /></a><p>Flats and site opportunities<br>in a prime Palghar location.</p></div>
    <div><h3>Explore</h3><a href="#properties">Flats &amp; sites</a><a href="#why-us">Project highlights</a><a href="#how-it-works">Land opportunities</a><a href="#leadership">Leadership</a></div>
  </div>
  <div class="footer-bottom"><span>© 2026 AK Buildcon.</span><span>Prices and availability subject to confirmation.</span></div>
</footer>`
};

const whatsappNumber = "919373147249";

async function loadFragment(fileName, fallbackText) {
  try {
    const response = await fetch(fileName, { cache: "no-store" });
    if (!response.ok) throw new Error(`Fetch failed for ${fileName}`);
    return await response.text();
  } catch (error) {
    console.warn(error.message);
    return fallbackText;
  }
}

function initApp() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const whatsappForm = document.getElementById("whatsappForm");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }));
  }

  if (whatsappForm) {
    whatsappForm.addEventListener("submit", event => {
      event.preventDefault();

      if (!whatsappForm.reportValidity()) {
        return;
      }

      const formData = new FormData(whatsappForm);
      const name = String(formData.get("name")).trim();
      const phone = String(formData.get("phone")).trim();
      const interest = String(formData.get("interest"));
      const message = String(formData.get("message")).trim();
      const enquiry = [
        "Hello, I would like to enquire about a property.",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Interested in: ${interest}`,
        message ? `Message: ${message}` : ""
      ].filter(Boolean).join("\n");
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiry)}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      document.getElementById("whatsappFormStatus").textContent =
        "WhatsApp opened with your enquiry. Review it there and tap Send to submit.";
    });
  }
}

async function renderSections() {
  const pageSections = document.getElementById("pageSections");
  const pageFooter = document.getElementById("pageFooter");

  if (!pageSections || !pageFooter) {
    return;
  }

  const sectionMarkup = [];
  for (const fileName of sectionFiles) {
    sectionMarkup.push(await loadFragment(fileName, fallbackMarkup[fileName]));
  }
  pageSections.innerHTML = sectionMarkup.join("");
  pageFooter.innerHTML = await loadFragment("footer.html", fallbackMarkup["footer.html"]);
  initApp();
}

window.addEventListener("DOMContentLoaded", renderSections, { once: true });
