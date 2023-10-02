function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode add a img relacionado ao light mode
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "teste2")
  } else {
    // sem light mode
    img.setAttribute("src", "./assets/avatar.png")
  }
}

// sem light mode
