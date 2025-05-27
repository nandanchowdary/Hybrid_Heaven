function showNotification() {
  const notification = document.getElementById('cart-notification');
  notification.classList.add('show');
  
setTimeout(() => {
  notification.classList.remove('show');
  }, 2000);
}
window.onscroll = function () {
  const btn = document.getElementById("goTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}
function showSection(index) {
  const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll(".section");

  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
  });

  sections.forEach((section, i) => {
    section.classList.toggle("active", i === index);
  });
}

