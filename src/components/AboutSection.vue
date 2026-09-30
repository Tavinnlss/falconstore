<script setup>
/**
 * Texto e foto são provisórios.
 * Trocar quando o cliente enviar o texto e a imagem oficiais.
 */
import { store } from "../config/store";
</script>

<template>
  <section id="sobre" class="section about">
    <div class="container layout">
      <figure class="shot">
        <img
          src="/img/slider02falcon.jpg"
          alt="Interior da loja Falcon, com araras e peças expostas"
        />
      </figure>

      <div class="copy">
        <p class="eyebrow">Quem somos</p>
        <h2>Sobre nós</h2>

        <p>
          A Falcon Store nasceu em meados de 2022/2023, dentro de casa, com a
          venda de camisas de time e o sonho de construir algo maior. Começamos
          de forma totalmente online, com clientes realizando suas compras
          diretamente em nossa casa. Entre desafios, aprendizados e muita
          dedicação, em 2025 oficializamos nossa loja na garagem de casa. Hoje,
          com um novo endereço e com uma nova estrutura seguimos crescendo e
          oferecendo uma variedade de produtos de moda masculina, sempre com o
          mesmo propósito: levar estilo, qualidade e atitude aos nossos
          clientes.
        </p>

        <ul class="facts">
          <li>
            <strong>Teixeiras, MG</strong>
            <span>Cola pra fonte</span>
          </li>
          <li>
            <strong>Brasil inteiro</strong>
            <span>Entregas para todo Brasil</span>
          </li>
          <li>
            <strong>Variedades</strong>
            <span>Casual, street e esportivo</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background:
    radial-gradient(
      700px 320px at 90% 10%,
      rgba(47, 107, 255, 0.14),
      transparent 60%
    ),
    var(--black-soft);
}

.layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: center;
}

.shot {
  margin: 0;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid var(--graphite);
  aspect-ratio: 4 / 5;
  max-height: 620px;
}

.shot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
}

h2 {
  font-size: clamp(44px, 7vw, 80px);
  margin: 10px 0 16px;
}

.lead {
  color: var(--white);
  font-size: 18px;
  margin-bottom: 14px;
}

.copy p + p {
  color: var(--muted);
  margin-bottom: 12px;
}

.facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 22px;
}

.facts li {
  padding: 14px 12px;
  border-radius: var(--radius);
  background: var(--black);
  border: 1px solid var(--graphite);
}

.facts strong {
  display: block;
  font-size: 14px;
  margin-bottom: 2px;
}

.facts span {
  font-size: 12px;
  color: var(--muted);
}

@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .shot {
    aspect-ratio: 16 / 10;
    max-height: none;
  }

  .facts {
    grid-template-columns: 1fr;
  }
}
</style>
