const li = document.querySelectorAll(".nav-link");
const sec = document.querySelectorAll("section");

const activeMenu = () => {
  let len = sec.length;
  while (--len && window.scrollY + 60 < sec[len].offsetTop) {}
  li.forEach((ltx) => {
    ltx.classList.remove("active");
  });
  li[len].classList.add("active");
};
activeMenu();
window.addEventListener("scroll", activeMenu);