document.addEventListener('DOMContentLoaded', function() {
    const linkButton = document.querySelector('.linkButton');
    const newPortfolio = document.querySelector('.newPortfolio');
    const hide = document.querySelector('.hide');

    // Função para alternar as cores
    function startBlinking() {
        let startTime = Date.now();
        const duration = 3000; // 3 segundos
        const color1 = '#3498db';
        const color2 = '#f2cb05';

        function blink() {
            let elapsedTime = Date.now() - startTime;
            if (elapsedTime < duration) {
                let isColor1 = Math.floor(elapsedTime / 500) % 2 === 0; // Alterna a cada 500ms
                let currentColor = isColor1 ? color1 : color2;
                
                linkButton.style.backgroundColor = currentColor;
                newPortfolio.style.color = currentColor;
                hide.style.backgroundColor = currentColor;

                requestAnimationFrame(blink); // Continua o efeito
            } else {
                // Garante que as cores finais estejam definidas
                linkButton.style.backgroundColor = color1;
                newPortfolio.style.color = color1;
                hide.style.backgroundColor = color1;
            }
        }

        blink();
    }

    startBlinking();
});
