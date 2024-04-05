const Html=document.querySelector("#html-code")
const Css=document.querySelector("#css-code")
const Javascript=document.querySelector("#javascript-code")
const Output=document.querySelector("#output")

const run=()=>{
    Output.contentDocument.body.innerHTML=Html.value+"<style>"+Css.value+"</style>"

    Output.contentWindow.eval(Javascript.value)

}

