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
        imagem: "https://images-ext-1.discordapp.net/external/PG9ez8Jwosvn06Gkqoxw7kvtUAY1he6D826oPKQSyBA/%3Fsize%3D2048/https/cdn.discordapp.com/icons/1299698427369885756/a_14b8fffd9140fca0b234ee644fed0bd4.gif",
        titulo: "Temple of History",
        membros: "+80 membros",
        subtitulo: "Admin e Parceiro",
        corSubtitulo: "#00ffee",
        link: "https://discord.gg/mZf64r6uU7"
      },
      {
        imagem: "https://i.postimg.cc/Gh9TZ315/XRecorder-Edited-20250519-01.jpg",
        titulo: "Cidade da Nira",
        membros: "+10 membros",
        subtitulo: "Dono",
        corSubtitulo: "#00ffee",
        link: "https://discord.gg/2VcjePbmye"
      },
      {
        imagem: "https://i.postimg.cc/FHRsfDyy/8335-developer.png",
        titulo: "Developer Discord",
        membros: "+5 membros",
        subtitulo: "Dono",
        link: "https://discord.gg/eSfH9NqhDw"
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

