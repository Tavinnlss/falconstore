<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { store, whatsappLink } from '../config/store'

const slides = [
  {
    title: 'Pés no chão, estilo no alto',
    text: 'Tênis que aguentam o trampo e o fim de semana. Entrega pra todo o Brasil.',
    cta: 'Ver modelos de tênis',
    href: '#tenis',
    image: '/img/sliderfalcon01.jpeg',
  },
  {
    title: 'Do básico ao recado forte',
    text: 'Roupas, tênis e óculos que fecham o look — do rolê à academia, sem perder a identidade.',
    cta: 'Ver roupas',
    href: '#roupas',
    image: '/img/slider03falcon.jpg',
  },
  {
    title: 'A fonte do estilo que se diferencia',
    text: 'Casual, street e um toque esportivo. Peças pra quem não quer parecer todo mundo.',
    cta: 'Ver o drop',
    href: '#categorias',
    image: '/img/slider02falcon.jpg',
  },
 
]

const index = ref(0)
let timer

const go = (i) => {
  index.value = (i + slides.length) % slides.length
  restart()
}

const restart = () => {
  clearInterval(timer)
  timer = setInterval(() => go(index.value + 1), 5600)
}

onMounted(restart)
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section id="topo" class="hero">
    <div class="slides">
      <article
        v-for="(slide, i) in slides"
        :key="slide.title"
        class="slide"
        :class="{ active: i === index }"
      >
        <img :src="slide.image" :alt="slide.title" />
        <div class="veil" />
      </article>
    </div>

    <div class="container hero-copy">
      <p class="eyebrow">{{ store.name }} · street · casual · sport</p>
      <h1>{{ slides[index].title }}</h1>
      <p class="lead">{{ slides[index].text }}</p>
      <div class="actions">
        <a class="btn btn-blue" :href="slides[index].href">{{ slides[index].cta }}</a>
        <a class="btn btn-ghost" :href="whatsappLink('Olá! Gostaria de saber mais sobre os produtos disponíveis na loja. Poderiam me ajudar?')" target="_blank" rel="noopener">
          Saber mais 
        </a>
      </div>
    </div>

    <div class="dots">
      <button
        v-for="(slide, i) in slides"
        :key="slide.title"
        :class="{ on: i === index }"
        :aria-label="`Slide ${i + 1}`"
        @click="go(i)"
      />
    </div>

    <div class="ticker" aria-hidden="true">
      <div class="ticker-track">
        <span v-for="n in 8" :key="n">a fonte do estilo que se diferencia · cola pra fonte · entregas para todo Brasil ·</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: grid;
  align-items: end;
  overflow: hidden;
}

.slides,
.slide,
.slide img,
.veil {
  position: absolute;
  inset: 0;
}

.slide {
  opacity: 0;
  transition: opacity 0.7s ease;
}

.slide.active {
  opacity: 1;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 28%;
  transform: scale(1.06);
}

.slide.active img {
  animation: ken 7s ease forwards;
}

@keyframes ken {
  to { transform: scale(1); }
}

.veil {
  background:
    linear-gradient(180deg, rgba(7, 7, 8, 0.2) 0%, rgba(7, 7, 8, 0.55) 45%, rgba(7, 7, 8, 0.92) 100%),
    linear-gradient(90deg, rgba(7, 7, 8, 0.55), transparent 55%);
}

.hero-copy {
  position: relative;
  z-index: 2;
  padding-bottom: 110px;
  max-width: 820px;
  margin-left: max(20px, calc((100% - var(--max)) / 2));
}

h1 {
  font-size: clamp(52px, 9vw, 108px);
  max-width: 11ch;
  margin: 14px 0 18px;
}

.lead {
  max-width: 46ch;
  color: #d7d8de;
  font-size: 18px;
  margin-bottom: 28px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.dots {
  position: absolute;
  right: 28px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dots button {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.28);
}

.dots button.on {
  height: 28px;
  background: var(--blue);
}

.ticker {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  overflow: hidden;
  border-top: 1px solid var(--graphite);
  background: rgba(7, 7, 8, 0.7);
  backdrop-filter: blur(8px);
}

.ticker-track {
  display: flex;
  gap: 28px;
  white-space: nowrap;
  animation: marquee 28s linear infinite;
  padding: 12px 0;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 0.08em;
  color: var(--muted);
}

@keyframes marquee {
  to { transform: translateX(-50%); }
}

@media (max-width: 720px) {
  .hero {
    min-height: 86vh;
  }

  .hero-copy {
    padding-bottom: 92px;
    margin-left: 14px;
  }

  .dots {
    right: 14px;
  }

  .lead {
    font-size: 16px;
  }
}
</style>
