<script setup>
import { store, whatsappLink } from '../config/store'
</script>

<template>
  <footer class="foot">
    <div class="container row">
      <div class="footerlogo">
        <img src="/img/FalconStore.png" alt="logo">
        <p class="tag">{{ store.tagline }}</p>
      </div>
      <nav>
        <a href="#categorias">Categorias</a>
        <a href="#vip">Grupo VIP</a>
        <a href="#sobre">Sobre</a>
        <a href="#promo">Desconto</a>
        <a href="#local">Cola pra fonte</a>
        <a :href="whatsappLink()" target="_blank" rel="noopener">WhatsApp</a>
        <a :href="store.instagram" target="_blank" rel="noopener">Instagram</a>
      </nav>
    </div>
    <div class="container legal">
      <span>Entrega para todo o Brasil · Aceita todas as formas de pagamento</span>
      <span>© {{ new Date().getFullYear() }} {{ store.name }}</span>
    </div>
  </footer>
</template>

<style scoped>
.foot {
  padding: 36px 0 28px;
  border-top: 1px solid var(--graphite);
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.brand {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 36px;
}

.tag {
  color: var(--muted);
  font-size: 14px;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  color: var(--muted);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

nav a:hover {
  color: var(--white);
}

.legal {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--graphite-mid);
  border-top: 1px solid var(--graphite);
  padding-top: 16px;
}

.footerlogo img{
  width: 100%;
  max-width: 400px;
}
</style>
