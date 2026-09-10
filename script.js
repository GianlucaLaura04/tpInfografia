const triangulo = document.getElementById('triangulo');

if (triangulo) {
  const textos = [
    `En esta experiencia vamos a aprender sobre
     la <span class="acento">historia y evolución</span> de los <span class="acento">NPC</span>
     a través de los años y cómo se construyen.<br>
     Pero primero: <span class="acento">¿sabés lo que son?</span>`,

    `Los<span class="acento"> NPC </span>(Personaje No Jugable) son los personajes dentro de un videojuego que no son controlados por una persona (usuario). `,

    `Estos son manejados por la computadora a través de algoritmos, scripts o <span class="acento">IA tradicional o generativa</span>. 
¡Vamos a aprender!`,
  ];

  let indice = 0;
  const parrafo = document.querySelector('.escena2__globo-texto p');
  const boton = document.getElementById('boton-comenzar');

  triangulo.addEventListener('click', () => {
    indice = (indice + 1) % textos.length;
    parrafo.innerHTML = textos[indice];

    if (indice === textos.length - 1) {
      triangulo.style.display = 'none';
      boton.style.display = 'inline-flex';
    }
  });

  boton.addEventListener('click', () => {
    window.location.href = 'pagina3.html';
  });
}

// Página 4 — interruptores
const interruptores = document.querySelectorAll('.escena4__interruptor');
if (interruptores.length > 0) {
  interruptores.forEach((interruptor) => {
    interruptor.addEventListener('click', () => {
      interruptor.classList.toggle('is-active');
      verificarActivos();
    });
  });
}

function verificarActivos() {
  const activos = document.querySelectorAll('.escena4__interruptor.is-active').length;
  if (activos === interruptores.length) {
    setTimeout(() => {
      window.location.href = 'pagina5.html';
    }, 400); // espera a que termine la animación
  }
}

// Página 7 — ficha de personalidad
const filas = document.querySelectorAll('.escena7__fila');

if (filas.length > 0) {
  const opciones = document.querySelectorAll('.escena7__opcion');

  opciones.forEach((opcion) => {
    opcion.addEventListener('change', verificarCompleto);
  });

  function verificarCompleto() {
    const nombresDeFilas = new Set();
    filas.forEach((fila) => {
      const input = fila.querySelector('input');
      nombresDeFilas.add(input.name);
    });

    const todasCompletas = [...nombresDeFilas].every((nombre) => {
      return document.querySelector(`input[name="${nombre}"]:checked`);
    });

    if (todasCompletas) {
      setTimeout(() => {
        window.location.href = 'pagina8.html';
      }, 1500);
    }
  }
}
// Página 10 — selector Lineal/Orgánica
const interruptorNav = document.getElementById('interruptor-navegacion');

if (interruptorNav) {
  const imgLineal = document.getElementById('img-lineal');
  const imgOrganica = document.getElementById('img-organica');
  let clicks = 0;

  interruptorNav.addEventListener('click', () => {
    interruptorNav.classList.toggle('is-active');
    clicks++;

    if (interruptorNav.classList.contains('is-active')) {
      // Orgánica activa
      imgLineal.src = 'images/linealinactivo.png';
      imgOrganica.src = 'images/organicaactivo.png';
    } else {
      // Lineal activo (vuelve al estado inicial)
      imgLineal.src = 'images/linealactivo.png';
      imgOrganica.src = 'images/organicainactivo.png';
    }

    if (clicks === 1) {
      setTimeout(() => {
        window.location.href = 'pagina11.html';
      }, 1500);
    }
  });
}

// Página 13 — slider de tensión
const sliderTension = document.getElementById('slider-tension');

if (sliderTension) {
  const imgFemenino = document.getElementById('img-femenino');
  let yaNavego = false;

  sliderTension.addEventListener('input', () => {
    const valor = Number(sliderTension.value);

    if (valor <= 50) {
      imgFemenino.src = 'images/femenino1.png';
    } else if (valor < 100) {
      imgFemenino.src = 'images/femenino2.png';
    } else {
      imgFemenino.src = 'images/femenino3.png';

      if (!yaNavego) {
        yaNavego = true;
        setTimeout(() => {
          window.location.href = 'pagina14.html';
        }, 1500);
      }
    }
  });
}
// Página 16 — Decisiones Autónomas
const botonesContexto = document.querySelectorAll('.escena16__opcion-boton');

if (botonesContexto.length > 0) {
  const imgResultado = document.getElementById('img-resultado');
  const visitados = new Set();

  const imagenesPorContexto = {
    despejado: 'images/seguro.png',
    vigilancia: 'images/riesgoso.png',
    bloqueada: 'images/bloqueado.png',
  };

  botonesContexto.forEach((boton) => {
    boton.addEventListener('click', () => {
      // Mover el estado "activo" solo al botón tocado
      botonesContexto.forEach((b) => b.classList.remove('is-active'));
      boton.classList.add('is-active');

      // Mostrar la imagen correspondiente
      const contexto = boton.dataset.contexto;
      imgResultado.src = imagenesPorContexto[contexto];
      imgResultado.style.display = 'block';

      // Marcar como visitado
      visitados.add(contexto);

      // Si ya se tocaron los 3, esperar y navegar
      if (visitados.size === 3) {
        setTimeout(() => {
          window.location.href = 'pagina17.html';
        }, 1500);
      }
    });
  });
}
// Página 21
const overlay21 = document.getElementById('overlay21');

if (overlay21) {
  const personaje21 = document.getElementById('personaje21');
  const globo21 = document.getElementById('globo21');
  const triangulo21 = document.getElementById('triangulo21');
  const boton21 = document.getElementById('boton-continuar21');
  const parrafo21 = document.querySelector('#globo21 .escena21__globo-texto p');

  const textos21 = [
    `¡Perfecto! Terminamos las bases de
     <span class="acento">nuestro NPC</span> y conocimos sobre su
     historia y evolución.`,

    `Para completarlo del todo, tenemos que
     <span class="acento">distribuir el trabajo</span> que nos falta.`,

    `Con la implementación de la <span class="acento">IA generativa</span>,
     este proceso puede realizarse de <span class="acento">2 maneras</span>.
     ¡Vamos a conocerlas!`,
  ];

  let indice21 = 0;

  // Después de 2 segundos: oscurece el fondo y aparece el personaje con el globo
  setTimeout(() => {
    overlay21.classList.add('is-visible');
    personaje21.classList.add('is-visible');
    globo21.classList.add('is-visible');
  }, 2000);

  triangulo21.addEventListener('click', () => {
    indice21 = (indice21 + 1) % textos21.length;
    parrafo21.innerHTML = textos21[indice21];

    if (indice21 === textos21.length - 1) {
      triangulo21.style.display = 'none';
      boton21.style.display = 'inline-flex';
    }
  });

  boton21.addEventListener('click', () => {
    window.location.href = 'pagina22.html';
  });
}
// Página 19 — secuencia de chat
const chatEnviar = document.querySelector('.escena19__chat-enviar');

if (chatEnviar) {
  const chatTexto = document.querySelector('.escena19__chat-texto');
  const msgUsuario = document.getElementById('msg-usuario');
  const msgTyping = document.getElementById('msg-typing');
  const msgRespuesta = document.getElementById('msg-respuesta');

chatEnviar.addEventListener('click', () => {
  chatEnviar.disabled = true;
  chatEnviar.style.pointerEvents = 'none';
  chatTexto.style.opacity = '0';

  // 0.8s: aparece el mensaje del usuario
  setTimeout(() => {
    msgUsuario.classList.add('is-visible');
  }, 800);

  // 0.8s + 1s: aparece el indicador de "escribiendo"
  setTimeout(() => {
    msgTyping.classList.add('is-visible');
  }, 800 + 1000);

  // 0.8s + 1s + 3s: el indicador desaparece y aparece la respuesta
  setTimeout(() => {
    msgTyping.classList.remove('is-visible');
    msgRespuesta.classList.add('is-visible');
  }, 800 + 1000 + 3000);

  // 6 segundos después de ver la respuesta completa: navega a la página 20
setTimeout(() => {
  window.location.href = 'pagina20.html';
}, 800 + 1000 + 3000 + 7000);
});

}
// Página 22 — Tradicional vs IA Generativa
const itemsEscena22 = document.querySelectorAll('.escena22__item');

if (itemsEscena22.length > 0) {
  const KEY = 'npc-experience-compras';

  const estado = JSON.parse(sessionStorage.getItem(KEY)) || {
    presupuestoTrad: 650,
    presupuestoIA: 650,
    horasTrad: {},
    horasIA: {},
    comprados: {},
  };

  function guardar() {
    sessionStorage.setItem(KEY, JSON.stringify(estado));
  }

  function actualizarPresupuestos() {
    document.getElementById('presupuesto-trad').textContent = estado.presupuestoTrad;
    document.getElementById('presupuesto-ia').textContent = estado.presupuestoIA;
  }

  function actualizarTotales() {
    const totalTrad = Object.values(estado.horasTrad).reduce((a, b) => a + b, 0);
    const totalIA = Object.values(estado.horasIA).reduce((a, b) => a + b, 0);
    document.getElementById('total-trad').textContent = `${totalTrad}hs`;
    document.getElementById('total-ia').textContent = `${totalIA}hs`;
  }

  function actualizarListas() {
    document.querySelectorAll('.escena22__lista li').forEach((li) => {
      const cat = li.dataset.categoria;
      const horasTrad = estado.horasTrad[cat];
      const horasIA = estado.horasIA[cat];
      const horas = horasTrad !== undefined ? horasTrad : horasIA;

      if (horas !== undefined) {
        li.querySelector('span').textContent = `${horas}hs`;
        li.classList.add('is-completado');
      }
    });
  }

  function aplicarEstadoAItem(boton) {
    const categoria = boton.dataset.categoria;
    if (estado.comprados[categoria]) {
      boton.classList.add('is-comprado');
      const img = boton.querySelector('.escena22__item-imagen');
      const srcOff = img.src;
      img.src = srcOff.replace('-off.', '-on.');
    }
  }

  function revisarDisponibilidad() {
    itemsEscena22.forEach((boton) => {
      if (boton.classList.contains('is-comprado')) return;
      const lado = boton.dataset.lado;
      const costo = Number(boton.dataset.costo);
      const presupuesto = lado === 'trad' ? estado.presupuestoTrad : estado.presupuestoIA;

      if (costo > presupuesto) {
        boton.classList.add('is-deshabilitado');
      } else {
        boton.classList.remove('is-deshabilitado');
      }
    });
  }

function mostrarSecuenciaFinal() {
  const overlayFinal = document.getElementById('overlay-final');
  const personajeFinal = document.getElementById('personaje-final');
  const secuenciaFinal = document.getElementById('secuencia-final');
  const imgGloboFinal = document.getElementById('img-globo-final');
  const trianguloFinal = document.getElementById('triangulo-final');
  const botonFinal = document.getElementById('boton-final');
  const textoFinal = document.querySelector('#final-texto p');

  const pasosFinal = [
    {
      imagen: 'images/globofinal1.png',

    },
    {
      imagen: 'images/globofinal2.png',
      texto: `La <span class="acento">automatización</span> no elimina
        mágicamente los costos humanos, sino que
        <span class="acento">transforma los perfiles</span>. El trabajo pasa
        de la creación manual repetitiva a la curaduría, requiriendo nuevos
        roles de supervisión, diseño de sistemas y control de calidad.`,
    },
    {
      imagen: 'images/globofinal2.png',
      texto: `La verdadera respuesta es una <span class="acento">sinergia</span>
        entre ambas formas: IA aportando <span class="acento">eficiencia y
        escala</span>, mientras el <span class="acento">humano controla</span>
        el producto desde la creatividad, sino también aportando calidad y
        ayudando a mantener el "<span class="acento">alma</span>" del
        videojuego.`,
    },
  ];

  let indiceFinal = 0;

  function pintarPaso() {
    const paso = pasosFinal[indiceFinal];
    imgGloboFinal.src = paso.imagen;
    textoFinal.innerHTML = paso.texto || '';
  }

  pintarPaso();
  overlayFinal.classList.add('is-visible');
  personajeFinal.classList.add('is-visible');
  secuenciaFinal.classList.add('is-visible');

  
  trianguloFinal.addEventListener('click', () => {
    indiceFinal++;
    pintarPaso();

    if (indiceFinal === pasosFinal.length - 1) {
      trianguloFinal.style.display = 'none';
      botonFinal.style.display = 'inline-flex';
    }
  });

  botonFinal.addEventListener('click', () => {
    window.location.href = 'final.html';
  });
}

  // Restaurar estado guardado
  itemsEscena22.forEach(aplicarEstadoAItem);
  actualizarPresupuestos();
  actualizarTotales();
  actualizarListas();
  revisarDisponibilidad();

  // Listeners de compra
  itemsEscena22.forEach((boton) => {
    boton.addEventListener('click', () => {
      const categoria = boton.dataset.categoria;
      if (estado.comprados[categoria]) return; // ya comprado, no hace nada

      const lado = boton.dataset.lado;
      const costo = Number(boton.dataset.costo);
      const horas = Number(boton.dataset.horas);

      if (lado === 'trad') {
        if (costo > estado.presupuestoTrad) return;
        estado.presupuestoTrad -= costo;
        estado.horasTrad[categoria] = horas;
      } else {
        if (costo > estado.presupuestoIA) return;
        estado.presupuestoIA -= costo;
        estado.horasIA[categoria] = horas;
      }

      estado.comprados[categoria] = true;
      guardar();

      boton.classList.add('is-comprado');
      const img = boton.querySelector('.escena22__item-imagen');
      img.src = img.src.replace('-off.', '-on.');

      actualizarPresupuestos();
      actualizarTotales();
      actualizarListas();
      revisarDisponibilidad();

      // Si ya se compraron todos los ítems: espera 2s, oscurece y muestra la secuencia final
      const totalItems = itemsEscena22.length;
      const totalComprados = Object.keys(estado.comprados).length;

      if (totalComprados === totalItems) {
        setTimeout(mostrarSecuenciaFinal, 2000);
        return; // no navega al destino individual, prioriza la secuencia final
      }

      const destino = boton.dataset.destino;
      if (destino) {
        setTimeout(() => {
          window.location.href = destino;
        }, 200);
      }
    });
  });
}