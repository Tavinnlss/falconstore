<script setup>
/**
 * Texto e foto são provisórios.
 * Trocar quando o cliente enviar o texto e a imagem oficiais.
 */
import { store } from '../config/store'
</script>

<template>
  <section id="sobre" class="section about">
    <div class="container layout">
      <figure class="shot">
        <img src="/img/slider02falcon.jpg" alt="Interior da loja Falcon, com araras e peças expostas" />
      </figure>

      <div class="copy">
        <p class="eyebrow">Quem somos</p>
        <h2>Sobre nós</h2>
        <p class="lead">
          A {{ store.name }} é a fonte do estilo que se diferencia — na loja em Teixeiras e pra quem pede de longe.
        </p>
        <p>
          A loja existe pra quem quer montar o visual sem perder a identidade. Roupa, tênis e acessório no mesmo lugar, do casual do dia a dia até o corte mais esportivo.
        </p>
        <p>
          O atendimento é de gente pra gente: a gente mostra o caimento, indica o tamanho e ajuda a fechar o look. Chegou na loja ou mandou mensagem, o recado é o mesmo — peça boa, preço justo e zero enrolação.
        </p>

        <ul class="facts">
          <li>
            <strong>Teixeiras, MG</strong>
            <span>Loja física no centro</span>
          </li>
          <li>
            <strong>Brasil inteiro</strong>
            <span>Entrega pra qualquer estado</span>
          </li>
          <li>
            <strong>Um estilo só</strong>
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
    radial-gradient(700px 320px at 90% 10%, rgba(47, 107, 255, 0.14), transparent 60%),
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
