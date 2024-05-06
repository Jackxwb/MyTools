document.getElementById("code").innerText = code.toString();
document.getElementById("updateLog").innerHTML="";
update.forEach((str)=>{
    let li = document.createElement("li");
    li.innerText = str;
    document.getElementById("updateLog").appendChild(li);
})

function smail() {
    let str = code.toString();
    str = str.replaceAll(/\n */g, "")
    str = str.replaceAll(/^[^{]*\{/g, "javascript:")
    str = str.replaceAll(/}$/g, "")
    let a = document.getElementById("fast");
    a.innerText = scriptName;
    a.href = str;
    console.log(str)
}
smail()