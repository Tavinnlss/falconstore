<script setup>
import { store } from '../config/store'

const benefits = [
  { title: 'Alerta de promoções', text: 'Sabe primeiro quando o preço cai. Sem ficar caçando.' },
  { title: 'Novidades exclusivas', text: 'Peças e drops que o grupo vê antes de ir pro feed.' },
  { title: 'Avisos de reposições', text: 'Acabou o seu tamanho? Avisa aqui na hora que volta.' },
  { title: 'Fotos dos produtos', text: 'Bastidor real: caimento, cor e detalhe — não só a foto de catálogo.' },
]
</script>

<template>
  <section id="vip" class="section vip">
    <div class="container layout">
      <div class="copy">
        <p class="eyebrow">Só pra quem tá dentro</p>
        <h2>Grupo VIP da loja</h2>
        <p class="lead">
          Entra no grupo e fica na frente: promoção, reposição e novidade chegam direto no seu celular.
        </p>
        <a class="btn btn-blue" :href="store.vipGroupUrl" target="_blank" rel="noopener">
          Entrar no grupo VIP
        </a>
      </div>

      <ul class="benefits">
        <li v-for="(item, i) in benefits" :key="item.title">
          <span>{{ String(i + 1).padStart(2, '0') }}</span>
          <div>
            <strong>{{ item.title }}</strong>
            <p>{{ item.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.vip {
  background:
    radial-gradient(800px 400px at 10% 20%, rgba(47, 107, 255, 0.18), transparent 60%),
    var(--black);
}

.layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 48px;
  align-items: center;
}

h2 {
  font-size: clamp(44px, 7vw, 80px);
  margin: 10px 0 16px;
}

.lead {
  color: var(--muted);
  max-width: 42ch;
  margin-bottom: 24px;
}

.note {
  margin-top: 12px;
  font-size: 12px;
  color: var(--graphite-mid);
}

.benefits {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.benefits li {
  display: flex;
  gap: 12px;
  padding: 18px;
  border-radius: var(--radius);
  background: var(--black-soft);
  border: 1px solid var(--graphite);
}

.benefits span {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px;
  color: var(--blue);
  line-height: 1;
}

.benefits strong {
  display: block;
  margin-bottom: 4px;
}

.benefits p {
  font-size: 13px;
  color: var(--muted);
}

@media (max-width: 900px) {
  .layout,
  .benefits {
    grid-template-columns: 1fr;
  }
}
</style>
