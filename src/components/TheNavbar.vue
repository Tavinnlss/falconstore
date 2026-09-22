<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { store, whatsappLink } from '../config/store'

const scrolled = ref(false)
const menuOpen = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const navClass = computed(() => ({
  'is-scrolled': scrolled.value,
  'is-open': menuOpen.value,
}))

const links = [
  { href: '#categorias', label: 'Categorias' },
  { href: '#roupas', label: 'Roupas' },
  { href: '#tenis', label: 'Tênis' },
  { href: '#acessorios', label: 'Acessórios' },
  { href: '#vip', label: 'Grupo VIP' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#local', label: 'Local' },
]
</script>

<template>
  <header class="nav" :class="navClass">
    <div class="container nav-inner">
      
      <img src="/img/FalconStore.png" alt="FalconStore" class="imgLogo">

      <nav class="links" :class="{ open: menuOpen }">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="menuOpen = false">
          {{ link.label }}
        </a>
      </nav>

      <a class="btn btn-blue nav-cta" :href="whatsappLink()" target="_blank" rel="noopener">
        Fale conosco
      </a>

      <button class="burger" :aria-expanded="menuOpen" aria-label="Menu" @click="menuOpen = !menuOpen">
        <span /><span /><span />
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  height: var(--nav-h);
  transition: background 0.25s ease, border-color 0.25s ease;
  border-bottom: 1px solid transparent;
}

.nav.is-scrolled,
.nav.is-open {
  background: rgba(7, 7, 8, 0.88);
  backdrop-filter: blur(16px);
  border-bottom-color: var(--graphite);
}

.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
}

.imgLogo{
  max-width: 350px;
  width: 100%;
}

.logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
  letter-spacing: 0.08em;
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.logo span {
  font-family: 'Outfit', sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.22em;
  color: var(--blue);
}

.links {
  display: flex;
  gap: 22px;
  margin-left: auto;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted);
}

.links a:hover {
  color: var(--white);
}

.nav-cta {
  min-height: 42px;
  padding: 0 16px;
}

.burger {
  display: none;
  width: 42px;
  height: 42px;
  position: relative;
}

.burger span {
  position: absolute;
  left: 10px;
  right: 10px;
  height: 2px;
  background: var(--white);
  transition: 0.2s ease;
}

.burger span:nth-child(1) { top: 14px; }
.burger span:nth-child(2) { top: 20px; }
.burger span:nth-child(3) { top: 26px; }

.nav.is-open .burger span:nth-child(1) {
  top: 20px;
  transform: rotate(45deg);
}
.nav.is-open .burger span:nth-child(2) { opacity: 0; }
.nav.is-open .burger span:nth-child(3) {
  top: 20px;
  transform: rotate(-45deg);
}

@media (max-width: 900px) {
  .links {
    display: none;
    position: absolute;
    top: var(--nav-h);
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--black-soft);
    border-bottom: 1px solid var(--graphite);
    padding: 8px 0 16px;
  }

  .nav-inner {
    justify-content: space-between;
  }

  .links.open {
    display: flex;
  }

  .links a {
    padding: 12px 20px;
  }

  .nav-cta {
    margin-left: auto;
  }

  .burger {
    display: block;
  }
}

@media (max-width: 520px) {
  .nav-cta {
    display: none;
  }

  .imgLogo{
    max-width: 150px;
    width: 100%;
  }

}
</style>
