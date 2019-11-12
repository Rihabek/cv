var elements = document.getElementById('menu').querySelectorAll('[data-link]')
for (var i = 0;  i < elements.length; i++) {
  elements[i].addEventListener('click', function (e) {
    e.preventDefault();
    var id = e.target.getAttribute('href')
    var element = document.getElementById(id.replace('#', ''))
    element.scrollIntoView({behavior: "smooth"})
  })
}
