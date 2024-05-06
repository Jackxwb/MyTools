self.addEventListener('message', function(e) {
    let out = []
    for (let i = 0; i < e.data.widthLen; i+=e.data.spac) {

        let hexcolor = e.data.cacheData[i][e.data.line];

        // self.postMessage({
        //     x: i,
        //     y: e.data.line,
        //
        // });

        // let hb = e.data.outContext;
        // hb.font = e.data.mi + "px " + e.data.fontname;
        // hb.fillStyle = hexcolor;
        // hb.fillText(
        //     getText(),
        //     //							j+1*i+1,
        //     j + 1, i + 1 + mi
        // )
        out.push({
            x: i,y: e.data.line,
            color: hexcolor,
        })

        self.postMessage([
            {
                x: i,y: e.data.line,
                color: hexcolor,
            }
        ])
    }
    // self.postMessage(out);
}, false);