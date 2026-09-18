<script setup>
import roupasImage from "/img/cate01.jpg";
import tenisImage from "/img/tenis01.jpg";
import oculosImage from "/img/oculos01.jpg";

const categories = [
  {
    id: "roupas",
    name: "Roupas",
    hint: "Casual → esportivo",
    image: roupasImage,
  },
  {
    id: "tenis",
    name: "Tênis",
    hint: "Rua e performance",
    image: tenisImage,
  },
  {
    id: "acessorios",
    name: "Acessórios",
    hint: "O detalhe do look",
    image: oculosImage,
  },
];
</script>

<template>
  <section id="categorias" class="section">
    <div class="container">
      <div class="section-head">
        <div class="titleHeadCategory">
          <p class="eyebrow">Escolhe o recado</p>
          <h2>Categorias</h2>
        </div>
        <p>
          Três frentes, um estilo. Entra na que combina com o seu momento — ou
          monta o combo inteiro.
        </p>
      </div>

      <div class="grid">
        <a
          v-for="cat in categories"
          :key="cat.id"
          class="card"
          :href="`#${cat.id}`"
        >
          <img :src="cat.image" :alt="cat.name" />
          <div class="meta">
            <span>{{ cat.hint }}</span>
            <strong>{{ cat.name }}</strong>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.titleHeadCategory {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.card {
  position: relative;
  min-height: 380px;
  border-radius: var(--radius);
  overflow: hidden;
  isolation: isolate;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
  transition: transform 0.5s ease;
}

.card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 30%, rgba(7, 7, 8, 0.88));
}

.card:hover img {
  transform: scale(1.08);
}

.meta {
  position: absolute;
  z-index: 1;
  left: 22px;
  right: 22px;
  bottom: 22px;
}

.meta span {
  display: block;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--blue-hot);
  margin-bottom: 6px;
}

.meta strong {
  font-family: "Bebas Neue", sans-serif;
  font-size: 48px;
  font-weight: 400;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .card {
    min-height: 240px;
  }
}
</style>
