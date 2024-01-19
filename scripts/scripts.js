// const textEntrada = document.querySelector('.textEntrada')

// document.querySelectorAll('.boton--primario').forEach(item => {
//   item.addEventListener('click', event => {
//     // Prevent the default action
//     event.preventDefault()

//     // Get the blog post content
//     let postContent = event.target.previousElementSibling.textContent

//     // Display the blog post content
//     console.log(postContent)
//     textEntrada.innerHTML = `<p>${postContent}</p>`
//   })
// })

const textEntrada = document.querySelector('.textEntrada')

document.querySelectorAll('.boton--primario').forEach(item => {
  item.addEventListener('click', event => {
    // Prevent the default action
    event.preventDefault()

    // Get the blog post content
    let postContent = event.target.previousElementSibling.textContent

    // Encode the content to make it URL-safe
    const encodedContent = encodeURIComponent(postContent)

    // Construct the URL with the content parameter
    const entradaURL = `entrada.html?entradaContent=${encodedContent}`

    // Redirect to the entrada.html with the content parameter
    window.location.href = entradaURL
  })
})
