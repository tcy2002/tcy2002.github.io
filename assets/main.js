(() => {
  "use strict";

  const profile = window.PROFILE || {};
  const clean = (value) => typeof value === "string" ? value.trim() : "";

  // Insert profile values as plain text instead of parsing them as HTML.
  document.querySelectorAll("[data-profile]").forEach((element) => {
    const value = clean(profile[element.dataset.profile]);
    if (value) element.textContent = value;
  });

  const name = clean(profile.name);
  if (name) {
    document.title = `${name} · Personal Website`;
    document.getElementById("profile-photo").alt = `Photo of ${name}`;
  }

  const tagline = clean(profile.tagline);
  if (tagline) document.querySelector('meta[name="description"]').content = tagline.replace(/\s+/g, " ");

  const photo = clean(profile.photo);
  if (photo) {
    const image = document.getElementById("profile-photo");
    const placeholder = document.getElementById("photo-placeholder");
    image.addEventListener("load", () => {
      image.hidden = false;
      placeholder.hidden = true;
    });
    image.addEventListener("error", () => {
      image.hidden = true;
      placeholder.hidden = false;
    });
    image.src = photo;
  }

  const email = clean(profile.email);
  if (email) {
    const link = document.getElementById("email-link");
    document.getElementById("email-text").textContent = email;
    link.href = `mailto:${encodeURIComponent(email).replace(/%40/g, "@")}`;
    link.hidden = false;
    document.getElementById("email-placeholder").hidden = true;
  }

  if (Array.isArray(profile.interests)) {
    const interests = profile.interests.filter((item) => item && clean(item.title));
    if (interests.length) {
      const list = document.getElementById("interest-list");
      const decorations = ["↗", "✳", "◎"];
      list.replaceChildren(...interests.map((item, index) => {
        const card = document.createElement("article");
        card.className = "interest-card";
        const number = document.createElement("span");
        number.className = "card-number";
        number.textContent = String(index + 1).padStart(2, "0");
        const decoration = document.createElement("span");
        decoration.className = "card-decoration";
        decoration.setAttribute("aria-hidden", "true");
        decoration.textContent = decorations[index % decorations.length];
        const title = document.createElement("h3");
        title.textContent = clean(item.title);
        const description = document.createElement("p");
        description.textContent = clean(item.description);
        card.append(number, decoration, title, description);
        return card;
      }));
    }
  }

  if (Array.isArray(profile.links)) {
    const container = document.getElementById("social-links");
    profile.links.forEach((item) => {
      if (!item || !clean(item.label)) return;
      try {
        const url = new URL(clean(item.url));
        if (!["https:", "http:"].includes(url.protocol)) return;
        const link = document.createElement("a");
        link.textContent = `${clean(item.label)} ↗`;
        link.href = url.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        container.append(link);
      } catch {
        // Ignore incomplete or invalid URLs.
      }
    });
    container.hidden = !container.childElementCount;
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
