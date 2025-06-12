    const inicio = new Date("2025-02-18T00:00:00").getTime();
    setInterval(() => {
      const agora = new Date().getTime();
      let distancia = agora - inicio;

      const meses = Math.floor(distancia / (1000 * 60 * 60 * 24 * 30.44));
      distancia -= meses * (1000 * 60 * 60 * 24 * 30.44);
   
      document.getElementById("meses").textContent = String(meses).padStart(2, '0');
      
    }, 1000);