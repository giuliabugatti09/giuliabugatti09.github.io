// matrixEffect.js
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    
    // Configurações
    const binaryChars = "01";
    const fontSize = 18;
    let columns;
    let drops = [];
    
    // Inicializar
    function init() {
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        startAnimation();
    }
    
    // Ajustar canvas ao tamanho da tela
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.floor(canvas.width / fontSize);
        resetDrops();
    }
    
    // Resetar gotas quando a tela for redimensionada
    function resetDrops() {
        drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
        }
    }
    
    // Desenhar os caracteres
    function draw() {
        // Fundo semi-transparente para efeito de rastro
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Cor e estilo do texto
        ctx.fillStyle = '#00ff88';
        ctx.font = `${fontSize}px monospace`;
        
        // Desenhar caracteres
        for (let i = 0; i < drops.length; i++) {
            const text = binaryChars[Math.floor(Math.random() * binaryChars.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            
            ctx.fillText(text, x, y);
            
            // Resetar gotas no final da tela
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            // Movimentar gotas
            drops[i]++;
        }
    }
    
    // Iniciar animação
    function startAnimation() {
        setInterval(draw, 50);
    }
    
    // Inicializar efeito
    init();
});
