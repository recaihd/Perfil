    const texto = "RecaiHD";
    const velocidade = 300;
    const destino = document.getElementById("typewriter");

    let i = 0;
    function digitar() {
      if (i < texto.length) {
        destino.textContent += texto.charAt(i);
        i++;
        setTimeout(digitar, velocidade);
      }
    }

    digitar();

    const dadosBox = [
      {
        imagem: "https://i.postimg.cc/dQTd5N2n/iconporkinbr.png",
        titulo: "Porkinbr",
        membros: "+20.000 membros",
        subtitulo: "Ex-ajudante",
        corSubtitulo: "#ff0000",
        link: "https://discord.gg/QJVBftSRmV"
      },
            {
        imagem: "https://i.postimg.cc/YSX42Zgc/iconrecaihd.gif",
        titulo: "RecaiHD",
        membros: "+200 membros",
        subtitulo: "Dono",
        corSubtitulo: "#00ffee",
        link: "https://discord.gg/UNuYBvZREC"
      },
      {
        imagem: "https://i.postimg.cc/FKmPpCMf/redefenix-ico.png",
        titulo: "Redefênix",
        membros: "+250 membros",
        subtitulo: "Moderador",
        corSubtitulo: "#68d14f",
        link: "https://discord.gg/RMK4dnm7Cg"
      },
      {
        imagem: "https://i.postimg.cc/BQwbpztm/templeofhistory.gif",
        titulo: "Temple of History",
        membros: "+80 membros",
        subtitulo: "Admin e Parceiro",
        corSubtitulo: "#00ffee",
        link: "https://discord.gg/mZf64r6uU7"
      }
    ];

    let boxIndex = 0;

    // Aplica os dados iniciais logo ao carregar
    document.getElementById("imagem-box").src = dadosBox[0].imagem;
    document.getElementById("titulo-box").innerText = dadosBox[0].titulo;
    document.getElementById("membros-box").innerText = dadosBox[0].membros;
    document.getElementById("subtitulo-box").innerText = dadosBox[0].subtitulo;
    document.getElementById("subtitulo-box").style.color = dadosBox[0].corSubtitulo;
    document.getElementById("botao-box").href = dadosBox[0].link;

    // Atualiza os dados a cada 5 segundos
    setInterval(() => {
      boxIndex = (boxIndex + 1) % dadosBox.length;
      document.getElementById("imagem-box").src = dadosBox[boxIndex].imagem;
      document.getElementById("titulo-box").innerText = dadosBox[boxIndex].titulo;
      document.getElementById("membros-box").innerText = dadosBox[boxIndex].membros;
      document.getElementById("subtitulo-box").innerText = dadosBox[boxIndex].subtitulo;
      document.getElementById("subtitulo-box").style.color = dadosBox[boxIndex].corSubtitulo;
      document.getElementById("botao-box").href = dadosBox[boxIndex].link;
    }, 5000);

