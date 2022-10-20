
let btn = document.getElementById("btn")
let result = document.getElementById("result")

let candidates = ["john", "jill", "jason", "johnny", "kayla"]
let random = Math.floor(Math.random() * candidates.length + 1);


btn.addEventListener("click", () => {
    result.innerText = candidates[random]
    if(random === 5){
        result.innerText ="No One Pays"

    }
    return result
})