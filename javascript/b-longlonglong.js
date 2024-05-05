{
    let l_fa_old = document.querySelector(".r-con");
    if (l_fa_old) {
        l_fa_old.style.position = "relative";
    }
    let tmp = document.querySelector(".video-sections-content-list");
    let b = document.createElement("a");
    b.className = "item issue";
    b.style = "position: absolute; left: calc(100% - 10px); z-index: 2; transform: translate(10px); writing-mode: vertical-rl; border: 1px solid var(--line_regular); background-color: var(--bg1_float); padding: 10px; border-radius: 8px; display: block;";
    b.onclick=()=>{
        let l = document.querySelector(
            ".base-video-sections-v1>.video-sections-content-list",
        );
        if (l.style.maxHeight == "none") {
            l.style.maxHeight = "";
        } else {
            l.style.maxHeight = "none";
            l.style.height = "auto";
        }
    }
    b.innerText="如意长长长";
    /*b.innerHTML =
        "<a class=\"item issue\" style=\" position: absolute; left: calc(100% - 10px); z-index: 2; transform: translate(10px); writing-mode: vertical-rl; border: 1px solid var(--line_regular); background-color: var(--bg1_float); padding: 10px; border-radius: 8px; display: block; \" onclick=\"ryccc()\">如意长长长</a>";*/
    tmp.before(b);
}
var ryccc = function () {
    let l = document.querySelector(
        ".base-video-sections-v1>.video-sections-content-list",
    );
    if (l.style.maxHeight == "none") {
        l.style.maxHeight = "";
    } else {
        l.style.maxHeight = "none";
        l.style.height = "auto";
    }
};
