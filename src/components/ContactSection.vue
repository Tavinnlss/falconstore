<script setup>
import { store, whatsappLink } from '../config/store'
</script>

<template>
  <section id="contato" class="section contact">
    <div class="container box">
      <p class="eyebrow">Fala com a gente</p>
      <h2>Entra em contato</h2>
      <p class="lead">
        Clica e já cai no WhatsApp da loja.
      </p>
      <a class="btn btn-white" :href="whatsappLink()" target="_blank" rel="noopener">
        Chamar {{ store.phoneDisplay }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding-top: 20px;
}

.box {
  text-align: center;
  padding: 72px 24px;
  border-radius: 28px;
  background:
    linear-gradient(135deg, rgba(47, 107, 255, 0.22), transparent 45%),
    linear-gradient(180deg, #15161c, #0d0e12);
  border: 1px solid var(--graphite);
}

h2 {
  font-size: clamp(44px, 7vw, 84px);
  margin: 10px 0 12px;
}

.lead {
  color: var(--muted);
  margin-bottom: 26px;
}
</style>
