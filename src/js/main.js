$('.carousel').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true
    });

    const inicio = new Date("2015-09-13T00:00:00").getTime();
    setInterval(() => {
      const agora = new Date().getTime();
      let distancia = agora - inicio;

      const anos = Math.floor(distancia / (1000 * 60 * 60 * 24 * 365.25));
      distancia -= anos * (1000 * 60 * 60 * 24 * 365.25);

      const meses = Math.floor(distancia / (1000 * 60 * 60 * 24 * 30.44));
      distancia -= meses * (1000 * 60 * 60 * 24 * 30.44);

      const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      distancia -= dias * (1000 * 60 * 60 * 24);

      const horas = Math.floor(distancia / (1000 * 60 * 60));
      distancia -= horas * (1000 * 60 * 60);

      const minutos = Math.floor(distancia / (1000 * 60));
      distancia -= minutos * (1000 * 60);

      const segundos = Math.floor(distancia / 1000);

      document.getElementById("anos").textContent = String(anos).padStart(2, '0');
      document.getElementById("meses").textContent = String(meses).padStart(2, '0');
      document.getElementById("dias").textContent = String(dias).padStart(2, '0');
      document.getElementById("horas").textContent = String(horas).padStart(2, '0');
      document.getElementById("minutos").textContent = String(minutos).padStart(2, '0');
      document.getElementById("segundos").textContent = String(segundos).padStart(2, '0');
    }, 1000);