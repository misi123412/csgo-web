function load() {
    const loadline = document.querySelector("#loadline")
    let value = loadline.offsetWidth
    const out = document.querySelector('#out')

    out.innerHTML = value

    console.log(value)

}