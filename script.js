document.addEventListener('DOMContentLoaded', () => {
    // Menu Responsivo Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !expanded);
            navList.classList.toggle('active');
        });
    }

    // Alternar Alto Contraste
    const btnContrast = document.getElementById('btn-contrast');
    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // Alternar Fonte para Dislexia
    const btnDyslexia = document.getElementById('btn-dyslexia');
    btnDyslexia.addEventListener('click', () => {
        document.body.classList.toggle('dyslexia-font');
    });

    // Alternar Modo Claro e Escuro
    const btnTheme = document.getElementById('btn-theme');
    btnTheme.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
    });

    // Simulador Interativo do Efeito Fotoelétrico
    const freqSlider = document.getElementById('freq-slider');
    const freqVal = document.getElementById('freq-val');
    const simResult = document.getElementById('sim-result');

    const freqLevels = [
        { name: "Infravermelho (Baixa Energia)", active: false, desc: "Frequência abaixo do limiar. Nenhum elétron emitido." },
        { name: "Luz Vermelha", active: false, desc: "Ainda abaixo da frequência de corte para este metal." },
        { name: "Luz Verde (Frequência de Corte exata)", active: true, desc: "Limite atingido! Primeiros elétrons começam a se desprender." },
        { name: "Luz Azul", active: true, desc: "Frequência superior ao corte. Elétrons emitidos com energia cinética!" },
        { name: "Ultravioleta (Alta Energia)", active: true, desc: "Alta frequência! Emissão intensa e elétrons com máxima velocidade." }
    ];

    if (freqSlider) {
        freqSlider.addEventListener('input', (e) => {
            const index = parseInt(e.target.value) - 1;
            const level = freqLevels[index];
            freqVal.textContent = level.name;
            
            if (level.active) {
                simResult.innerHTML = `<p><strong>Status:</strong> <span style="color: green;">Sucesso!</span> ${level.desc}</p>`;
            } else {
                simResult.innerHTML = `<p><strong>Status:</strong> <span style="color: red;">Inativo.</span> ${level.desc}</p>`;
            }
        });
    }

    // Navegação suave e destaque de menu ativo
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
