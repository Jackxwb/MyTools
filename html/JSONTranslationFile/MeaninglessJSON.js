var Meaninglesscharacters = {}
var MeaninglessReg = []

async function loadMeaninglessRules() {
    Meaninglesscharacters = {}
    MeaninglessReg = []

    await fetch('MeaninglessCharacters.txt')
        .then(response => response.text())
        .then(text => {
            text = text.replaceAll("\r\n","\n").replaceAll("\r","\n")
            text.split("\n").forEach((item)=>{
                Meaninglesscharacters[item] = 1
            })
        })
        .catch(error => {
            console.error('Error loading MeaninglessCharacters.txt', error);
        });

    await fetch('MeaninglessReg.txt')
        .then(response => response.text())
        .then(text => {
            text = text.replaceAll("\r\n","\n").replaceAll("\r","\n")
            text.split("\n").forEach((item)=>{
                MeaninglessReg.push(new RegExp(item))
            })
        })
        .catch(error => {
            console.error('Error loading MeaninglessReg.txt', error);
        });
}

function isIgnore(str) {
    if(Meaninglesscharacters[str]===1) {return true;}
    // MeaninglessReg.forEach((reg)=>{
    //     if(reg.test(str)) {return true;}
    // })
    for (const meaninglessRegElement of MeaninglessReg) {
        if(meaninglessRegElement.test(str)) {return true;}
    }
    return false;
}