const enquiryForm = document.querySelector("#whatsapp-enquiry");
const galleryTrack = document.querySelector("#project-gallery");
const galleryCurrent = document.querySelector("#gallery-current");

if (galleryTrack && galleryCurrent) {
  const galleryCards = Array.from(galleryTrack.querySelectorAll(".gallery-card"));
  const galleryButtons = document.querySelectorAll("[data-gallery-direction]");

  const updateGalleryCount = () => {
    const trackBounds = galleryTrack.getBoundingClientRect();
    const visibleCards = galleryCards
      .map((card, index) => ({ card, index }))
      .filter(({ card }) => {
        const cardBounds = card.getBoundingClientRect();
        return cardBounds.right > trackBounds.left + 1 && cardBounds.left < trackBounds.right - 1;
      });
    const firstVisible = visibleCards[0].index + 1;
    const lastVisible = visibleCards[visibleCards.length - 1].index + 1;

    galleryCurrent.textContent = `${String(firstVisible).padStart(2, "0")}–${String(lastVisible).padStart(2, "0")}`;
    galleryButtons.forEach((button) => {
      const direction = Number(button.getAttribute("data-gallery-direction"));
      button.disabled = direction < 0
        ? galleryTrack.scrollLeft <= 1
        : galleryTrack.scrollLeft >= galleryTrack.scrollWidth - galleryTrack.clientWidth - 1;
    });
  };

  galleryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = Number(button.getAttribute("data-gallery-direction"));
      const cardWidth = galleryCards[0].getBoundingClientRect().width;
      const gap = Number.parseFloat(getComputedStyle(galleryTrack).columnGap) || 0;
      const visibleCount = Math.max(1, Math.floor((galleryTrack.clientWidth + gap) / (cardWidth + gap)));
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      galleryTrack.scrollBy({
        left: direction * visibleCount * (cardWidth + gap),
        behavior: reduceMotion ? "auto" : "smooth",
      });
    });
  });

  galleryTrack.addEventListener("scroll", updateGalleryCount, { passive: true });
  window.addEventListener("resize", updateGalleryCount);
  updateGalleryCount();
}

if (enquiryForm instanceof HTMLFormElement) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!enquiryForm.reportValidity()) {
      return;
    }

    const formData = new FormData(enquiryForm);
    const name = String(formData.get("name")).trim();
    const phone = String(formData.get("phone")).trim();
    const interest = String(formData.get("interest"));
    const message = String(formData.get("message") || "").trim();
    const whatsappMessage = [
      "Hello AK Buildcon. I would like to know about a flat.",
      "",
      `Name: ${name}`,
      `Mobile number: ${phone}`,
      `I need: ${interest}`,
      ...(message ? [`Message: ${message}`] : []),
    ].join("\n");
    const whatsappUrl = `https://wa.me/918197437647?text=${encodeURIComponent(whatsappMessage)}`;

    window.location.assign(whatsappUrl);
  });
}
