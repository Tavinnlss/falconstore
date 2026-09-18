<script setup>
import { computed } from 'vue'
import { store } from '../config/store'

const mapsSrc = computed(
  () =>
    `https://maps.google.com/maps?q=${encodeURIComponent(store.mapsQuery)}&z=15&output=embed`,
)
</script>

<template>
  <section id="local" class="section">
    <div class="container">
      <div class="section-head hook">
        <div>
          <p class="eyebrow">Ponto físico</p>
          <h2>{{ store.locationHook }}</h2>
        </div>
        <p>
          Passa na loja, prova, escolhe e leva. O endereço abaixo é placeholder — depois a gente troca pelo ponto certo.
        </p>
      </div>

      <div class="panel">
        <div class="info">
          <h3>Onde a gente tá</h3>
          <p>{{ store.address }}</p>
          <ul>
            <li>Entrega para todo o Brasil</li>
            <li>Aceita todas as formas de pagamento</li>
            <li>WhatsApp na hora pra tirar dúvida</li>
          </ul>
        </div>
        <div class="map">
          <iframe
            title="Localização da loja no Google Maps"
            :src="mapsSrc"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hook h2 {
  font-size: clamp(48px, 8vw, 92px);
}

.panel {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  border: 1px solid var(--graphite);
  border-radius: 22px;
  overflow: hidden;
  background: var(--black-soft);
}

.info {
  padding: 36px 32px;
}

h3 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
  margin-bottom: 10px;
}

.info > p {
  color: var(--muted);
  margin-bottom: 22px;
}

ul {
  display: grid;
  gap: 10px;
}

li {
  padding-left: 18px;
  position: relative;
  font-size: 14px;
}

li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--blue);
}

.map {
  min-height: 360px;
  background: var(--graphite);
}

iframe {
  width: 100%;
  height: 100%;
  min-height: 360px;
  border: 0;
  filter: grayscale(0.35) contrast(1.05);
}

@media (max-width: 860px) {
  .panel {
    grid-template-columns: 1fr;
  }
}
</style>
