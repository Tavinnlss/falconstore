<script setup>
import { computed, ref } from 'vue'
import { whatsappLink } from '../config/store'

const props = defineProps({
  id: String,
  eyebrow: String,
  title: String,
  subtitle: String,
  items: { type: Array, required: true },
  tone: { type: String, default: 'default' },
})

const track = ref(null)

const ask = (item) =>
  whatsappLink(`Fala pessoal! Quero saber sobre ${item.name}, podem me ajuda?`)

const scrollByCards = (dir) => {
  const el = track.value
  if (!el) return
  const card = el.querySelector('.card')
  const amount = (card?.offsetWidth || 280) + 16
  el.scrollBy({ left: dir * amount, behavior: 'smooth' })
}

const sectionClass = computed(() => ({ alt: props.tone === 'alt' }))
</script>

<template>
  <section :id="id" class="section wrap" :class="sectionClass">
    <div class="container">
      <div class="section-head">
        <div class="titleCategorys">
          <p class="eyebrow">{{ eyebrow }}</p>
          <h2>{{ title }}</h2>
        </div>
        <p>{{ subtitle }}</p>
      </div>

      <div class="slider">
        <button class="nav prev" aria-label="Anterior" @click="scrollByCards(-1)">‹</button>
        <div ref="track" class="track">
          <article v-for="item in items" :key="item.name" class="card">
            <div class="shot">
              <img :src="item.image" :alt="item.name" />
              <span class="tag">{{ item.tag }}</span>
            </div>
            <div class="info">
              <h3>{{ item.name }}</h3>
              <p class="desc">{{ item.description }}</p>
              <p class="price"><span class="priceStart">A partir de</span>{{ item.price }}</p>
              <a class="btn btn-ghost" :href="ask(item)" target="_blank" rel="noopener">ENTRAR EM CONTATO</a>
            </div>
          </article>
        </div>
        <button class="nav next" aria-label="Próximo" @click="scrollByCards(1)">›</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.titleCategorys{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.wrap.alt {
  background: var(--black-soft);
}

.slider {
  position: relative;
}

.track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(240px, 280px);
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  padding: 4px 2px 12px;
}

.track::-webkit-scrollbar {
  display: none;
}

.card {
  scroll-snap-align: start;
  background: #16161a;
  border: 1px solid var(--graphite);
  border-radius: var(--radius);
  overflow: hidden;
}

.shot {
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
}

.shot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.card:hover img {
  transform: scale(1.05);
}

.tag {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(7, 7, 8, 0.72);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.info {
  display: flex;
  flex-direction: column;
  padding: 16px;
  min-height: 168px;
}

h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
}

.desc {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.45;
  font-weight: 400;
  margin-bottom: 10px;
}

.price {
  color: var(--blue-hot);
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 14px;
}

.priceStart{
  color: rgb(100, 100, 100);
  font-size: 12px;
  margin-right: 10px;
}

.info .btn {
  width: 100%;
  min-height: 42px;
}

.nav {
  position: absolute;
  top: 38%;
  z-index: 2;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--white-pure);
  color: var(--black);
  font-size: 28px;
  line-height: 1;
  display: grid;
  place-items: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

.prev { left: -8px; }
.next { right: -8px; }

@media (max-width: 720px) {
  .nav { display: none; }
  .track {
    grid-auto-columns: minmax(72%, 240px);
  }
}
</style>
