function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const submenu = document.getElementById("sub-menu");
const contact = document.getElementById("contact");
const subcontact = document.getElementById("sub-contact");
const about = document.getElementById("about");
const seemore = document.getElementById("seemore");

home.addEventListener("click", () => {
  scrollToElement(".header");
});
menu.addEventListener("click", () => {
  scrollToElement(".card");
});
submenu.addEventListener("click", () => {
  scrollToElement(".card");
});
contact.addEventListener("click", () => {
  scrollToElement(".card", 1);
});
subcontact.addEventListener("click", () => {
  scrollToElement(".card", 1);
});
about.addEventListener("click", () => {
  scrollToElement(".card", 2);
});
seemore.addEventListener("click", () => {
  scrollToElement(".card");
});
