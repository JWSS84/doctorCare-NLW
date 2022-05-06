window.addEventListener('scroll', onScroll)
onScroll()
/**
 * função de rolagem da página(gerencia todos os scolls)
 */

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}
/**
 * função para mudar o icone do menu desktop
 * verifica se a seção passou da linha
 */
function  activateMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight / 2
  //topo
  const sectionTop = section.offsetTop
  //altura
  const sectionHeight = section.offsetHeight
  //topo chegou ou ultrapassou
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  //a linha passou do alvo
  const sectionEndsAt = sectionTop + sectionHeight
  //o final da seção passou do limite
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document
  .querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if(sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

/**
 * função de mostrar o nav quando faz o scroll
 */
function showNavOnScroll(){
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
/**
 * função de mostrar o button "backToTop" quando feito o scroll
 */
function showBackToTopButtonOnScroll(){
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/**
 * função de abrir e fechar o menu
 */
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home,
 #home img, #home .stats, 
 #services,
 #services header,
 #services .card,
 #about,
 #about header,
 #about .content`);