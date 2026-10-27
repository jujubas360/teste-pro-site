document.addEventListener("DOMContentLoaded", () => {
    // Navegação por Abas (Menus)
    const navButtons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll(".tab-section");

    navButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = button.getAttribute("data-target");

            // Remover classe active de todos
            navButtons.forEach(btn => btn.classList.remove("active"));
            sections.forEach(sec => sec.classList.remove("active"));

            // Adicionar classe active ao selecionado
            button.classList.add("active");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active");
            }
            
            // Foco para acessibilidade de teclado
            targetSection.setAttribute("tabindex", "-1");
            targetSection.focus();
        });
    });

    // Simulador Interativo do Efeito Fotoelétrico / Frequência
    const freqSlider = document.getElementById("frequency-slider");
    const simOutput = document.getElementById("simulator-output");

    if (freqSlider && simOutput) {
        freqSlider.addEventListener("input", (e) => {
            const val = parseInt(e.target.value);
            if (val < 4) {
                simOutput.textContent = `Frequência ${val}: Abaixo da frequência de corte! Nenhum elétron é liberado.`;
                simOutput.style.backgroundColor = "#ffcccc";
            } else if (val >= 4 && val <= 7) {
                simOutput.textContent = `Frequência ${val}: Frequência adequada! Elétrons começam a ser liberados com energia moderada.`;
                simOutput.style.backgroundColor = "#ffffcc";
            } else {
                simOutput.textContent = `Frequência ${val}: Alta frequência (ultravioleta)! Elétrons liberados com alta velocidade e energia cinética!`;
                simOutput.style.backgroundColor = "#ccffcc";
            }
        });
    }

    // Botões de Acessibilidade
    const btnContrast = document.getElementById("toggle-contrast");
    const btnDyslexia = document.getElementById("toggle-dyslexia");
    const btnTheme = document.getElementById("toggle-theme");

    if (btnContrast) {
        btnContrast.addEventListener("click", () => {
            document.body.classList.toggle("high-contrast");
        });
    }

    if (btnDyslexia) {
        btnDyslexia.addEventListener("click", () => {
            document.body.classList.toggle("dyslexia-font");
        });
    }

    if (btnTheme) {
        btnTheme.addEventListener("click", () => {
            const htmlTag = document.documentElement;
            const currentTheme = htmlTag.getAttribute("data-theme");
            if (currentTheme === "dark") {
                htmlTag.setAttribute("data-theme", "light");
            } else {
                htmlTag.setAttribute("data-theme", "dark");
            }
        });
    }
});
