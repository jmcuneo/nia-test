document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector("header h1");
    header.style.opacity = "0";

    let opacity = 0;
    let fadingIn = true;

    function animateHeader() {
        if (fadingIn && opacity < 1) {
            opacity += 0.02;
            header.style.opacity = opacity;
        } else if (!fadingIn && opacity > 0.8) {
            opacity -= 0.01;
            header.style.opacity = opacity;
        }

        if (opacity >= 1) fadingIn = false;
        if (opacity <= 0.8) fadingIn = true;

        requestAnimationFrame(animateHeader);
    }

    animateHeader();

    const text = [
        "Nia is typing...",
        "console.log('Hello World!');",
        "Learning + coding + serving 💻☕",
        "WPI ❤️ Service Industry"
    ];

    let line = 0;
    let char = 0;
    const typingText = document.getElementById("typing-text");

    function typeAnimation() {
        if (!typingText) return; // safety check

        if (line < text.length) {
            if (char < text[line].length) {
                typingText.textContent += text[line].charAt(char);
                char++;
                setTimeout(typeAnimation, 50); // typing speed
            } else {
                typingText.textContent += "\n";
                line++;
                char = 0;
                setTimeout(typeAnimation, 500); // pause between lines
            }
        } else {
            // restart after a short pause
            setTimeout(() => {
                typingText.textContent = "";
                line = 0;
                char = 0;
                typeAnimation();
            }, 2000);
        }
    }

    typeAnimation();

});
