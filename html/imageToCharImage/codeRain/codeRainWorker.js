self.addEventListener('message', function(e) {
    const canvasWidth = e.data.width;
    const canvasHeight = e.data.height;
    const texts = ['function', 'const', 'let', 'var', 'if', 'else', 'return', 'for', 'while', 'true', 'false'];
    const maxSpeed = 5;
    const minSpeed = 90;
    const numDrops = 150;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setInterval(function() {
        const positions = Array.from({length: numDrops}, () => ({
            x: getRandomInt(0, canvasWidth),
            y: getRandomInt(0, canvasHeight),
            speed: getRandomInt(minSpeed, maxSpeed),
            text: texts[getRandomInt(0, texts.length - 1)]
        }));

        self.postMessage(positions);
    }, 33); // 大约每30ms发送一次数据，接近30fps
}, false);