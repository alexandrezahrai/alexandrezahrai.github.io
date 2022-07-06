const toggleNavbar = (collapseID) => {
    document.getElementById(collapseID).classList.toggle("hidden");
    document.getElementById(collapseID).classList.toggle("flex");
  };


const burger = document.querySelector('#burger');

burger.addEventListener("click", function() {
  const icon = document.querySelector('.burger-btn');
  const menu = document.querySelector('#example-collapse-navbar');

  icon.classList.add('fa-xmark');
  icon.classList.add('burger-open');

  if (menu.classList.contains('hidden')) {
    icon.classList.remove('fa-xmark')
  }
});
